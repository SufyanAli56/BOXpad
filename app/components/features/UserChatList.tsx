'use client';

import { useState } from 'react';

interface UserChatListProps {
  className?: string;
}

export default function UserChatList({ className = '' }: UserChatListProps) {
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
      selected: true
    },
    {
      id: 2,
      name: 'Sara Williams',
      avatar: 'E',
      avatarColor: 'bg-yellow-500',
      message: 'Good Evening, Emily! Hope you are...',
      time: '23:30'
    },
    {
      id: 3,
      name: 'Frank Thompson',
      avatar: 'F',
      avatarColor: 'bg-blue-500',
      message: 'Thank you for signing up Frank! It t...',
      time: '22:00'
    },
    {
      id: 4,
      name: 'Grace Lee',
      avatar: 'G',
      avatarColor: 'bg-orange-500',
      message: 'I am sending you the report right a...',
      time: '20:43'
    },
    {
      id: 5,
      name: 'Henry Adams',
      avatar: 'H',
      avatarColor: 'bg-yellow-400',
      message: 'Thank you for filling out our survey!',
      time: '17:37'
    },
    {
      id: 6,
      name: 'Isabella Martinez',
      avatar: 'I',
      avatarColor: 'bg-orange-500',
      message: 'I will update you soon Isabella!',
      time: '16:35'
    },
    {
      id: 7,
      name: 'James Brown',
      avatar: 'J',
      avatarColor: 'bg-purple-400',
      message: 'Hello James! Let\'s collaborate on...',
      time: '15:44'
    },
    {
      id: 8,
      name: 'Katherine White',
      avatar: 'K',
      avatarColor: 'bg-yellow-500',
      message: 'Hi Katherine, looking forward to our...',
      time: '09:02'
    },
    {
      id: 9,
      name: 'Lucas Green',
      avatar: 'L',
      avatarColor: 'bg-blue-400',
      message: 'Hey Lucas! Ready for the holiday...',
      time: 'Yesterday'
    }
  ];

  return (
    <div className={`w-80 bg-white flex flex-col border-r border-gray-200 ${className}`}>
      {/* Header with Michael Johnson */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 bg-gray-400 rounded flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-900">Michael Johnson</span>
        </div>
        <svg className="w-4 h-4 text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </div>

      {/* Search and Filters */}
      <div className="px-4 py-3 border-b border-gray-200">
        {/* Search Bar */}
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Search Chat"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 pl-8 pr-10 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
          />
          <svg className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <svg className="w-4 h-4 text-gray-400 absolute right-2.5 top-2.5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        </div>

        {/* Filter Dropdowns */}
        <div className="flex items-center space-x-3">
          <select className="text-sm border border-gray-300 rounded px-2 py-1.5 bg-white text-gray-700 flex-1">
            <option>Open</option>
            <option>Closed</option>
            <option>All</option>
          </select>
          <select className="text-sm border border-gray-300 rounded px-2 py-1.5 bg-white text-gray-700 flex-1">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-100 ${
              conversation.selected ? 'bg-blue-50' : ''
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