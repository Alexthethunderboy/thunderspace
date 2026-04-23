'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ChevronRight, Hash } from 'lucide-react';

const COMMANDS = {
  help: "Available commands: help, ls, about, clear, contact, whoami",
  ls: "projects/  experiments/  archive/  manifesto.txt",
  about: "Digiarchive Lab v1.0.4. A playground for experimental UI and radical tech.",
  whoami: "Architect. Builder. Unlearner.",
  contact: "Reach out via the Uplink portal on the home page.",
};

export function MockTerminal() {
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([
    { cmd: 'system.init()', output: 'Digiarchive Lab Environment initialized...' },
    { cmd: 'help', output: COMMANDS.help }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    let output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }
    
    if (cmd in COMMANDS) {
      output = COMMANDS[cmd as keyof typeof COMMANDS];
    }

    setHistory(prev => [...prev, { cmd: input, output }]);
    setInput('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-white/10 obsidian-surface shadow-2xl obsidian-mono text-sm relative group">
      <div className="absolute inset-0 bg-neon-lab opacity-0 group-hover:opacity-[0.02] transition-opacity pointer-events-none" />
      {/* Terminal Header */}
      <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <Terminal className="w-3 h-3 text-white/60 group-hover:text-neon-lab transition-colors" />
          <span className="text-[9px] text-white/40 uppercase tracking-[0.3em]">the_lab_terminal</span>
        </div>
        <div className="flex gap-1.5 opacity-50">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-neon-lab opacity-50" />
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="p-4 h-64 overflow-y-auto scrollbar-hide space-y-3 selection:bg-neon-lab selection:bg-opacity-20 relative z-10"
      >
        {history.map((entry, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center gap-2 text-silver/40">
              <ChevronRight className="w-3 h-3" />
              <span className="text-xs">{entry.cmd}</span>
            </div>
            <div className="text-silver/80 pl-5 leading-relaxed text-xs">
              {entry.output}
            </div>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
          <Hash className="w-3 h-3 text-neon-lab opacity-70" />
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white text-xs placeholder:text-silver/20 focus:ring-0"
            placeholder="Type a command..."
            autoFocus
          />
        </form>
      </div>

      <div className="bg-white/5 px-4 py-2 border-t border-white/10 flex items-center justify-between text-[9px] text-white/40 uppercase tracking-[0.2em]">
        <span>STATUS: ACTIVE</span>
        <span>AUTH: ROOT@DIGIARCHIVE</span>
      </div>
    </div>
  );
}
