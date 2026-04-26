'use client';

interface DetailsPanelProps {
  className?: string;
  onClose?: () => void;
}

export default function DetailsPanel({ className = '', onClose }: DetailsPanelProps) {
  return (
    <div className={`w-full md:w-80 lg:w-96 bg-white border-l border-gray-200 overflow-y-auto ${className}`}>
      <div className="p-4 md:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-gray-900">Details</h3>
          <div className="flex items-center space-x-2">
            {/* Close button for mobile/tablet */}
            <button onClick={onClose} className="xl:hidden p-1 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Chat Data Section */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-base font-semibold text-gray-900">Chat Data</h4>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Assignee</span>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900">James West</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Team</span>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900">Sales Team</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Data Section */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-base font-semibold text-gray-900">Contact Data</h4>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="space-y-5">
            <div className="flex items-start justify-between">
              <span className="text-sm text-gray-500 w-28">First Name</span>
              <span className="text-sm font-medium text-gray-900 flex-1 text-right">Olivia</span>
            </div>
            <div className="flex items-start justify-between">
              <span className="text-sm text-gray-500 w-28">Last Name</span>
              <span className="text-sm font-medium text-gray-900 flex-1 text-right">McKinsey</span>
            </div>
            <div className="flex items-start justify-between">
              <span className="text-sm text-gray-500 w-28">Phone number</span>
              <span className="text-sm font-medium text-gray-900 flex-1 text-right">+1 (312) 555-0134</span>
            </div>
            <div className="flex items-start justify-between">
              <span className="text-sm text-gray-500 w-28">Email</span>
              <span className="text-sm font-medium text-gray-900 flex-1 text-right break-all">olivia_Mckinsey@gmail.com</span>
            </div>
            <button className="text-sm font-medium text-gray-900 hover:text-gray-700">See all</button>
          </div>
        </div>

        {/* Contact Labels */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-base font-semibold text-gray-900">Contact Labels</h4>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-1.5 bg-white border-2 border-blue-500 text-blue-600 text-sm rounded-full flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Closed Won
            </span>
            <span className="px-4 py-1.5 bg-white border-2 border-blue-500 text-blue-600 text-sm rounded-full flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Chicago
            </span>
            <button className="w-8 h-8 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-50">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Notes */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-base font-semibold text-gray-900">Notes</h4>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="space-y-2">
            <div className="bg-yellow-100 rounded-lg p-3">
              <p className="text-sm text-gray-700">Add a note</p>
            </div>
            <div className="bg-yellow-100 rounded-lg p-3">
              <p className="text-sm text-gray-900">Strong potential for future upgrades</p>
            </div>
          </div>
        </div>

        {/* Other Chats */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-base font-semibold text-gray-900">Other Chats</h4>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">F</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900">FitLife</p>
              <p className="text-xs text-gray-500">Oh my way!</p>
            </div>
            <span className="text-xs text-gray-400 flex-shrink-0">08/03/25</span>
          </div>
        </div>
      </div>
    </div>
  );
}