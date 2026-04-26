'use client';

interface MessageProps {
  content: string;
  time: string;
  isFromUser: boolean;
}

export default function Message({ content, time, isFromUser }: MessageProps) {
  return (
    <div className={`flex ${isFromUser ? 'justify-start' : 'justify-end'}`}>
      <div className="max-w-md">
        <div className={`rounded-lg px-4 py-3 ${
          isFromUser 
            ? 'bg-white border border-gray-200' 
            : 'bg-blue-500 text-white'
        }`}>
          <p className={`text-sm mb-2 ${isFromUser ? 'text-gray-900' : 'text-white'}`}>
            {content}
          </p>
          <p className={`text-xs ${isFromUser ? 'text-gray-500' : 'text-blue-100'}`}>
            {time}
          </p>
        </div>
      </div>
    </div>
  );
}