'use client';

interface DetailsPanelProps {
  className?: string;
}

export default function DetailsPanel({ className = '' }: DetailsPanelProps) {
  return (
    <div className={`w-80 bg-white border-l border-gray-200 mt-16 overflow-y-auto ${className}`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Details</h3>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Data Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-gray-900">Chat Data</h4>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Assignee</span>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">JW</span>
                </div>
                <span className="text-sm text-gray-900">James West</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Team</span>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">ST</span>
                </div>
                <span className="text-sm text-gray-900">Sales Team</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Data Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-gray-900">Contact Data</h4>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="space-y-3">
            <div>
              <span className="text-xs text-gray-500">First Name</span>
              <p className="text-sm text-gray-900">Olivia</p>
            </div>
            <div>
              <span className="text-xs text-gray-500">Last Name</span>
              <p className="text-sm text-gray-900">McKinsey</p>
            </div>
            <div>
              <span className="text-xs text-gray-500">Phone Number</span>
              <p className="text-sm text-gray-900">+1 (312) 555-0134</p>
            </div>
            <div>
              <span className="text-xs text-gray-500">Email</span>
              <p className="text-sm text-gray-900">olivia.mckinsey@gmail.com</p>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-700">See all</button>
          </div>
        </div>

        {/* Contact Labels */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-gray-900">Contact Labels</h4>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Closed Won</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Chicago</span>
            <button className="w-6 h-6 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:border-gray-400">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Notes */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-gray-900">Notes</h4>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-800 font-medium mb-1">Add a note</p>
            <p className="text-sm text-yellow-700">Strong potential for future upgrades</p>
          </div>
        </div>

        {/* Other Chats */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-gray-900">Other Chats</h4>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-medium">FL</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">FitLife</p>
              <p className="text-xs text-gray-500">30 min ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}