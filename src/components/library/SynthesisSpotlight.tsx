'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, ExternalLink } from 'lucide-react';

export function SynthesisSpotlight() {
  return (
    <div className="relative group">
      <div className="relative overflow-hidden rounded-2xl border border-white/5 obsidian-surface p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-silver/40 obsidian-mono text-[9px] uppercase tracking-[0.2em]">
              <div className="w-1.5 h-1.5 bg-neon-library animate-pulse opacity-80" />
              Active Investigation / 001
            </div>
            
            <h3 className="text-3xl md:text-5xl obsidian-heading text-white tracking-tight leading-[1.1]">
              Rethinking <br/>
              <span className="text-neon-library opacity-80">Social Evolution</span>
            </h3>

            <div className="space-y-4 text-silver/60 text-sm md:text-base leading-relaxed obsidian-mono">
              <p className="text-white">
                "We are all projects of self-liberation..."
              </p>
              <p>
                Digging into *The Dawn of Everything*. It's challenging the rigid 'linear progress' narrative I was taught. If the state isn't inevitable, then our current systems aren't either.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 text-white text-[9px] obsidian-mono uppercase tracking-[0.2em] border border-white/10 hover:border-neon-library hover:text-neon-library transition-all group">
                Open Full Notes
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative aspect-square flex items-center justify-center">
            <motion.div 
              animate={{ 
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10"
            >
              <div className="w-48 h-64 obsidian-surface rounded-xl shadow-2xl overflow-hidden border border-white/10 relative group-hover:border-neon-library transition-colors">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-6 h-0.5 bg-neon-library opacity-60" />
                    <div>
                      <h4 className="text-sm obsidian-heading text-white mb-1 leading-none uppercase">Origins</h4>
                      <p className="text-[9px] obsidian-mono text-silver/60 uppercase tracking-[0.2em]">GRAEBER & WENGROW</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 opacity-20">
                    <div className="h-0.5 w-full bg-white rounded" />
                    <div className="h-0.5 w-full bg-white rounded" />
                    <div className="h-0.5 w-full bg-white rounded" />
                    <div className="h-0.5 w-2/3 bg-white rounded" />
                  </div>
                </div>
              </div>
              
              {/* Subtle ghost elements */}
              <div className="absolute inset-0 translate-x-2 translate-y-2 border border-white/5 rounded-xl -z-10 obsidian-surface" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
