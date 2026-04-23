'use client';

import { motion } from 'framer-motion';
import { Sprout, Leaf, TreePine, Timer } from 'lucide-react';

const notes = [
  {
    id: 1,
    title: "The decentralization of Lagos tech",
    content: "Moving away from Yaba isn't just a physical shift, it's a mental one. We are building borderless.",
    status: "Seedling",
    tags: ["Urbanism", "Tech"],
    updated: "2h ago"
  },
  {
    id: 2,
    title: "AI as an Ancestral Medium",
    content: "If we train models on oral histories, can we converse with the past in a way that feels human?",
    status: "Budding",
    tags: ["AI", "Philosophy"],
    updated: "1d ago"
  },
  {
    id: 3,
    title: "The Ethics of Open Source Activism",
    content: "Transparency is a weapon. But who does it protect when the systems are already rigged?",
    status: "Evergreen",
    tags: ["Open Source", "Activism"],
    updated: "1w ago"
  }
];

const statusStyles = {
  Seedling: "bg-white/5 text-silver/60 border-white/10",
  Budding: "bg-white/10 text-white/80 border-white/20",
  Evergreen: "bg-neon-library/10 text-neon-library border-neon-library/20"
};

const statusIcons = {
  Seedling: Sprout,
  Budding: Leaf,
  Evergreen: TreePine
};

export function DigitalGarden() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-3">
        {notes.map((note, i) => {
          const Icon = statusIcons[note.status as keyof typeof statusIcons];
          return (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group p-8 obsidian-surface obsidian-hover border border-white/5 flex flex-col gap-6"
            >
              <div className="flex justify-between items-start">
                <div className={`flex items-center gap-2 px-2 py-1 border text-[9px] obsidian-mono uppercase tracking-[0.2em] ${statusStyles[note.status as keyof typeof statusStyles]}`}>
                  <Icon className="w-3 h-3" />
                  {note.status}
                </div>
                <div className="flex items-center gap-1.5 text-[9px] obsidian-mono text-silver/40 uppercase tracking-[0.2em]">
                  <Timer className="w-3 h-3" />
                  {note.updated}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl obsidian-heading text-white group-hover:text-metallic transition-colors">{note.title}</h3>
                <p className="text-sm text-silver/60 obsidian-mono leading-relaxed line-clamp-3">{note.content}</p>
              </div>

              <div className="mt-auto pt-6 flex gap-2">
                {note.tags.map(tag => (
                  <span key={tag} className="text-[9px] obsidian-mono text-silver/40 uppercase tracking-[0.2em] bg-white/5 px-2 py-1 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
