import React, { useEffect, useRef, useState } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';
import resumePdf from '../assest/Shravan_Sulikeri_Resume_2025.pdf';

const ChatBot = ({ email }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setMessages([
        {
          sender: 'bot',
          text: "Hi! I'm Shravan's virtual assistant. Ask me about his experience, skills, or projects!",
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

  const getBotReply = (userInput) => {
    const lower = userInput.toLowerCase();
    if (lower.includes('resume') || lower.includes('cv')) {
      return {
        sender: 'bot',
        text: 'Here is his resume:',
        link: { href: resumePdf, label: 'Open Resume PDF' },
      };
    }
    if (lower.includes('contact') || lower.includes('email')) {
      return { sender: 'bot', text: `You can reach Shravan at ${email}.` };
    }
    if (lower.includes('skill') || lower.includes('stack')) {
      return {
        sender: 'bot',
        text:
          'Top skills: Python, Data Engineering (Databricks, Delta Lake), MLflow, Azure, GCP, Docker, Kubernetes, Power BI.',
      };
    }
    if (lower.includes('project') || lower.includes('experience') || lower.includes('work')) {
      return {
        sender: 'bot',
        text:
          'Shravan has delivered cloud-native ETL, MLOps, and analytics solutions across Azure, GCP, Databricks, and Kubernetes.',
      };
    }
    return {
      sender: 'bot',
      text: "I'm still learning! For complex questions, please email Shravan directly.",
    };
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMessage = { sender: 'user', text: trimmed };
    const botMessage = getBotReply(trimmed);
    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
        className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-[#2563eb] to-[#0f172a] text-white shadow-2xl flex items-center justify-center transition-transform duration-300 hover:-translate-y-0.5 hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563eb] focus:ring-offset-white"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <div
        className={`w-[320px] sm:w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        role="dialog"
        aria-label="AI Chatbot"
      >
        <div className="bg-gradient-to-r from-[#2563eb] to-[#0f172a] text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-sm uppercase tracking-[0.2em]">
            <Bot size={18} />
            Ask Me Anything
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className="p-1 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <X size={16} />
          </button>
        </div>

        <div className="relative bg-gray-50" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.03) 50px, rgba(0,0,0,0.03) 51px)' }}>
          <div className="absolute inset-0 bg-white/40 pointer-events-none" aria-hidden="true" />
          <div className="relative h-72 sm:h-80 overflow-y-auto px-4 py-4 space-y-3">
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
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-gray-200 bg-white px-3 py-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about experience, skills, resume..."
            className="flex-1 border border-gray-200 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
            aria-label="Chat input"
          />
          <button
            type="button"
            onClick={handleSend}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563eb] to-[#0f172a] text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 focus:ring-offset-white"
            aria-label="Send message"
          >
            Send
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
