'use client';

import { useState, useMemo } from 'react';
import { User } from '../types';
import { usersApi } from '../lib/api';
import { useApi } from '../hooks/useApi';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import UserCard from '../components/features/UserCard';
import SearchBar from '../components/features/SearchBar';
import StatsCard from '../components/features/StatsCard';
import LoadingSpinner, { LoadingList } from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import Button from '../components/ui/Button';

export default function Users() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'email' | 'city'>('name');

  // API call using custom hook
  const { 
    data: users, 
    loading, 
    error, 
    refetch 
  } = useApi(() => usersApi.getAll());

  // Filter and sort users
  const filteredAndSortedUsers = useMemo(() => {
    if (!users) return [];
    
    let filtered = users;
    
    // Apply search filter
    if (searchQuery) {
      filtered = users.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.address.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.company.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply sorting
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'email':
          return a.email.localeCompare(b.email);
        case 'city':
          return a.address.city.localeCompare(b.address.city);
        default:
          return 0;
      }
    });
  }, [users, searchQuery, sortBy]);

  // Calculate stats
  const stats = useMemo(() => {
    if (!users) return { totalUsers: 0, cities: 0, companies: 0 };
    
    const uniqueCities = new Set(users.map(user => user.address.city));
    const uniqueCompanies = new Set(users.map(user => user.company.name));
    
    return {
      totalUsers: users.length,
      cities: uniqueCities.size,
      companies: uniqueCompanies.size,
    };
  }, [users]);

  const handleViewProfile = (userId: number) => {
    alert(`Navigate to user ${userId} profile - This would typically use Next.js routing`);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Our Community
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Meet the amazing people who make up our community. 
                Browse profiles, connect with users, and discover shared interests.
              </p>
            </div>
            
            {/* Search and Filter Controls */}
            <div className="max-w-2xl mx-auto space-y-4">
              <SearchBar
                placeholder="Search users by name, email, city, or company..."
                onSearch={handleSearch}
              />
              
              <div className="flex items-center justify-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'email' | 'city')}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="name">Name</option>
                  <option value="email">Email</option>
                  <option value="city">City</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {!loading && !error && (
          <section className="py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard
                  title="Total Users"
                  value={stats.totalUsers}
                  color="blue"
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  }
                />
                <StatsCard
                  title="Cities"
                  value={stats.cities}
                  color="green"
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                />
                <StatsCard
                  title="Companies"
                  value={stats.companies}
                  color="purple"
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  }
                />
              </div>
            </div>
          </section>
        )}

        {/* Users Grid Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {searchQuery ? (
                  <>
                    Search Results
                    <span className="text-lg font-normal text-gray-500 ml-2">
                      ({filteredAndSortedUsers.length} users found)
                    </span>
                  </>
                ) : (
                  'All Users'
                )}
              </h2>
              {error && (
                <Button onClick={refetch} variant="outline" size="sm">
                  Retry
                </Button>
              )}
            </div>

            {loading ? (
              <LoadingList count={8} />
            ) : error ? (
              <ErrorMessage 
                message={error} 
                onRetry={refetch}
              />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredAndSortedUsers.map((user) => (
                    <UserCard
                      key={user.id}
                      user={user}
                      onViewProfile={handleViewProfile}
                    />
                  ))}
                </div>

                {filteredAndSortedUsers.length === 0 && searchQuery && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
                    <p className="text-gray-500">
                      No users match your search for "{searchQuery}". Try adjusting your search terms.
                    </p>
                    <Button 
                      onClick={() => setSearchQuery('')} 
                      variant="outline" 
                      size="sm"
                      className="mt-4"
                    >
                      Clear Search
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}