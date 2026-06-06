import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChat, HiX } from 'react-icons/hi';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm AI assistant. Ask me about Khoirul's skills or services!", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput('');

    // Simulasi AI response
    setTimeout(() => {
      const responses = {
        skills: "Khoirul masters: React, Python, Data Analysis, Forex Trading, and more!",
        portfolio: "Check out the Portfolio section for amazing projects!",
        contact: "You can reach Khoirul via WhatsApp or GitHub in Contact section.",
        default: "Thanks for your message! Khoirul will get back to you soon."
      };
      
      let reply = responses.default;
      if (input.toLowerCase().includes('skill')) reply = responses.skills;
      if (input.toLowerCase().includes('portfolio')) reply = responses.portfolio;
      if (input.toLowerCase().includes('contact')) reply = responses.contact;
      
      setMessages(prev => [...prev, { text: reply, isBot: true }]);
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-cyan-500 p-4 rounded-full shadow-lg hover:bg-cyan-600 transition"
      >
        <HiChat className="text-2xl" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-24 right-6 w-96 h-125 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <h3 className="font-bold">AI Assistant</h3>
              <button onClick={() => setIsOpen(false)}>
                <HiX />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl ${msg.isBot ? 'bg-cyan-500/20' : 'bg-cyan-500'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/10 rounded-xl px-4 py-2 outline-none focus:ring-1 focus:ring-cyan-400"
              />
              <button onClick={handleSend} className="bg-cyan-500 px-4 py-2 rounded-xl">
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}