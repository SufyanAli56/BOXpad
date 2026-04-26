'use client';

import { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

interface ChatAreaProps {
  className?: string;
}

export default function ChatArea({ className = '' }: ChatAreaProps) {
  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  return (
    <div className={`flex-1 flex flex-col mt-16 ${className}`}>
      <ChatHeader />
      <MessageList />
      <MessageInput 
        value={messageInput}
        onChange={setMessageInput}
        onSend={handleSendMessage}
      />
    </div>
  );
}