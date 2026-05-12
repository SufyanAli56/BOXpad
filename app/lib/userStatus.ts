/**
 * User Status Utilities
 * REQ-USER-02 & REQ-USER-03
 */

export type UserStatus = 'online' | 'away' | 'offline';

export interface UserStatusInfo {
  status: UserStatus;
  label: string;
  color: string;
  icon: string;
}

/**
 * Get user status based on is_online and last_seen
 */
export function getUserStatus(isOnline?: boolean, lastSeen?: string): UserStatusInfo {
  if (isOnline) {
    return {
      status: 'online',
      label: 'Online',
      color: 'bg-green-500',
      icon: '🟢',
    };
  }

  if (!lastSeen) {
    return {
      status: 'offline',
      label: 'Offline',
      color: 'bg-gray-400',
      icon: '⚫',
    };
  }

  const lastSeenDate = new Date(lastSeen);
  const now = new Date();
  const diffMinutes = Math.floor((now.getTime() - lastSeenDate.getTime()) / 1000 / 60);

  // If last seen within 5 minutes, show as "Away"
  if (diffMinutes < 5) {
    return {
      status: 'away',
      label: 'Away',
      color: 'bg-yellow-500',
      icon: '🟡',
    };
  }

  return {
    status: 'offline',
    label: 'Offline',
    color: 'bg-gray-400',
    icon: '⚫',
  };
}

/**
 * Format last seen time
 */
export function formatLastSeen(lastSeen?: string): string {
  if (!lastSeen) return 'Never';

  const lastSeenDate = new Date(lastSeen);
  const now = new Date();
  const diffSeconds = Math.floor((now.getTime() - lastSeenDate.getTime()) / 1000);

  if (diffSeconds < 60) {
    return 'Just now';
  }

  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
  }

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  }

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  }

  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 4) {
    return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''} ago`;
  }

  return lastSeenDate.toLocaleDateString();
}

/**
 * Get status indicator component props
 */
export function getStatusIndicator(isOnline?: boolean, lastSeen?: string) {
  const status = getUserStatus(isOnline, lastSeen);
  const lastSeenText = formatLastSeen(lastSeen);

  return {
    ...status,
    lastSeenText,
    tooltip: isOnline ? 'Online now' : `Last seen ${lastSeenText}`,
  };
}
