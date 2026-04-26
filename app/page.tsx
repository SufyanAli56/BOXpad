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
  };

  if (loading) {
    return <Loading message="Loading Chat" />;
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        <UserChatList 
          onChatSelect={handleChatSelect} 
          selectedChatId={selectedChatId}
        />
        <ChatMessages selectedChatId={selectedChatId} />
        <DetailsPanel />
      </div>
    </div>
  );
}