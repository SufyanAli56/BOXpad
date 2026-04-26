'use client';

import { useState } from 'react';
import ConversationList from '../features/ConversationList';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = '' }: SidebarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={`w-80 bg-white border-r border-gray-200 flex flex-col ${className}`}>
      {/* Top Header with User Info */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <span className="text-lg font-medium text-gray-900">Michael Johnson</span>
        </div>
        <svg className="w-5 h-5 text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </div>

      {/* Inbox Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Inbox</h2>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search Chat"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 pl-9 pr-10 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
          />
          <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <svg className="w-4 h-4 text-gray-400 absolute right-3 top-2.5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        </div>

        {/* Filter Dropdowns */}
        <div className="flex items-center justify-between mb-4">
          <select className="text-sm border border-gray-300 rounded px-3 py-1.5 bg-white text-gray-700 min-w-0 flex-1 mr-2">
            <option>Open</option>
            <option>Closed</option>
            <option>All</option>
          </select>
          <select className="text-sm border border-gray-300 rounded px-3 py-1.5 bg-white text-gray-700 min-w-0 flex-1 ml-2">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="px-4 pb-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded cursor-pointer">
            <div className="flex items-center space-x-3">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <span className="text-sm text-gray-700 font-medium">My Inbox</span>
            </div>
          </div>
          <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded cursor-pointer">
            <div className="flex items-center space-x-3">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V18h2v-4h3v4h2V8.5c0-1.93-1.57-3.5-3.5-3.5S12 6.57 12 8.5V18H4z"/>
              </svg>
              <span className="text-sm text-gray-700 font-medium">All</span>
            </div>
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-medium">36</span>
          </div>
          <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded cursor-pointer">
            <div className="flex items-center space-x-3">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-sm text-gray-700 font-medium">Unassigned</span>
            </div>
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-medium">5</span>
          </div>
        </div>
      </div>

      {/* Teams Section */}
      <div className="px-4 pb-3">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-700">Teams</span>
          <svg className="w-4 h-4 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between py-1 px-3 hover:bg-gray-50 rounded cursor-pointer">
            <div className="flex items-center space-x-3">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <span className="text-sm text-gray-700">Sales</span>
            </div>
            <span className="text-xs text-gray-500 font-medium">7</span>
          </div>
          <div className="flex items-center justify-between py-1 px-3 hover:bg-gray-50 rounded cursor-pointer">
            <div className="flex items-center space-x-3">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <span className="text-sm text-gray-700">Customer Support</span>
            </div>
            <span className="text-xs text-gray-500 font-medium">16</span>
          </div>
        </div>
      </div>

      {/* Users Section */}
      <div className="px-4 pb-3">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-700">Users</span>
          <svg className="w-4 h-4 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Conversations List */}
      <ConversationList searchTerm={searchTerm} />

      {/* Channels Section */}
      <div className="border-t border-gray-200 p-4 mt-auto">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-700">Channels</span>
          <svg className="w-4 h-4 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex items-center space-x-3 py-1">
          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">F</span>
          </div>
          <span className="text-sm text-gray-700">FitLife</span>
        </div>
      </div>
    </div>
  );
}