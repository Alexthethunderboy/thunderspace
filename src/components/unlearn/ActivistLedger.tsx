'use client';

import { motion } from 'framer-motion';
import { Target, Users, ExternalLink, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';
import { unlearnApi, UnlearnArchiveActivism } from '@/lib/unlearn-api';

export function ActivistLedger() {
  const [items, setItems] = useState<UnlearnArchiveActivism[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await unlearnApi.getActivismLedger();
      setItems(data);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl obsidian-heading text-white flex items-center gap-3">
          Action Ledger
          <Activity className="w-4 h-4 text-white/40" />
        </h2>
        <div className="flex items-center gap-2 obsidian-mono text-[9px] text-silver/40 uppercase tracking-[0.2em] bg-white/5 px-2 py-1 border border-white/5">
          <span className="w-1.5 h-1.5 bg-white/60" />
          Live Sync
        </div>
      </div>

      <div className="grid gap-4">
        {loading ? (
          <div className="h-40 flex items-center justify-center border border-white/5 obsidian-surface">
            <span className="text-[10px] obsidian-mono text-silver/40 animate-pulse">Establishing Uplink...</span>
          </div>
        ) : items.map((item, i) => {
          const progress = (item.current / item.goal) * 100;
          const isUrgent = item.status === 'urgent';
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-6 obsidian-surface obsidian-hover border border-white/5 group relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] obsidian-mono uppercase px-1.5 py-0.5 border ${
                      isUrgent ? 'border-neon-unlearn text-neon-unlearn bg-neon-unlearn/10' : 'border-white/10 text-silver/60 bg-white/5'
                    }`}>
                      {item.type} • {item.status}
                    </span>
                  </div>
                  <h3 className="text-lg obsidian-heading text-white group-hover:text-metallic transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm obsidian-mono text-silver/60 leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0 space-y-4 min-w-[160px]">
                  <div className="flex justify-between obsidian-mono text-[9px]">
                    <span className="text-silver/40 uppercase tracking-widest">Progress</span>
                    <span className="text-white">{Math.round(progress)}%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full ${isUrgent ? 'bg-neon-unlearn' : 'bg-white/40'}`}
                    />
                  </div>
                  <div className="flex items-center justify-between obsidian-mono text-[9px] opacity-60">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {item.current.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="w-3 h-3" />
                      {item.goal.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href={item.link}
                target="_blank"
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10"
              >
                <ExternalLink className="w-4 h-4 text-white/40" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
