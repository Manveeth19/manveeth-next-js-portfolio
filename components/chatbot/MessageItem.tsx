// components/Chatbot/MessageItem.tsx
"use client";

interface MessageItemProps {
  role: string; // Will be 'user' or 'assistant' (from your API route)
  content: string;
}

export default function MessageItem({ role, content }: MessageItemProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 animate-in fade-in slide-in-from-bottom-2 duration-300`}>
      <div
        className={`max-w-[85%] p-3 text-sm shadow-sm ${
          isUser
            ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none' // User bubble points right
            : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-2xl rounded-tl-none border border-gray-300 dark:border-gray-700' // Assistant bubble points left
        }`}
      >
        {/* We use whitespace-pre-wrap to preserve formatting/line breaks from Gemini */}
        <p className="whitespace-pre-wrap leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}