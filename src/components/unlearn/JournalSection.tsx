'use client';

import { motion } from "framer-motion";
import { MessageSquare, Heart, Share2, Sparkles } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The Architecture of Anxiety",
    content: "Today I unlearned that productivity is tied to time. It's tied to energy and focus. The 8-hour workday is a relic of industrialization, not a metric for digital creation.",
    date: "2026.01.02",
    likes: "42",
    comments: "5"
  },
  {
    id: 2,
    title: "History Reframed",
    content: "Cannabis prohibition in West Africa wasn't about health; it was about replacing local autonomy with colonial structure. To use it is to reclaim a part of our botanical heritage.",
    date: "2025.12.28",
    likes: "128",
    comments: "12"
  },
  {
    id: 3,
    title: "Code as Consciousness",
    content: "If we view code as a series of decisions, then programming is a form of active meditation. Every bug is a misunderstanding of reality.",
    date: "2025.12.20",
    likes: "67",
    comments: "3"
  }
];

export function JournalSection() {
  return (
    <div className="space-y-12 py-12">
      <div className="flex items-center gap-4 mb-8">
        <Sparkles className="w-5 h-5 text-neon-unlearn opacity-80" />
        <h2 className="text-xl obsidian-heading text-white">Unlearning Moments</h2>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 obsidian-surface obsidian-hover border border-white/5 transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-[9px] obsidian-mono text-silver/40 uppercase tracking-widest">{post.date}</span>
              <div className="flex gap-6">
                <button className="flex items-center gap-1.5 text-[10px] obsidian-mono text-silver/60 hover:text-white transition-colors">
                  <Heart className="w-3.5 h-3.5" />
                  {post.likes}
                </button>
                <button className="flex items-center gap-1.5 text-[10px] obsidian-mono text-silver/60 hover:text-white transition-colors">
                  <MessageSquare className="w-3.5 h-3.5" />
                  {post.comments}
                </button>
              </div>
            </div>
            
            <h3 className="text-lg obsidian-heading text-white mb-4 group-hover:text-neon-unlearn transition-colors">
              {post.title}
            </h3>
            
            <p className="text-silver/60 obsidian-mono leading-relaxed text-sm">
              {post.content}
            </p>

            <div className="mt-8 flex justify-end">
              <button className="text-silver/20 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
