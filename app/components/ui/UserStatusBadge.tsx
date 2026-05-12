import { getStatusIndicator } from '../../lib/userStatus';

interface UserStatusBadgeProps {
  isOnline?: boolean;
  lastSeen?: string;
  showLabel?: boolean;
  showLastSeen?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * UserStatusBadge - Display user online status
 * REQ-USER-02 & REQ-USER-03
 */
export function UserStatusBadge({
  isOnline,
  lastSeen,
  showLabel = false,
  showLastSeen = false,
  size = 'md',
  className = '',
}: UserStatusBadgeProps) {
  const statusInfo = getStatusIndicator(isOnline, lastSeen);

  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const dotSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-2 ${className}`} title={statusInfo.tooltip}>
      {/* Status Dot */}
      <span className={`${dotSize} ${statusInfo.color} rounded-full ring-2 ring-white`} />
      
      {/* Status Label */}
      {showLabel && (
        <span className="text-sm font-medium text-gray-700">
          {statusInfo.label}
        </span>
      )}

      {/* Last Seen */}
      {showLastSeen && !isOnline && (
        <span className="text-xs text-gray-500">
          {statusInfo.lastSeenText}
        </span>
      )}
    </div>
  );
}
