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
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Hidden on mobile, shown on tablet+ */}
        <Sidebar 
          className={`${showSidebar ? 'block' : 'hidden'} lg:block absolute lg:relative z-30 h-full`}
          onClose={() => setShowSidebar(false)}
        />
        
        {/* User Chat List - Hidden on mobile when chat is open */}
        <UserChatList 
          onChatSelect={handleChatSelect} 
          selectedChatId={selectedChatId}
          className={`${showUserList ? 'block' : 'hidden'} lg:block`}
        />
        
        {/* Chat Messages - Full width on mobile when open */}
        <ChatMessages 
          selectedChatId={selectedChatId}
          onBackClick={handleBackToList}
          onDetailsClick={toggleDetails}
          className={`${!showUserList ? 'block' : 'hidden'} lg:block`}
        />
        
        {/* Details Panel - Hidden on mobile/tablet, shown on desktop */}
        <DetailsPanel 
          className={`${showDetails ? 'block' : 'hidden'} xl:block absolute xl:relative right-0 z-20 h-full`}
          onClose={() => setShowDetails(false)}
        />
      </div>
      
      {/* Overlay for mobile sidebar/details */}
      {(showSidebar || showDetails) && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => {
            setShowSidebar(false);
            setShowDetails(false);
          }}
        />
      )}
    </div>
  );
}