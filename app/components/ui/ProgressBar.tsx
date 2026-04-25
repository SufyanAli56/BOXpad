import { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

interface ProgressBarProps {
  progress: number; // 0-100
  className?: string;
  showPercentage?: boolean;
  animated?: boolean;
  color?: 'blue' | 'green' | 'purple' | 'red';
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className,
  showPercentage = false,
  animated = true,
  color = 'blue'
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayProgress(progress);
    }
  }, [progress, animated]);

  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500',
  };

  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">Loading Dashboard</span>
        {showPercentage && (
          <span className="text-sm text-gray-500">{Math.round(displayProgress)}%</span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={cn(
            'h-2 rounded-full transition-all duration-500 ease-out',
            colorClasses[color]
          )}
          style={{ width: `${displayProgress}%` }}
        />
      </div>
    </div>
  );
};

// Loading overlay component
interface LoadingOverlayProps {
  isLoading: boolean;
  progress: number;
  message?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  progress,
  message = 'Loading...'
}) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full mx-4">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{message}</h3>
          <p className="text-sm text-gray-600">Please wait while we load your dashboard</p>
        </div>
        
        <ProgressBar 
          progress={progress} 
          showPercentage 
          animated 
          className="mb-4"
        />
        
        <div className="text-center">
          <p className="text-xs text-gray-500">
            This may take a few moments...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;