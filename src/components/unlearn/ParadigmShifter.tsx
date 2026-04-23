'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Lock, Unlock, Eye, EyeOff } from 'lucide-react';

interface Perspective {
  title: string;
  subtitle: string;
  points: string[];
}

const statusQuo: Perspective = {
  title: "The Status Quo",
  subtitle: "Colonial & Societal Programming",
  points: [
    "Productivity defined by labor hours",
    "Individualistic success metrics",
    "Hierarchical power structures",
    "Devaluation of indigenous knowledge"
  ]
};

const unlearned: Perspective = {
  title: "The Unlearned View",
  subtitle: "Indigenous & Critical Thought",
  points: [
    "Productivity defined by energy & rhythm",
    "Communal and generational health",
    "Horizontal, decentralized networks",
    "Revival of ancestral wisdom"
  ]
};

export function ParadigmShifter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(50);
  const springX = useSpring(x, { stiffness: 400, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((clientX - rect.left) / rect.width) * 100;
    const boundedPos = Math.max(0, Math.min(100, position));
    setSliderPos(boundedPos);
    x.set(boundedPos);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      className="relative w-full aspect-video md:aspect-21/9 rounded-2xl overflow-hidden border border-white/5 group cursor-ew-resize bg-obsidian"
    >
      {/* Left Side: Status Quo */}
      <div 
        className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center p-8 md:p-12 text-center"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <div className="max-w-md">
          <Lock className="w-10 h-10 text-neutral-700 mb-6 mx-auto" />
          <h3 className="text-xl md:text-2xl obsidian-heading text-neutral-500 mb-2">{statusQuo.title}</h3>
          <p className="obsidian-mono text-[9px] text-neutral-700 uppercase tracking-widest mb-8">{statusQuo.subtitle}</p>
          <ul className="space-y-3 text-neutral-600 obsidian-mono text-[11px] text-left inline-block">
            {statusQuo.points.map((p, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-1 h-1 bg-neutral-800" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side: Unlearned Perspective */}
      <div 
        className="absolute inset-0 bg-white/[0.02] flex flex-col items-center justify-center p-8 md:p-12 text-center"
        style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
      >
        <div className="max-w-md">
          <div className="relative mb-6 mx-auto w-10 h-10">
            <Unlock className="w-10 h-10 text-white" />
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-white blur-xl rounded-full"
            />
          </div>
          <h3 className="text-xl md:text-2xl obsidian-heading text-white mb-2">{unlearned.title}</h3>
          <p className="obsidian-mono text-[9px] text-white/40 uppercase tracking-widest mb-8">{unlearned.subtitle}</p>
          <ul className="space-y-3 text-silver/80 obsidian-mono text-[11px] text-left inline-block">
            {unlearned.points.map((p, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-1 h-1 bg-white/40" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Slider Handle */}
      <motion.div 
        style={{ left: `${sliderPos}%` }}
        className="absolute top-0 bottom-0 w-px bg-white/20 z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-lg obsidian-surface border border-white/20 shadow-2xl flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-white/40 rounded-full" />
            <div className="w-0.5 h-3 bg-white/40 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Instructions */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] obsidian-mono text-white/20 uppercase tracking-[0.3em] pointer-events-none group-hover:opacity-0 transition-opacity">
        Slide to shift paradigms
      </div>
    </div>
  );
}
