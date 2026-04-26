'use client';

interface HeaderProps {
  className?: string;
  onMenuClick?: () => void;
}

export default function Header({ className = '', onMenuClick }: HeaderProps) {
  return (
    <div className={`h-14 md:h-16 bg-white border-b border-gray-200 flex items-center justify-between px-3 md:px-8 py-4 ${className}`}>
      {/* Left side - Logo and Navigation */}
      <div className="flex items-center space-x-2 md:space-x-8">
        {/* Mobile Menu Button */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 md:w-7 md:h-7 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs md:text-sm">B</span>
          </div>
          <span className="font-semibold text-gray-900 text-base md:text-lg">BOXpad</span>
        </div>
        
        {/* Navigation - Hidden on mobile */}
        <nav className="hidden xl:flex items-center space-x-6">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <span>Inbox</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Contacts</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>AI Employees</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>Workflows</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
            <span>Campaigns</span>
          </a>
        </nav>
      </div>
      
      {/* Right side - Settings and User */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-xs md:text-sm">MJ</span>
          </div>
          <span className="hidden md:block text-sm font-medium text-gray-900">Michael Johnson</span>
        </div>
      </div>
    </div>
  );
}