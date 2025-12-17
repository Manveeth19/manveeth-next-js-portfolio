"use client";
import { useState, useRef, useEffect } from 'react';
import { Trash2, Send } from 'lucide-react'; 
import MessageItem from './MessageItem';
import TypingIndicator from './TypingIndicator';

const QUICK_ACTIONS = [
  { label: "🚀 Projects", text: "Tell me about your projects." },
  { label: "🛠️ Skills", text: "What technologies do you use?" },
  { label: "📧 Contact", text: "How can I get in touch?" }
];

export default function ChatWindow() {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: 'assistant', content: "Hi! I'm Manveeth's AI. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Clear Chat Function
  const clearChat = () => {
    setMessages([{ role: 'assistant', content: "Conversation reset. What's on your mind?" }]);
  };

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading]);

  const sendMessage = async (text: string = input) => {
    const finalMsg = text.trim();
    if (!finalMsg || isLoading) return;

    const userMsg = { role: 'user', content: finalMsg };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      // Handle all response statuses
      if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
      }

      const data = await res.json();
      
      // Validate response structure
      if (!data.content) {
        console.warn("Invalid response structure:", data);
        throw new Error("Invalid response from server");
      }

      // Extract content - handle all response formats
      const content = typeof data.content === 'string' ? data.content : String(data.content);
      
      // Add graceful flag indicator if applicable
      let displayContent = content;
      if (data.isGraceful && data.message) {
        displayContent = `${content}\n\n[${data.message}]`;
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: displayContent }]);
    } catch (e: any) {
      console.error("Chat error:", e);
      const errorMsg = "Sorry, I couldn't process your request. Please try again.";
      setMessages(prev => [...prev, { role: 'assistant', content: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-5 w-[350px] h-[500px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-in zoom-in-95 duration-200">
      {/* Header */}
      <div className="p-4 bg-blue-600 text-white font-bold flex justify-between items-center shadow-md">
        <span>AI Assistant</span>
        <button onClick={clearChat} className="p-1 hover:bg-blue-700 rounded transition-colors" title="Clear Chat">
          <Trash2 size={18} />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950">
        {messages.map((m, i) => <MessageItem key={i} role={m.role} content={m.content} />)}
        
        {/* Quick Action Buttons */}
        {messages.length === 1 && !isLoading && (
          <div className="flex flex-wrap gap-2 pt-2">
            {QUICK_ACTIONS.map((action, idx) => (
              <button 
                key={idx}
                onClick={() => sendMessage(action.text)}
                className="text-xs bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 transition-all shadow-sm"
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
        
        {isLoading && <TypingIndicator />}
      </div>

      {/* Input */}
      <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex gap-2">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-gray-100 dark:bg-gray-800 border-none rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600 dark:text-white"
          placeholder="Ask me anything..."
        />
        <button type="submit" disabled={isLoading} className="bg-blue-600 text-white p-2 rounded-xl transition-all disabled:opacity-50">
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}