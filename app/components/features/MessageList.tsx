'use client';

import Message from '../ui/Message';

export default function MessageList() {
  const messages = [
    {
      id: 1,
      content: "Hi, I recently joined FitLife the past 2 weeks and I'm trying to access my workout plan, but I can't login. Can you help?",
      time: '23:03',
      isFromUser: true
    },
    {
      id: 2,
      content: "Hello Olivia 👋 I'm Michael, your AI customer support assistant. Let's fix this quickly. Could you share the email address?",
      time: '23:04',
      isFromUser: false
    },
    {
      id: 3,
      content: "Yes, it's olivia.mckinsey@gmail.com",
      time: '23:05',
      isFromUser: true
    },
    {
      id: 4,
      content: "Thanks! I see your recent event completed. I've sent a new link - check your inbox.",
      time: '23:06',
      isFromUser: false
    },
    {
      id: 5,
      content: "Done! I'm logged in. Thanks!",
      time: '02:10',
      isFromUser: true
    },
    {
      id: 6,
      content: "Perfect! 🎉 Your plan is ready under \"My Programs\". Since you're starting out, I should mention we have a 7-day trial that covers all features and is 20% off here: www.FitLife.com/Premium",
      time: '02:11',
      isFromUser: false
    },
    {
      id: 7,
      content: "Oh my god 😍 I'll try it ASAP, thank you so much!",
      time: '02:12',
      isFromUser: true
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
      {messages.map((message) => (
        <Message
          key={message.id}
          content={message.content}
          time={message.time}
          isFromUser={message.isFromUser}
        />
      ))}
      
      {/* System message */}
      <div className="flex justify-center">
        <div className="bg-gray-200 rounded-full px-3 py-1">
          <p className="text-xs text-gray-600">1 SEP 12, resetting now...</p>
        </div>
      </div>

      {/* Typing indicator */}
      <div className="flex justify-start">
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
          <p className="text-sm text-gray-500 italic">You're welcome!</p>
        </div>
      </div>
    </div>
  );
}