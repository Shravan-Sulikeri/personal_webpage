import React, { useEffect, useRef, useState } from 'react';
import { Bot, Loader2, MessageCircle, Send, X } from 'lucide-react';
import resumePdf from '../assest/Shravan_Sulikeri_Resume_2025.pdf';

const ChatBot = ({ email }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setMessages([
        {
          sender: 'bot',
          text: "Hi! I'm Shravan's AI assistant. Ask me anything about his experience, skills, projects, or background!",
        },
      ]);
      setHasGreeted(true);
    }
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const getBotReply = async (userInput) => {
    const lower = userInput.toLowerCase();

    // Handle resume request locally (no API call needed)
    if (lower.includes('resume') || lower.includes('cv')) {
      return {
        sender: 'bot',
        text: 'Here is Shravan\'s resume:',
        link: { href: resumePdf, label: 'Download Resume PDF' },
      };
    }

    // Call the AI API for all other questions
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return { sender: 'bot', text: data.response };
    } catch (error) {
      console.error('Chat API error:', error);
      return {
        sender: 'bot',
        text: `I'm having trouble connecting right now. Feel free to email Shravan directly at ${email} for any questions!`,
      };
    }
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage = { sender: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const botMessage = await getBotReply(trimmed);
    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      <div className="relative w-full sm:w-[380px]">
        <div
          className={`absolute bottom-full mb-3 left-0 w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          role="dialog"
          aria-label="AI Chatbot"
          aria-hidden={!isOpen}
        >
          <div className="bg-gradient-to-r from-[#2563eb] to-[#0f172a] text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold text-sm uppercase tracking-[0.2em]">
              <Bot size={18} />
              AI Assistant
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="p-1 rounded-full sm:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <X size={16} />
            </button>
          </div>

          <div
            className="relative bg-gray-50"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.03) 50px, rgba(0,0,0,0.03) 51px)',
            }}
          >
            <div className="absolute inset-0 bg-white/40 pointer-events-none" aria-hidden="true" />
            <div className="relative h-64 sm:h-80 max-h-[60vh] overflow-y-auto px-4 py-4 space-y-3 touch-scroll">
              {messages.map((message, index) => (
                <div
                  key={`${message.sender}-${index}`}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow ${message.sender === 'user'
                        ? 'bg-[#1e3a8a] text-white rounded-br-sm'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm'
                      }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
                    {message.link ? (
                      <a
                        href={message.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block text-xs font-semibold text-[#2563eb] underline underline-offset-4"
                      >
                        {message.link.label}
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-white text-gray-800 border border-gray-200 rounded-bl-sm shadow">
                    <div className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin text-[#2563eb]" />
                      <span className="text-sm text-gray-500">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-gray-200 bg-white px-3 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about experience, skills, projects..."
              disabled={isLoading}
              className="flex-1 border border-gray-200 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Chat input"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563eb] to-[#0f172a] text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide sm:hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
        className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-[#2563eb] to-[#0f172a] text-white shadow-2xl flex items-center justify-center transition-transform duration-300 sm:hover:-translate-y-0.5 sm:hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563eb] focus:ring-offset-white"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
};

export default ChatBot;
