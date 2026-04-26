'use client';

import { useState, useEffect } from 'react';
import { User, Comment } from './types';
import { chatApi } from './lib/api';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import ChatArea from './components/features/ChatArea';
import DetailsPanel from './components/layout/DetailsPanel';
import Loading from './components/ui/Loading';

export default function Home() {
  const [loading, setLoading] = useState(true);
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
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <Loading message="Loading Chat" />;
  }

  return (
    <div className="h-screen flex bg-gray-50">
      <Header />
      <Sidebar />
      <ChatArea />
      <DetailsPanel />
    </div>
  );
}