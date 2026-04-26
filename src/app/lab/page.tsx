'use client';

import { ArrowLeft, Terminal, GitBranch, Sparkles, Cpu, Code2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MockTerminal } from "@/components/lab/MockTerminal";
import { GitHubPulse } from "@/components/lab/GitHubPulse";
import { TechStackAura } from "@/components/lab/TechStackAura";

export default function LabPage() {
  const projects = [
    { 
      name: "Unlearn Naija", 
      description: "A digital platform for cultural re-education and communal activism.", 
      stack: "Next.js, Supabase", 
      status: "In Progress",
      href: "https://unlearn-archive.vercel.app"
    },
    { 
      name: "Shopper", 
      description: "A modern, high-performance e-commerce architectural study.", 
      stack: "React, Node", 
      status: "Live",
      href: "https://shopper-chi-six.vercel.app/"
    },
    { 
      name: "JRUN", 
      description: "Connecting specialized service providers with local needs.", 
      stack: "React, Firebase", 
      status: "Live",
      href: "https://jrun-nu.vercel.app/"
    },
    { 
      name: "Weather App", 
      description: "Intuitive meteorological data visualization.", 
      stack: "React, OpenWeather", 
      status: "Live",
      href: "https://thunderweather.vercel.app/"
    },
    { 
      name: "Spotify Playlist Gen", 
      description: "Algorithmic curation of musical preferences.", 
      stack: "React, Spotify API", 
      status: "Live",
      href: "https://playlistgenerator.vercel.app/"
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 pb-32 obsidian-ambient-lab min-h-screen">
      <Link 
        href="/" 
        className="fixed top-24 left-4 md:left-8 flex items-center gap-2 text-silver/40 hover:text-white transition-colors z-20 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-[9px] obsidian-mono uppercase tracking-[0.2em]">Home</span>
      </Link>

      <header className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-12 py-20">
        <div className="relative">
          <div className="p-6 rounded-2xl obsidian-surface border border-neon-lab-static relative z-10">
            <Code2 className="w-16 h-16 text-neon-lab opacity-80" />
          </div>
          <div className="absolute inset-0 bg-neon-lab/10 blur-3xl opacity-30 animate-pulse" />
        </div>
        
        <div className="space-y-6 max-w-3xl">
          <div className="flex items-center justify-center gap-3 obsidian-mono text-[9px] text-neon-lab/60 uppercase tracking-[0.4em]">
            <span className="w-1.5 h-1.5 bg-neon-lab shadow-[0_0_8px_rgba(57,255,20,0.6)]" />
            <span>Digital Studio & Forge</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl obsidian-heading text-white tracking-tighter">
            The Lab
          </h1>
          
          <p className="text-xl md:text-2xl text-silver/60 obsidian-mono font-light max-w-2xl mx-auto">
            A creative sandbox where ideas are forged into functional ecosystems.
          </p>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start pb-32 border-b border-white/5">
        <section className="lg:col-span-7 space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl obsidian-surface border border-neon-lab-static">
                <Terminal className="w-5 h-5 text-neon-lab/80" />
              </div>
              <h2 className="text-2xl md:text-3xl obsidian-heading text-white">Interactive Console</h2>
            </div>
            <p className="text-silver/60 obsidian-mono text-sm leading-relaxed">
              A bridge between intent and execution. Explore the architectural logic of this studio through directives.
            </p>
          </div>
          <div className="obsidian-surface p-4 md:p-8 border border-white/5">
            <MockTerminal />
          </div>
        </section>

        <section className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl obsidian-surface border border-neon-lab-static">
                <Cpu className="w-5 h-5 text-neon-lab/80" />
              </div>
              <h2 className="text-2xl md:text-3xl obsidian-heading text-white">Tech Stack</h2>
            </div>
            <p className="text-silver/60 obsidian-mono text-sm leading-relaxed">
              The core elements used to forge these digital environments.
            </p>
          </div>
          <div className="obsidian-surface p-8 border border-white/5">
            <TechStackAura />
          </div>
        </section>
      </div>

      <div className="pt-24 space-y-24">
        <section className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl obsidian-heading text-white">Project Forge</h2>
            <p className="text-white/20 obsidian-mono text-[9px] uppercase tracking-[0.4em] mt-4">{projects.length} Curated Units</p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {projects.map((project, i) => (
              <motion.a 
                key={i} 
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group obsidian-surface obsidian-hover p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 border border-white/5"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <h3 className="text-xl md:text-2xl obsidian-heading text-white group-hover:text-neon-lab transition-colors">{project.name}</h3>
                    <div className={`w-1 h-1 shadow-[0_0_5px_rgba(57,255,20,0.5)] ${project.status === 'Live' ? 'bg-neon-lab' : 'bg-white/10'}`} />
                  </div>
                  <p className="text-silver/60 obsidian-mono text-sm leading-relaxed max-w-md">{project.description}</p>
                </div>
                
                <div className="flex flex-col md:items-end gap-4 obsidian-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                  <span className="flex items-center gap-2">
                    <GitBranch className="w-3 h-3" />
                    production
                  </span>
                  <span className="px-4 py-1.5 border border-white/10 text-white/60 bg-white/5">
                    {project.stack}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="max-w-xl mx-auto">
           <div className="obsidian-surface p-12 border border-white/5">
              <div className="flex items-center gap-3 mb-10 text-white/40">
                <Sparkles className="w-4 h-4" />
                <span className="text-[9px] obsidian-mono uppercase tracking-[0.3em]">Activity Pulse</span>
              </div>
              <GitHubPulse />
           </div>
        </section>
      </div>
    </div>
  );
}
