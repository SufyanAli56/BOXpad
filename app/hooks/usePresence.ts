import { useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { RealtimeChannel } from '@supabase/supabase-js';

interface UsePresenceOptions {
  userId: string;
  channelName?: string;
}

/**
 * Hook to manage user presence (online/offline status)
 * REQ-USER-02: Online Status using Supabase Presence
 * REQ-USER-03: Last Seen updated every 60 seconds
 */
export function usePresence({ userId, channelName = 'online-users' }: UsePresenceOptions) {
  const channelRef = useRef<RealtimeChannel | null>(null);
  const lastSeenIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!userId) return;

    // Set user online when component mounts
    setUserOnline(userId);

    // Setup Supabase Presence channel
    setupPresenceChannel(userId, channelName);

    // Setup last_seen updater (every 60 seconds)
    setupLastSeenUpdater(userId);

    // Cleanup on unmount
    return () => {
      cleanup(userId);
    };
  }, [userId, channelName]);

  // Setup presence channel
  const setupPresenceChannel = (userId: string, channelName: string) => {
    const channel = supabase.channel(channelName, {
      config: {
        presence: {
          key: userId,
        },
      },
    });

    // Track presence
    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        console.log('Presence sync:', state);
      })
      .on('presence', { event: 'join' }, ({ key, newPresences }) => {
        console.log('User joined:', key, newPresences);
      })
      .on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
        console.log('User left:', key, leftPresences);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          // Track this user's presence
          await channel.track({
            user_id: userId,
            online_at: new Date().toISOString(),
          });
        }
      });

    channelRef.current = channel;
  };

  // Setup last_seen updater (every 60 seconds)
  const setupLastSeenUpdater = (userId: string) => {
    // Update immediately
    updateLastSeen(userId);

    // Then update every 60 seconds
    const interval = setInterval(() => {
      updateLastSeen(userId);
    }, 60000); // 60 seconds

    lastSeenIntervalRef.current = interval;
  };

  // Set user online
  const setUserOnline = async (userId: string) => {
    try {
      const { error } = await supabase.rpc('set_user_online', {
        user_id: userId,
      });

      if (error) {
        console.error('Error setting user online:', error);
      }
    } catch (error) {
      console.error('Failed to set user online:', error);
    }
  };

  // Set user offline
  const setUserOffline = async (userId: string) => {
    try {
      const { error } = await supabase.rpc('set_user_offline', {
        user_id: userId,
      });

      if (error) {
        console.error('Error setting user offline:', error);
      }
    } catch (error) {
      console.error('Failed to set user offline:', error);
    }
  };

  // Update last_seen timestamp
  const updateLastSeen = async (userId: string) => {
    try {
      const { error } = await supabase.rpc('update_user_last_seen', {
        user_id: userId,
      });

      if (error) {
        console.error('Error updating last_seen:', error);
      }
    } catch (error) {
      console.error('Failed to update last_seen:', error);
    }
  };

  // Cleanup function
  const cleanup = async (userId: string) => {
    // Clear last_seen interval
    if (lastSeenIntervalRef.current) {
      clearInterval(lastSeenIntervalRef.current);
      lastSeenIntervalRef.current = null;
    }

    // Unsubscribe from presence channel
    if (channelRef.current) {
      await channelRef.current.untrack();
      await channelRef.current.unsubscribe();
      channelRef.current = null;
    }

    // Set user offline
    await setUserOffline(userId);
  };

  return {
    channel: channelRef.current,
  };
}

/**
 * Hook to handle beforeunload event (tab close/refresh)
 * Sets user offline when tab is closed
 */
export function useBeforeUnload(userId: string | null) {
  useEffect(() => {
    if (!userId) return;

    const handleBeforeUnload = async () => {
      // Use sendBeacon for reliable offline status update
      const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/set_user_offline`;
      const payload = JSON.stringify({ user_id: userId });
      
      if (navigator.sendBeacon) {
        const blob = new Blob([payload], { type: 'application/json' });
        navigator.sendBeacon(url, blob);
      } else {
        // Fallback to synchronous fetch
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
          },
          body: payload,
          keepalive: true,
        }).catch(console.error);
      }
    };

    // Listen for tab close/refresh
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Listen for visibility change (tab switch)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is hidden - user might be away
        updateLastSeen(userId);
      } else {
        // Tab is visible - user is back
        setUserOnline(userId);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [userId]);
}

// Helper functions
async function setUserOnline(userId: string) {
  try {
    await supabase.rpc('set_user_online', { user_id: userId });
  } catch (error) {
    console.error('Failed to set user online:', error);
  }
}

async function updateLastSeen(userId: string) {
  try {
    await supabase.rpc('update_user_last_seen', { user_id: userId });
  } catch (error) {
    console.error('Failed to update last_seen:', error);
  }
}
