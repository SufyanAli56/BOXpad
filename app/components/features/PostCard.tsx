import { Post, User } from '../../types';
import { truncateText, capitalize } from '../../lib/utils';
import Card, { CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';

interface PostCardProps {
  post: Post;
  author?: User;
  onReadMore?: (postId: number) => void;
  showAuthor?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ 
  post, 
  author, 
  onReadMore,
  showAuthor = true 
}) => {
  return (
    <Card hover className="h-full flex flex-col">
      <CardContent className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
          {capitalize(post.title)}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {truncateText(post.body, 120)}
        </p>
      </CardContent>
      
      {(showAuthor || onReadMore) && (
        <CardFooter className="flex items-center justify-between">
          {showAuthor && author && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-medium text-sm">
                  {author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{author.name}</p>
                <p className="text-xs text-gray-500">@{author.username}</p>
              </div>
            </div>
          )}
          
          {onReadMore && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onReadMore(post.id)}
            >
              Read More
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default PostCard;