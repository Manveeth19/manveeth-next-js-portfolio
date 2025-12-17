// components/Chatbot/TypingIndicator.tsx
export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-3">
      <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-2xl rounded-tl-none flex space-x-1">
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
      </div>
    </div>
  );
}