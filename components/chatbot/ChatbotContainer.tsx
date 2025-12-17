// components/Chatbot/ChatbotContainer.tsx (New main wrapper)
"use client";
import { useState } from 'react';
import ChatBubble from './ChatBubble';
import ChatWindow from './ChatWindow'; // Use the ChatWindow code from previous step

export default function ChatbotContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatBubble isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <ChatWindow />}
    </>
  );
}