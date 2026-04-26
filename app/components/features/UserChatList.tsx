'use client';

import { useState } from 'react';
import { BsReverseLayoutSidebarReverse } from 'react-icons/bs';

interface UserChatListProps {
  className?: string;
  onChatSelect?: (chatId: number) => void;
  selectedChatId?: number;
}

export default function UserChatList({ className = '', onChatSelect, selectedChatId = 1 }: UserChatListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Conversation data matching the image exactly
  const conversations = [
    {
      id: 1,
      name: 'Olivia McKinsey',
      avatar: 'O',
      avatarColor: 'bg-purple-500',
      message: 'Oh my god! 😊 I try it ASAP, thank...',
      time: '23:03',
      unread: false
    },
    {
      id: 2,
      name: 'Sara Williams',
      avatar: 'E',
      avatarColor: 'bg-yellow-500',
      message: 'Good Evening, Emily! Hope you are...',
      time: '23:30',
      unread: false
    },
    {
      id: 3,
      name: 'Frank Thompson',
      avatar: 'F',
      avatarColor: 'bg-blue-500',
      message: 'Thank you for signing up Frank! It t...',
      time: '22:00',
      unread: false
    },
    {
      id: 4,
      name: 'Grace Lee',
      avatar: 'G',
      avatarColor: 'bg-orange-500',
      message: 'I am sending you the report right a...',
      time: '20:43',
      unread: false
    },
    {
      id: 5,
      name: 'Henry Adams',
      avatar: 'H',
      avatarColor: 'bg-yellow-400',
      message: 'Thank you for filling out our survey!',
      time: '17:37',
      unread: false
    },
    {
      id: 6,
      name: 'Isabella Martinez',
      avatar: 'I',
      avatarColor: 'bg-orange-500',
      message: 'I will update you soon Isabella!',
      time: '16:35',
      unread: false
    },
    {
      id: 7,
      name: 'James Brown',
      avatar: 'J',
      avatarColor: 'bg-purple-400',
      message: 'Hello James! Let\'s collaborate on...',
      time: '15:44',
      unread: false
    },
    {
      id: 8,
      name: 'Katherine White',
      avatar: 'K',
      avatarColor: 'bg-yellow-500',
      message: 'Hi Katherine, looking forward to our...',
      time: '09:02',
      unread: false
    },
    {
      id: 9,
      name: 'Lucas Green',
      avatar: 'L',
      avatarColor: 'bg-blue-400',
      message: 'Hey Lucas! Ready for the holiday...',
      time: 'Yesterday',
      unread: false
    }
  ];

  const handleChatClick = (chatId: number) => {
    if (onChatSelect) {
      onChatSelect(chatId);
    }
  };

  return (
    <div className={`w-80 bg-white flex flex-col border-r border-gray-200 ${className}`}>
      {/* Header with Michael Johnson */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          {/* Book/Tabs icon */}
          <BsReverseLayoutSidebarReverse className="w-6 h-6 text-gray-900" />
          <span className="text-xl font-semibold text-gray-900">Michael Johnson</span>
        </div>
        {/* Edit/Pen icon */}
        <svg className="w-6 h-6 text-gray-900 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </div>

      {/* Search and Filters */}
      <div className="px-4 py-4 border-b border-gray-200">
        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search Chat"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2.5 pl-10 pr-12 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
          />
          <svg className="w-5 h-5 text-gray-500 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {/* Sliders/Filter icon */}
          <svg className="w-5 h-5 text-gray-500 absolute right-3 top-3 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>

        {/* Filter Dropdowns */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-1">
            <span className="text-base font-semibold text-gray-900">Open</span>
            <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex items-center gap-2 flex-1 justify-end">
            <span className="text-base font-semibold text-gray-900">Newest</span>
            <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => handleChatClick(conversation.id)}
            className={`px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-100 ${
              selectedChatId === conversation.id ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className={`w-8 h-8 ${conversation.avatarColor} rounded-full flex items-center justify-center flex-shrink-0`}>
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
    </div>
  );
}