'use client';

interface ChatMessagesProps {
  className?: string;
}

export default function ChatMessages({ className = '' }: ChatMessagesProps) {
  return (
    <div className={`flex-1 bg-white flex flex-col ${className}`}>
      {/* Chat Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">O</span>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Olivia McKinsey</h3>
            <p className="text-xs text-gray-500">Active now</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Date Header */}
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
        <p className="text-xs text-gray-500 text-center">28 August 2025</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Incoming Message */}
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-medium text-sm">O</span>
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-xs">
              <p className="text-sm text-gray-900">Hi, I recently joined FitLife the past 2 weeks and I'm trying to access my workout plan, but I can't login. Can you help?</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">23:06</p>
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="flex items-start space-x-3 justify-end">
          <div className="flex-1 flex justify-end">
            <div className="bg-blue-500 rounded-lg px-3 py-2 max-w-xs">
              <p className="text-sm text-white">Hello Olivia, 👋 I'm Michael, your AI customer support assistant. Let's fix this quickly. Could you please share the email address?</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <p className="text-xs text-gray-500">23:06</p>
        </div>

        {/* More messages... */}
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-medium text-sm">O</span>
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-xs">
              <p className="text-sm text-gray-900">Yes, it's olivia.mckinsey@gmail.com</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">23:06</p>
          </div>
        </div>

        <div className="flex items-start space-x-3 justify-end">
          <div className="flex-1 flex justify-end">
            <div className="bg-blue-500 rounded-lg px-3 py-2 max-w-xs">
              <p className="text-sm text-white">Thanks! I see the issue. Your reset wasn't completed. I've sent a new link - please check your inbox.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <p className="text-xs text-gray-500">23:07</p>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-medium text-sm">O</span>
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-xs">
              <p className="text-sm text-gray-900">Perfect! 🎉 Your plan is ready under "My Programs". Since you're starting out, I suggest starting with our 3 week results and is 20% off here: www.FitLife.com/Premium</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">23:08</p>
          </div>
        </div>

        <div className="flex items-start space-x-3 justify-end">
          <div className="flex-1 flex justify-end">
            <div className="bg-blue-500 rounded-lg px-3 py-2 max-w-xs">
              <p className="text-sm text-white">Oh my god! 😊 I try it ASAP, thank you so much!</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <p className="text-xs text-gray-500">23:08</p>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-medium text-sm">O</span>
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-xs">
              <p className="text-sm text-gray-900">I see it, resetting now...</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">23:17</p>
          </div>
        </div>

        <div className="flex items-start space-x-3 justify-end">
          <div className="flex-1 flex justify-end">
            <div className="bg-blue-500 rounded-lg px-3 py-2 max-w-xs">
              <p className="text-sm text-white">Done! I'm logged in. Thanks!</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <p className="text-xs text-gray-500">23:20</p>
        </div>
      </div>

      {/* Message Input */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Type something..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}