'use client';

import { useState } from 'react';
import ConversationList from '../features/ConversationList';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = '' }: SidebarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={`w-80 bg-white border-r border-gray-200 flex flex-col mt-16 ${className}`}>
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-900 mb-3 text-base">Inbox</h2>
        <div className="relative mb-3">
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
        <div className="flex items-center justify-between">
          <select className="text-sm border border-gray-300 rounded px-2 py-1 bg-white">
            <option>Open</option>
            <option>Closed</option>
            <option>All</option>
          </select>
          <select className="text-sm border border-gray-300 rounded px-2 py-1 bg-white">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="px-4 py-3 border-b border-gray-200">
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

      {/* Teams Section */}
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Teams</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between py-1 px-2 hover:bg-gray-50 rounded cursor-pointer">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Sales</span>
            </div>
            <span className="text-xs text-gray-500">7</span>
          </div>
          <div className="flex items-center justify-between py-1 px-2 hover:bg-gray-50 rounded cursor-pointer">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Customer Support</span>
            </div>
            <span className="text-xs text-gray-500">16</span>
          </div>
        </div>
      </div>

      {/* Users Section */}
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Users</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Conversations List */}
      <ConversationList searchTerm={searchTerm} />

      {/* Channels Section */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Channels</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex items-center space-x-2 py-1">
          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">F</span>
          </div>
          <span className="text-sm text-gray-700">FitLife</span>
        </div>
      </div>
    </div>
  );
}