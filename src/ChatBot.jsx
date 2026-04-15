import React, { useEffect, useRef, useState } from 'react';
import { Bot, Loader2, MessageCircle, Send, X } from 'lucide-react';
import resumePdf from '../assest/Shravan_Sulikeri_Resume.pdf';

const SUGGESTED_PROMPTS = [
  "Where do you work?",
  "What's your tech stack?",
  "Tell me about F1 Dash",
  "What certifications do you have?",
  "Are you open to opportunities?",
  "How can I contact you?",
];

const ChatBot = ({ email }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showChips, setShowChips] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setMessages([
        {
          sender: 'bot',
          text: "Hi! I'm Shravan's AI assistant. Ask me anything about his experience, skills, projects, or background — or pick a question below to get started.",
        },
      ]);
      setHasGreeted(true);
      setShowChips(true);
    }
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const getBotReply = async (userInput) => {
    const lower = userInput.toLowerCase();

    // Handle resume request locally
    if (lower.includes('resume') || lower.includes('cv')) {
      return {
        sender: 'bot',
        text: "Here is Shravan's resume:",
        link: { href: resumePdf, label: 'Download Resume PDF' },
      };
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) throw new Error('API request failed');

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

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setShowChips(false);
    const userMessage = { sender: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const botMessage = await getBotReply(trimmed);
    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);

    // Refocus input after reply
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleSend = () => sendMessage(input);

  const handleChipClick = (prompt) => sendMessage(prompt);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      <div className="relative w-full sm:w-[380px]">
        <div
          className={`absolute bottom-full mb-3 left-0 w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform transition-all duration-300 ${
            isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          role="dialog"
          aria-label="AI Chatbot"
          aria-hidden={!isOpen}
        >
          {/* Header */}
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

          {/* Messages */}
          <div
            className="relative bg-gray-50"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.03) 50px, rgba(0,0,0,0.03) 51px)',
            }}
          >
            <div className="absolute inset-0 bg-white/40 pointer-events-none" aria-hidden="true" />
            <div className="relative h-64 sm:h-72 max-h-[55vh] overflow-y-auto px-4 py-4 space-y-3 touch-scroll">
              {messages.map((message, index) => (
                <div
                  key={`${message.sender}-${index}`}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow ${
                      message.sender === 'user'
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

          {/* Suggested prompt chips */}
          {showChips && (
            <div className="px-3 py-2 bg-white border-t border-gray-100 flex flex-wrap gap-2">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleChipClick(prompt)}
                  disabled={isLoading}
                  className="text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full border border-[#2563eb]/30 text-[#2563eb] bg-[#2563eb]/5 sm:hover:bg-[#2563eb] sm:hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-gray-200 bg-white px-3 py-3">
            <input
              ref={inputRef}
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

      {/* Toggle button */}
      <button
        type="button"
        onClick={handleOpen}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
        className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-[#2563eb] to-[#0f172a] text-white shadow-2xl flex items-center justify-center transition-transform duration-300 sm:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563eb] focus:ring-offset-white"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
};

export default ChatBot;
