'use client';

interface ChatMessagesProps {
  className?: string;
  selectedChatId?: number;
  onBackClick?: () => void;
  onDetailsClick?: () => void;
}

export default function ChatMessages({ className = '', selectedChatId = 1, onBackClick, onDetailsClick }: ChatMessagesProps) {
  // Chat data for different users
  const chatData = {
    1: {
      name: 'Olivia McKinsey',
      avatar: 'O',
      avatarColor: 'bg-purple-500',
      status: 'Active now',
      messages: [
        {
          id: 1,
          type: 'incoming',
          message: 'Hi, I recently joined FitLife the past 2 weeks and I\'m trying to access my workout plan, but I can\'t login. Can you help?',
          time: '23:06',
          read: true
        },
        {
          id: 2,
          type: 'outgoing',
          message: 'Hello Olivia, 👋 I\'m Michael, your AI customer support assistant. Let\'s fix this quickly. Could you please share the email address?',
          time: '23:06',
          read: true
        },
        {
          id: 3,
          type: 'incoming',
          message: 'Yes, it\'s olivia.mckinsey@gmail.com',
          time: '23:06',
          read: true
        },
        {
          id: 4,
          type: 'outgoing',
          message: 'Thanks! I see the issue. Your reset wasn\'t completed. I\'ve sent a new link - please check your inbox.',
          time: '23:07',
          read: true
        },
        {
          id: 5,
          type: 'incoming',
          message: 'Perfect! 🎉 Your plan is ready under "My Programs". Since you\'re starting out, I suggest starting with our 3 week results and is 20% off here: www.FitLife.com/Premium',
          time: '23:08',
          read: true
        },
        {
          id: 6,
          type: 'outgoing',
          message: 'Oh my god! 😊 I try it ASAP, thank you so much!',
          time: '23:08',
          read: true
        },
        {
          id: 7,
          type: 'incoming',
          message: 'I see it, resetting now...',
          time: '23:17',
          read: true
        },
        {
          id: 8,
          type: 'outgoing',
          message: 'Done! I\'m logged in. Thanks!',
          time: '23:20',
          read: true
        }
      ]
    },
    2: {
      name: 'Sara Williams',
      avatar: 'E',
      avatarColor: 'bg-yellow-500',
      status: 'Last seen 2 hours ago',
      messages: [
        {
          id: 1,
          type: 'incoming',
          message: 'Good Evening, Emily! Hope you are doing well.',
          time: '23:30',
          read: true
        },
        {
          id: 2,
          type: 'outgoing',
          message: 'Hi Sara! I\'m doing great, thank you for asking. How can I help you today?',
          time: '23:31',
          read: true
        }
      ]
    },
    3: {
      name: 'Frank Thompson',
      avatar: 'F',
      avatarColor: 'bg-blue-500',
      status: 'Online',
      messages: [
        {
          id: 1,
          type: 'outgoing',
          message: 'Thank you for signing up Frank! It\'s great to have you with us.',
          time: '22:00',
          read: true
        },
        {
          id: 2,
          type: 'incoming',
          message: 'Thanks for the warm welcome! Looking forward to getting started.',
          time: '22:01',
          read: true
        }
      ]
    }
  };

  const currentChat = chatData[selectedChatId as keyof typeof chatData] || chatData[1];

  return (
    <div className={`w-full lg:flex-1 bg-white flex flex-col relative ${className}`}>
      {/* Chat Header */}
      <div className="flex items-center justify-between px-3 md:px-4 py-3 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          {/* Back button for mobile */}
          <button 
            onClick={onBackClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className={`w-8 h-8 ${currentChat.avatarColor} rounded-full flex items-center justify-center`}>
            <span className="text-white font-medium text-sm">{currentChat.avatar}</span>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">{currentChat.name}</h3>
            <p className="text-xs text-gray-500">{currentChat.status}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="hidden md:block p-2 hover:bg-gray-100 rounded-lg bg-gray-100">
            <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="1.5"/>
              <circle cx="12" cy="12" r="1.5"/>
              <circle cx="12" cy="19" r="1.5"/>
            </svg>
          </button>
          <button className="hidden md:block p-2 hover:bg-gray-100 rounded-lg bg-gray-100">
            <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg bg-black">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          </button>
          {/* Details button for mobile/tablet */}
          <button 
            onClick={onDetailsClick}
            className="xl:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Date Header */}
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
        <p className="text-xs text-gray-500 text-center">28 August 2025</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {currentChat.messages.map((message) => (
          <div key={message.id}>
            {message.type === 'incoming' ? (
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 ${currentChat.avatarColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-medium text-sm">{currentChat.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-xs">
                    <p className="text-sm text-gray-900">{message.message}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-start space-x-3 justify-end">
                  <div className="flex flex-col items-end">
                    {/* Time and tick on left side of message */}
                    <div className="flex items-center space-x-1 mb-1 mr-auto">
                      {message.read && (
                        <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.71 7.21a1 1 0 00-1.42 0l-7.45 7.46-3.13-3.14A1 1 0 105.29 12.95l3.84 3.84a1 1 0 001.42 0l8.16-8.16a1 1 0 000-1.42z"/>
                          <path d="M22.24 7.21a1 1 0 00-1.42 0L9.88 18.15a1 1 0 001.42 1.42L22.24 8.63a1 1 0 000-1.42z"/>
                        </svg>
                      )}
                      <p className="text-xs text-gray-500">{message.time}</p>
                    </div>
                    {/* Message bubble */}
                    <div className="bg-blue-500 rounded-lg px-3 py-2 max-w-xs">
                      <p className="text-sm text-white">{message.message}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="border-t border-gray-200 p-3 md:p-4 bg-white relative z-10">
        <div className="flex items-center space-x-2 md:space-x-3">
          <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
          <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Type something..."
              className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}