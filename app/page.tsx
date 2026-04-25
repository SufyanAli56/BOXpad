'use client';

import { useState, useMemo } from 'react';
import { Post, User } from './types';
import { postsApi, usersApi } from './lib/api';
import { useApi } from './hooks/useApi';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PostCard from './components/features/PostCard';
import UserCard from './components/features/UserCard';
import LoadingSpinner, { LoadingList } from './components/ui/LoadingSpinner';
import ErrorMessage from './components/ui/ErrorMessage';
import Button from './components/ui/Button';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'posts' | 'users'>('posts');
  const [searchTerm, setSearchTerm] = useState('');

  // API calls using custom hooks
  const { 
    data: posts, 
    loading: postsLoading, 
    error: postsError, 
    refetch: refetchPosts 
  } = useApi(() => postsApi.getAll());

  const { 
    data: users, 
    loading: usersLoading, 
    error: usersError, 
    refetch: refetchUsers 
  } = useApi(() => usersApi.getAll());

  // Create user lookup for posts
  const userLookup = useMemo(() => {
    if (!users) return {};
    return users.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {} as Record<number, User>);
  }, [users]);

  // Filter data based on search
  const filteredPosts = useMemo(() => {
    if (!posts || !searchTerm) return posts || [];
    return posts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [posts, searchTerm]);

  const filteredUsers = useMemo(() => {
    if (!users || !searchTerm) return users || [];
    return users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const handleReadMore = (postId: number) => {
    alert(`Navigate to post ${postId} - This would typically use Next.js routing`);
  };

  const handleViewProfile = (userId: number) => {
    alert(`Navigate to user ${userId} profile - This would typically use Next.js routing`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to BlogApp
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                A modern blog application showcasing clean UI design, API integration, 
                and responsive components built with Next.js and TypeScript.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={`Search ${activeTab}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('posts')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'posts'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Posts ({posts?.length || 0})
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'users'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Users ({users?.length || 0})
              </button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'posts' && (
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Latest Posts
                    {searchTerm && (
                      <span className="text-lg font-normal text-gray-500 ml-2">
                        ({filteredPosts.length} results)
                      </span>
                    )}
                  </h2>
                  {postsError && (
                    <Button onClick={refetchPosts} variant="outline" size="sm">
                      Retry
                    </Button>
                  )}
                </div>

                {postsLoading ? (
                  <LoadingList count={6} />
                ) : postsError ? (
                  <ErrorMessage 
                    message={postsError} 
                    onRetry={refetchPosts}
                  />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                      <PostCard
                        key={post.id}
                        post={post}
                        author={userLookup[post.userId]}
                        onReadMore={handleReadMore}
                      />
                    ))}
                  </div>
                )}

                {!postsLoading && !postsError && filteredPosts.length === 0 && searchTerm && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No posts found matching "{searchTerm}"</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Our Users
                    {searchTerm && (
                      <span className="text-lg font-normal text-gray-500 ml-2">
                        ({filteredUsers.length} results)
                      </span>
                    )}
                  </h2>
                  {usersError && (
                    <Button onClick={refetchUsers} variant="outline" size="sm">
                      Retry
                    </Button>
                  )}
                </div>

                {usersLoading ? (
                  <LoadingList count={4} />
                ) : usersError ? (
                  <ErrorMessage 
                    message={usersError} 
                    onRetry={refetchUsers}
                  />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredUsers.map((user) => (
                      <UserCard
                        key={user.id}
                        user={user}
                        onViewProfile={handleViewProfile}
                      />
                    ))}
                  </div>
                )}

                {!usersLoading && !usersError && filteredUsers.length === 0 && searchTerm && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No users found matching "{searchTerm}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {posts?.length || 0}
                </div>
                <div className="text-gray-600">Total Posts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {users?.length || 0}
                </div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600">API Integration</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
