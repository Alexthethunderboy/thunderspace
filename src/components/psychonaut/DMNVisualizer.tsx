"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const DMNVisualizer: React.FC = () => {
  const [activity, setActivity] = useState(0); // 0 = Sober, 100 = Dissolving
  const [isMounted, setIsMounted] = useState(false);
  
  const particleCount = 60;
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      baseX: Math.random() * 100,
      baseY: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
  }, []);

  // fragments for the "shattering" effect
  const fragments = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      width: Math.random() * 100 + 50,
      height: Math.random() * 100 + 50,
      left: Math.random() * 100,
      top: Math.random() * 100,
      rotate: Math.random() * 360,
      moveX: (Math.random() - 0.5) * 400,
      moveY: (Math.random() - 0.5) * 400,
    }));
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const disruption = activity / 100; // 0 is Sober (Rigid), 1 is Dissolving (Fluid)

  if (!isMounted) {
    return (
      <div className="w-full aspect-square md:aspect-video border border-white/5 bg-white/2 rounded-[32px] animate-pulse" />
    );
  }

  return (
    <div className="w-full space-y-6 p-6 md:p-8 border border-white/5 obsidian-surface rounded-2xl backdrop-blur-xl overflow-hidden relative">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg obsidian-heading text-white tracking-tight">Default Mode Network</h3>
          <p className="text-[9px] uppercase tracking-[0.3em] text-silver/40 obsidian-mono mt-1">Ego Dissolution Simulation</p>
        </div>
        <div className="text-right">
          <span className="text-2xl obsidian-mono text-white">{activity}%</span>
          <p className="text-[9px] uppercase tracking-[0.3em] text-silver/40 obsidian-mono mt-1">Dissolution</p>
        </div>
      </div>

      <div className="relative aspect-square md:aspect-video bg-obsidian rounded-xl border border-white/5 flex items-center justify-center overflow-hidden shadow-inner">
        {/* The Grid / Ego Structure */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg width="100%" height="100%" className="overflow-visible">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <motion.rect 
              width="100%" 
              height="100%" 
              fill="url(#grid)"
              animate={{
                skewX: disruption * 10,
                skewY: disruption * 10,
                scale: 1 - (disruption * 0.1),
                opacity: 1 - disruption,
              }}
            />
          </svg>
        </div>

        {/* Shattered Grid Fragments (Conceptual) */}
        {disruption > 0.2 && (
          <div className="absolute inset-0 pointer-events-none">
            {fragments.map((f) => (
              <motion.div
                key={f.id}
                className="absolute border border-white/10 bg-white/5"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: disruption * 0.5,
                  x: f.moveX * disruption,
                  y: f.moveY * disruption,
                  rotate: f.rotate * disruption,
                  scale: 1,
                }}
                style={{
                  width: f.width,
                  height: f.height,
                  left: `${f.left}%`,
                  top: `${f.top}%`,
                }}
              />
            ))}
          </div>
        )}

        {/* Fluid Particle Mesh */}
        <div className="relative w-full h-full">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-white/40 blur-[1px]"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.baseX}%`,
                top: `${p.baseY}%`,
              }}
              animate={{
                x: disruption * (Math.random() - 0.5) * 300,
                y: disruption * (Math.random() - 0.5) * 300,
                scale: 1 + disruption * 4,
                opacity: 0.1 + (disruption * 0.4),
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Central Pulse */}
        <motion.div 
          className="absolute w-32 h-32 rounded-full border border-neon-psychonaut"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="space-y-4">
        <input
          type="range"
          min="0"
          max="100"
          value={activity}
          onChange={(e) => setActivity(Number(e.target.value))}
          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-neon-psychonaut opacity-70"
        />
        <div className="flex justify-between text-[9px] uppercase tracking-[0.2em] text-silver/60 obsidian-mono">
          <span>Sober (Rigid)</span>
          <span>Dissolved (Fluid)</span>
        </div>
      </div>

      <div className="text-sm text-silver/80 leading-relaxed obsidian-mono text-center px-4 min-h-[40px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={activity < 30 ? 'sober' : activity < 70 ? 'blurring' : 'dissolved'}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            {activity < 30 && "The DMN is active (Rigid). Thought patterns are self-referential."}
            {activity >= 30 && activity < 70 && "Entropy increases. The boundaries of the 'self' begin to blur."}
            {activity >= 70 && "Complete dissolution (Fluid). Consciousness as an interconnected particle mesh."}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};
