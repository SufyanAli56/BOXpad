'use client';

interface ConversationListProps {
  searchTerm: string;
}

export default function ConversationList({ searchTerm }: ConversationListProps) {
  // Mock conversations data - in a real app this would come from props or context
  const conversations = [
    {
      id: 1,
      name: 'Olivia McKinsey',
      avatar: 'O',
      avatarColor: 'bg-purple-500',
      message: 'Hi, I recently joined FitLife the past 2 weeks and I\'m trying to access my workout plan, but I can\'t login. Can you help?',
      time: '23:03',
      unread: true,
      selected: true
    },
    {
      id: 2,
      name: 'Sara Williams',
      avatar: 'S',
      avatarColor: 'bg-yellow-500',
      message: 'Good Evening, Emily! Hope you are doing well.',
      time: '22:30',
      unread: false,
      selected: false
    },
    {
      id: 3,
      name: 'Frank Thompson',
      avatar: 'F',
      avatarColor: 'bg-blue-500',
      message: 'Thank you for helping me with my inquiry. I hope it is...',
      time: '21:06',
      unread: false,
      selected: false
    },
    {
      id: 4,
      name: 'Grace Lee',
      avatar: 'G',
      avatarColor: 'bg-red-500',
      message: 'I am sending you the report right now.',
      time: '20:43',
      unread: false,
      selected: false
    },
    {
      id: 5,
      name: 'Henry Adams',
      avatar: 'H',
      avatarColor: 'bg-yellow-400',
      message: 'Thank you for filling out our survey!',
      time: '17:37',
      unread: false,
      selected: false
    },
    {
      id: 6,
      name: 'Isabella Martinez',
      avatar: 'I',
      avatarColor: 'bg-orange-500',
      message: 'Hello Isabella, you have been selected...',
      time: '16:35',
      unread: false,
      selected: false
    },
    {
      id: 7,
      name: 'James Brown',
      avatar: 'J',
      avatarColor: 'bg-purple-400',
      message: 'Hello James! Let\'s schedule a call...',
      time: '15:44',
      unread: false,
      selected: false
    },
    {
      id: 8,
      name: 'Katherine White',
      avatar: 'K',
      avatarColor: 'bg-yellow-500',
      message: 'Hi Katherine, looking forward to our...',
      time: '09:02',
      unread: false,
      selected: false
    }
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto">
      {filteredConversations.map((conversation) => (
        <div
          key={conversation.id}
          className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
            conversation.selected ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
          }`}
        >
          <div className="flex items-start space-x-3">
            <div className={`w-10 h-10 ${conversation.avatarColor} rounded-full flex items-center justify-center`}>
              <span className="text-white font-medium text-sm">{conversation.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-medium text-gray-900">{conversation.name}</h4>
                <span className="text-xs text-gray-500">{conversation.time}</span>
              </div>
              <p className="text-xs text-gray-600 line-clamp-2">{conversation.message}</p>
              {conversation.unread && (
                <div className="mt-2">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}