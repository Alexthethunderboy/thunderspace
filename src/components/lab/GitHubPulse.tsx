'use client';

import { motion } from 'framer-motion';
import { GitCommit, GitPullRequest, GitMerge, ExternalLink } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: "commit",
    repo: "digiarchive",
    msg: "feat: implement interactive mind map sub-nodes",
    time: "2h ago",
    status: "merged"
  },
  {
    id: 2,
    type: "pr",
    repo: "unlearn-naija",
    msg: "docs: update paradigm shifter manifestos",
    time: "5h ago",
    status: "open"
  },
  {
    id: 3,
    type: "commit",
    repo: "shopper",
    msg: "fix: resolve stripe webhook concurrency issues",
    time: "1d ago",
    status: "merged"
  }
];

export function GitHubPulse() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl obsidian-heading text-white flex items-center gap-3">
          GitHub Pulse
          <div className="flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white" 
              />
            ))}
          </div>
        </h2>
        <a href="https://github.com/alexthegreatdeveloper" target="_blank" className="text-silver/40 hover:text-white transition-colors">
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="space-y-3">
        {activities.map((activity, i) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="p-4 rounded-xl border border-white/5 obsidian-surface obsidian-hover transition-all flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-lg obsidian-surface border border-white/10 flex items-center justify-center shrink-0">
              {activity.type === 'commit' ? <GitCommit className="w-4 h-4 text-white/60" /> : <GitPullRequest className="w-4 h-4 text-white/40" />}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm obsidian-heading text-white">{activity.repo}</span>
                <span className="text-[9px] text-silver/40 obsidian-mono uppercase tracking-[0.2em]">{activity.time}</span>
              </div>
              <p className="text-sm text-silver/60 obsidian-mono truncate group-hover:text-metallic transition-colors">
                {activity.msg}
              </p>
            </div>

            <div className={`text-[9px] obsidian-mono px-2 py-1 border uppercase tracking-[0.2em] ${
              activity.status === 'merged' ? 'border-white/20 text-white bg-white/5' : 'border-white/10 text-white/40 bg-transparent'
            }`}>
              {activity.status}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Heatmap Placeholder */}
      <div className="pt-4">
        <div className="text-[9px] obsidian-mono text-silver/40 uppercase tracking-[0.3em] mb-4">Build Velocity Heatmap</div>
        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-hide">
          {[...Array(52)].map((_, i) => (
            <div key={i} className="flex flex-col gap-1.5 shrink-0">
              {[...Array(7)].map((_, j) => {
                const opacity = Math.random() > 0.7 ? (Math.random() * 0.8 + 0.2) : 0.05;
                return (
                  <div 
                    key={j} 
                    className="w-2.5 h-2.5 rounded-sm"
                    style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
