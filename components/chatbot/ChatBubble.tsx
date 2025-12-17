// components/Chatbot/ChatBubble.tsx
"use client";

import { MessageCircle, X } from 'lucide-react'; // Install lucide-react or use HeroIcons

interface ChatBubbleProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function ChatBubble({ isOpen, onClick }: ChatBubbleProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 w-14 h-14 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95 z-[60]"
      aria-label="Toggle Chat"
    >
      {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
    </button>
  );
}