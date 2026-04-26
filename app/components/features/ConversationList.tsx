'use client';

interface ConversationListProps {
  searchTerm: string;
}

export default function ConversationList({ searchTerm }: ConversationListProps) {
  // Mock conversations data matching the image
  const conversations = [
    {
      id: 1,
      name: 'Olivia McKinsey',
      avatar: 'O',
      avatarColor: 'bg-purple-500',
      message: 'Oh my god! 😊 I try it ASAP, thank...',
      time: '23:03',
      unread: false,
      selected: true
    },
    {
      id: 2,
      name: 'Sara Williams',
      avatar: 'E',
      avatarColor: 'bg-yellow-500',
      message: 'Good Evening, Emily! Hope you are...',
      time: '23:30',
      unread: false,
      selected: false
    },
    {
      id: 3,
      name: 'Frank Thompson',
      avatar: 'F',
      avatarColor: 'bg-blue-500',
      message: 'Thank you for signing up Frank! It t...',
      time: '22:00',
      unread: false,
      selected: false
    },
    {
      id: 4,
      name: 'Grace Lee',
      avatar: 'G',
      avatarColor: 'bg-orange-500',
      message: 'I am sending you the report right a...',
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
      message: 'I will update you soon Isabella!',
      time: '16:35',
      unread: false,
      selected: false
    },
    {
      id: 7,
      name: 'James Brown',
      avatar: 'J',
      avatarColor: 'bg-purple-400',
      message: 'Hello James! Let\'s collaborate on...',
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
    },
    {
      id: 9,
      name: 'Lucie Green',
      avatar: 'L',
      avatarColor: 'bg-blue-400',
      message: 'Hey Lucie! Ready for the holiday...',
      time: 'Yesterday',
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
          className={`px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-100 ${
            conversation.selected ? 'bg-blue-50' : ''
          }`}
        >
          <div className="flex items-start space-x-3">
            <div className={`w-10 h-10 ${conversation.avatarColor} rounded-full flex items-center justify-center flex-shrink-0`}>
              <span className="text-white font-medium text-sm">{conversation.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-medium text-gray-900 truncate">{conversation.name}</h4>
                <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{conversation.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{conversation.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}