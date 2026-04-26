'use client';

import { useState, useEffect } from 'react';
import { User, Comment } from './types';
import { chatApi } from './lib/api';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import UserChatList from './components/features/UserChatList';
import ChatMessages from './components/features/ChatMessages';
import DetailsPanel from './components/layout/DetailsPanel';
import Loading from './components/ui/Loading';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[] | null>(null);
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showUserList, setShowUserList] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

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
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleChatSelect = (chatId: number) => {
    setSelectedChatId(chatId);
    // On mobile, hide user list and show chat when a chat is selected
    if (window.innerWidth < 1024) {
      setShowUserList(false);
    }
  };

  const handleBackToList = () => {
    setShowUserList(true);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  if (loading) {
    return <Loading message="Loading Chat" />;
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header onMenuClick={() => setShowSidebar(!showSidebar)} />
      <div className="flex-1 flex overflow-hidden relative">
        {/* Sidebar - Hidden on mobile, shown on tablet+ */}
        <Sidebar 
          className={`${showSidebar ? 'block' : 'hidden'} lg:block absolute lg:relative z-30 h-full`}
          onClose={() => setShowSidebar(false)}
        />
        
        {/* User Chat List - Hidden on mobile when chat is open */}
        <UserChatList 
          onChatSelect={handleChatSelect} 
          selectedChatId={selectedChatId}
          className={`${showUserList ? 'block' : 'hidden'} lg:block flex-shrink-0`}
        />
        
        {/* Chat + Details Container - Vertical scroll on mobile, horizontal on desktop */}
        <div className={`${!showUserList ? 'flex' : 'hidden'} lg:flex flex-1 overflow-hidden`}>
          {/* Scrollable container for mobile */}
          <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden">
            {/* Chat Messages */}
            <ChatMessages 
              selectedChatId={selectedChatId}
              onBackClick={handleBackToList}
              onDetailsClick={toggleDetails}
              className="flex-shrink-0 lg:flex-1"
            />
            
            {/* Details Panel - Below chat on mobile (scroll to see), side by side on desktop */}
            <DetailsPanel 
              className="flex-shrink-0"
              onClose={() => setShowDetails(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}