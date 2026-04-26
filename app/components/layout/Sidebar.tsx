'use client';

interface SidebarProps {
  className?: string;
  onClose?: () => void;
}

export default function Sidebar({ className = '', onClose }: SidebarProps) {
  return (
    <div className={`w-64 md:w-56 lg:w-60 bg-white border-r border-gray-200 flex flex-col h-full ${className}`}>
      {/* Close button for mobile */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <h1 className="text-base font-semibold text-gray-900">Menu</h1>
        <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Inbox Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Inbox</h1>
          
          {/* Navigation Items */}
          <div className="space-y-1 mb-4">
            <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded text-sm cursor-pointer">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span className="text-gray-700">My Inbox</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded text-sm cursor-pointer">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V18h2v-4h3v4h2V8.5c0-1.93-1.57-3.5-3.5-3.5S12 6.57 12 8.5V18H4z"/>
                </svg>
                <span className="text-gray-700">All</span>
              </div>
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">36</span>
            </div>
            <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded text-sm cursor-pointer">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-gray-700">Unassigned</span>
              </div>
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">5</span>
            </div>
          </div>

          {/* Teams Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Teams</span>
              <svg className="w-3 h-3 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between py-1.5 px-3 hover:bg-gray-50 rounded text-sm cursor-pointer">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Sales</span>
                </div>
                <span className="text-xs text-gray-500">7</span>
              </div>
              <div className="flex items-center justify-between py-1.5 px-3 hover:bg-gray-50 rounded text-sm cursor-pointer">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 truncate">Customer Support</span>
                </div>
                <span className="text-xs text-gray-500">16</span>
              </div>
            </div>
          </div>

          {/* Users Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Users</span>
              <svg className="w-3 h-3 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {/* Empty gray box */}
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Channels Section */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Channels</span>
            <svg className="w-3 h-3 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex items-center space-x-2 py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer">
            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">F</span>
            </div>
            <span className="text-sm text-gray-700">FitLife</span>
          </div>
        </div>
      </div>
    </div>
  );
}