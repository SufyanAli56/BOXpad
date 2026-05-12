'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { usePresence, useBeforeUnload } from '../../hooks/usePresence';

/**
 * PresenceProvider - Manages user online status and last_seen
 * REQ-USER-02: Online Status
 * REQ-USER-03: Last Seen
 */
export function PresenceProvider({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);

  // Get current user
  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
      }
    };

    getCurrentUser();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUserId(session.user.id);
      } else {
        setUserId(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Setup presence tracking
  usePresence({
    userId: userId || '',
  });

  // Handle tab close/refresh
  useBeforeUnload(userId);

  return <>{children}</>;
}
