'use client';

import { useState, useMemo, useEffect } from 'react';
import { User, Comment } from './types';
import { chatApi } from './lib/api';

// Mock chat data structure
interface ChatMessage {
  id: number;
  senderId: number;
  content: string;
  timestamp: string;
  type: 'text' | 'system';
}

interface ChatConversation {
  id: number;
  participantId: number;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  status: 'online' | 'offline' | 'away';
}

export default function Home() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [showDetails, setShowDetails] = useState(true);
  
  // Data states
  const [users, setUsers] = useState<User[] | null>(null);
  const [comments, setComments] = useState<Comment[] | null>(null);

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const [usersData, commentsData] = await Promise.all([
          chatApi.getAllUsers(),
          chatApi.getAllMessages()
        ]);
        setUsers(usersData);
        setComments(commentsData);
        
        // Set first user as selected conversation
        if (usersData && usersData.length > 0) {
          setSelectedConversation(usersData[0].id);
        }
      } catch (error) {
        console.error('Failed to load data:', error);
      }
    };

    loadData();
  }, []);

  // Create mock conversations from users
  const conversations: ChatConversation[] = useMemo(() => {
    if (!users) return [];
    return users.slice(0, 8).map((user, index) => ({
      id: user.id,
      participantId: user.id,
      lastMessage: `Hi, I recently joined FitLife and I'm trying to access my workout plan, but I can't login. Can you help?`,
      timestamp: `${23 - index}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
      unread: index < 3,
      status: index % 3 === 0 ? 'online' : index % 3 === 1 ? 'away' : 'offline'
    }));
  }, [users]);

  // Create mock messages from comments
  const messages: ChatMessage[] = useMemo(() => {
    if (!comments || !selectedConversation) return [];
    return comments.slice(0, 10).map((comment, index) => ({
      id: comment.id,
      senderId: index % 2 === 0 ? selectedConversation : 0, // 0 = current user
      content: comment.body,
      timestamp: `${23 - index}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
      type: 'text' as const
    }));
  }, [comments, selectedConversation]);

  const selectedUser = users?.find(u => u.id === selectedConversation);

  const filteredConversations = conversations.filter(conv => {
    if (!searchTerm) return true;
    const user = users?.find(u => u.id === conv.participantId);
    return user?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           user?.email.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // In a real app, this would send the message via API
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      default: return 'bg-gray-400';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Top Header */}
      <div className="absolute top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 flex items-center px-4 z-10">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="font-semibold text-gray-900">BoxPad</span>
          </div>
          <nav className="hidden md:flex space-x-6 ml-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Inbox</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Contacts</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">AI Employees</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Workflows</a>
            <a href="/api-demo" className="text-blue-600 hover:text-blue-700 font-medium">API Demo</a>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">MJ</span>
            </div>
            <span className="text-sm font-medium text-gray-900">Michael Johnson</span>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col mt-14">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900 mb-3">Inbox</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Chat"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 pl-8 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex items-center justify-between mt-3">
            <select className="text-sm border border-gray-300 rounded px-2 py-1">
              <option>Open</option>
              <option>Closed</option>
              <option>All</option>
            </select>
            <select className="text-sm border border-gray-300 rounded px-2 py-1">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="px-4 py-2 border-b border-gray-200">
          <div className="space-y-1">
            <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded cursor-pointer">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <span className="text-sm text-gray-700">My Inbox</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded cursor-pointer">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm text-gray-700">All</span>
              </div>
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">36</span>
            </div>
            <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded cursor-pointer">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Unassigned</span>
              </div>
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">5</span>
            </div>
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => {
            const user = users?.find(u => u.id === conversation.participantId);
            if (!user) return null;

            return (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                  selectedConversation === conversation.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">{getInitials(user.name)}</span>
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(conversation.status)} rounded-full border-2 border-white`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{user.name}</h4>
                      <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2">{conversation.lastMessage}</p>
                    {conversation.unread && (
                      <div className="mt-2">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col mt-14">
        {selectedUser ? (
          <>
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">{getInitials(selectedUser.name)}</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{selectedUser.name}</h3>
                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => {
                const isCurrentUser = message.senderId === 0;
                const sender = isCurrentUser ? null : users?.find(u => u.id === message.senderId);
                
                return (
                  <div key={message.id} className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      isCurrentUser 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white text-gray-900 border border-gray-200'
                    }`}>
                      {!isCurrentUser && sender && (
                        <p className="text-xs font-medium text-gray-500 mb-1">{sender.name}</p>
                      )}
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${isCurrentUser ? 'text-blue-100' : 'text-gray-500'}`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 p-4">
              <div className="flex items-center space-x-3">
                <button className="p-2 hover:bg-gray-100 rounded">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button 
                  onClick={handleSendMessage}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
              <p className="text-gray-500">Choose a conversation from the sidebar to start chatting</p>
            </div>
          </div>
        )}
      </div>

      {/* Details Panel */}
      {showDetails && selectedUser && (
        <div className="w-80 bg-white border-l border-gray-200 mt-14 overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Details</h3>
              <button 
                onClick={() => setShowDetails(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Data Section */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Chat Data</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Assignee</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">JW</span>
                    </div>
                    <span className="text-sm text-gray-900">James West</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Team</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">ST</span>
                    </div>
                    <span className="text-sm text-gray-900">Sales Team</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Data Section */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Contact Data</h4>
              <div className="space-y-3">
                <div>
                  <span className="text-xs text-gray-500">First Name</span>
                  <p className="text-sm text-gray-900">{selectedUser.name.split(' ')[0]}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Last Name</span>
                  <p className="text-sm text-gray-900">{selectedUser.name.split(' ').slice(1).join(' ')}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Phone Number</span>
                  <p className="text-sm text-gray-900">{selectedUser.phone}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Email</span>
                  <p className="text-sm text-gray-900">{selectedUser.email}</p>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700">See all</button>
              </div>
            </div>

            {/* Contact Labels */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Contact Labels</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Customer</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Chicago</span>
                <button className="w-6 h-6 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:border-gray-400">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Notes */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Notes</h4>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800 font-medium mb-1">Add a note</p>
                <p className="text-sm text-yellow-700">Strong potential for future upgrades</p>
              </div>
            </div>

            {/* Other Chats */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Other Chats</h4>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">FL</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">FitLife</p>
                  <p className="text-xs text-gray-500">30 min ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}