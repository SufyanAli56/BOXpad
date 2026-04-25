import { User } from '../../types';
import { getAvatarUrl } from '../../lib/utils';
import Card, { CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';

interface UserCardProps {
  user: User;
  onViewProfile?: (userId: number) => void;
  showDetails?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  onViewProfile,
  showDetails = true 
}) => {
  return (
    <Card hover className="h-full flex flex-col">
      <CardContent className="flex-1 text-center">
        {/* Avatar */}
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">
            {user.name.charAt(0)}
          </span>
        </div>
        
        {/* User Info */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {user.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3">@{user.username}</p>
        
        {showDetails && (
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{user.email}</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{user.address.city}</span>
            </div>
          </div>
        )}
        
        {user.company && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium text-gray-900">{user.company.name}</p>
            <p className="text-xs text-gray-500 italic">{user.company.catchPhrase}</p>
          </div>
        )}
      </CardContent>
      
      {onViewProfile && (
        <CardFooter>
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => onViewProfile(user.id)}
            className="w-full"
          >
            View Profile
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default UserCard;