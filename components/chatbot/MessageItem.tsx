// components/Chatbot/MessageItem.tsx
"use client";

interface MessageItemProps {
  role: string; // Will be 'user' or 'assistant' (from your API route)
  content: string;
}

// Function to convert URLs and markdown to clickable links and formatted text
function renderContent(content: string) {
  // Split by common markdown patterns and URLs
  const urlRegex = /(https?:\/\/[^\s)]+)/g;
  const markdownBoldRegex = /\*\*([^*]+)\*\*/g;
  
  // First, replace markdown bold patterns
  let processed = content.replace(markdownBoldRegex, '<strong>$1</strong>');
  
  // Then, replace URLs with clickable links
  processed = processed.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-500 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300">$1</a>');
  
  return processed;
}

export default function MessageItem({ role, content }: MessageItemProps) {
  const isUser = role === 'user';
  const htmlContent = renderContent(content);

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 animate-in fade-in slide-in-from-bottom-2 duration-300`}>
      <div
        className={`max-w-[85%] p-3 text-sm shadow-sm ${
          isUser
            ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none' // User bubble points right
            : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-2xl rounded-tl-none border border-gray-300 dark:border-gray-700' // Assistant bubble points left
        }`}
      >
        {/* Render formatted content with links */}
        <div 
          className="whitespace-pre-wrap leading-relaxed break-words"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}