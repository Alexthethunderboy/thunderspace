import { BentoGrid } from "@/components/bento/BentoGrid";
import { InfoCard } from "@/components/bento/InfoCard";
import { Brain, Leaf, Terminal, ArrowUpRight, Zap, Cpu, Globe, Heart } from "lucide-react";
import { SpotifyCard } from "@/components/bento/SpotifyCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-20 pb-32 obsidian-ambient-home">
      
      {/* Industrial Hero Header */}
      <section className="flex flex-col gap-8 pt-12">
          <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 obsidian-surface border border-neon-primary-static text-white obsidian-mono text-[9px] tracking-[0.2em]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-sheen absolute inline-flex h-full w-full bg-neon-primary/40"></span>
                    <span className="relative inline-flex h-2 w-2 bg-neon-primary"></span>
                  </span>
                  Refining the Narrative
              </div>
              <h1 className="text-6xl md:text-8xl obsidian-heading leading-[0.9] tracking-tighter">
                Building tools for the <span className="text-silver">evolving</span> soul.
              </h1>
              <p className="text-xl md:text-2xl text-silver/60 obsidian-mono max-w-3xl leading-relaxed">
                  Kelechi Alexander Ugoh — Designing ecosystems at the intersection of consciousness, culture, and high-performance code.
              </p>
          </div>
      </section>

      {/* The Manifesto - Obsidian Noir Surface */}
      <section className="relative">
          <div className="obsidian-surface obsidian-texture p-8 md:p-16 relative overflow-hidden group max-w-5xl border border-white/5">
               <div className="absolute top-0 right-0 p-8 opacity-[0.02]">
                  <Brain className="w-48 h-48 text-white rotate-12" />
               </div>
               
               <header className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white/5 border border-white/10">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl obsidian-heading text-white">
                    The Philosophy
                  </h2>
               </header>

               <div className="space-y-8 text-silver/80 leading-relaxed text-lg obsidian-mono">
                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-white first-letter:leading-none">
                      I believe code is an extension of human intent. My work isn&apos;t just about websites; it&apos;s about building digital environments that respect the complexity of our minds and the urgency of our cultural evolution.
                  </p>
                  <blockquote className="border-l border-white/20 pl-8 py-2 text-white/90 text-xl tracking-tight leading-relaxed font-medium">
                      &quot;Digital spaces should feel as alive as the people who inhabit them.&quot;
                  </blockquote>
                  <p>
                      Whether it&apos;s through the activism of <strong>Unlearn Naija</strong> or the exploration within the <strong>Psychonaut Corner</strong>, I am dedicated to dismantling outdated systems and crafting new ones that serve our collective growth.
                  </p>
               </div>

               <div className="mt-12 flex flex-wrap gap-6 items-center">
                  <Link href="/archive" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white hover:text-metallic transition-colors group/link">
                      Explore the Archive <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                  <div className="h-px w-12 bg-white/10" />
                  <span className="obsidian-mono text-[9px] tracking-widest opacity-40">Human-Centric Design v2.0</span>
               </div>
          </div>
      </section>

      {/* Core Expertise Grid */}
      <section className="space-y-8">
          <div className="flex items-end justify-between px-2">
            <h3 className="obsidian-mono text-[10px] tracking-widest uppercase opacity-40">Core Expertise</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Digital Architecture', items: ['Next.js', 'TypeScript', 'Node.js'], icon: Cpu, color: 'text-neon-lab' },
                { title: 'Human Exploration', items: ['Consciousness', 'Activism', 'History'], icon: Leaf, color: 'text-neon-psychonaut' },
                { title: 'Sonic Experience', items: ['Songwriting', 'Guitar', 'Production'], icon: Globe, color: 'text-neon-library' }
              ].map((group) => (
                <div key={group.title} className="obsidian-surface p-8 obsidian-hover border border-white/5">
                   <header className="flex items-center gap-3 mb-6">
                      <group.icon className={`w-5 h-5 ${group.color} opacity-80`} />
                      <h4 className="text-sm obsidian-heading text-white">{group.title}</h4>
                   </header>
                   <div className="flex flex-wrap gap-2">
                      {group.items.map(item => (
                        <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 text-silver/60 obsidian-mono text-[9px] tracking-widest uppercase">
                          {item}
                        </span>
                      ))}
                   </div>
                </div>
              ))}
          </div>
      </section>

      {/* Ambient Grid - Archive & Modules */}
      <section className="space-y-8">
          <div className="flex items-end justify-between px-2 border-b border-white/5 pb-4">
            <h3 className="obsidian-mono text-[10px] tracking-widest uppercase opacity-40">Selected Records</h3>
            <Link href="/archive" className="text-[9px] uppercase tracking-[0.3em] text-white hover:text-metallic transition-colors">View All Nodes</Link>
          </div>
          
          <BentoGrid className="max-w-7xl mx-auto md:grid-cols-4 md:auto-rows-[minmax(180px,auto)]">
            <InfoCard 
              className="md:col-span-2 md:row-span-2 obsidian-hover overflow-hidden obsidian-surface border border-white/5" 
              variant="unlearn"
              href="/unlearn"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
              <div className="mt-auto relative z-10 p-4">
                <h3 className="text-3xl obsidian-heading text-white tracking-tight">
                  Unlearn Naija
                </h3>
                <p className="text-sm obsidian-mono text-silver/60 mt-3 max-w-sm">
                  Dismantling regional paradigms through shared history.
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <div className="h-px flex-1 bg-white/10" />
                  <ArrowUpRight className="w-5 h-5 text-white/40" />
                </div>
              </div>
            </InfoCard>

            <InfoCard 
              className="md:col-span-1 md:row-span-2 obsidian-hover overflow-hidden obsidian-surface border border-white/5" 
              variant="psychonaut" 
              href="/psychonaut"
            >
              <div className="relative z-20 flex flex-col h-full items-center justify-center text-center p-4">
                <Leaf className="w-12 h-12 text-white/20 mb-8" />
                <h3 className="text-xl obsidian-heading text-white tracking-tight">
                  Psychonaut Corner
                </h3>
                <p className="obsidian-mono text-[9px] text-silver/40 mt-4 uppercase tracking-[0.2em]">Consciousness Research</p>
              </div>
            </InfoCard>

            <InfoCard className="md:col-span-1 md:row-span-1 obsidian-hover p-8 obsidian-surface border border-white/5" href="/library">
              <div className="h-full flex flex-col justify-between">
                <Brain className="w-8 h-8 text-white/20" />
                <div>
                  <h3 className="text-lg obsidian-heading text-white leading-none">Library</h3>
                  <p className="obsidian-mono text-[9px] text-silver/40 mt-2 uppercase tracking-widest">124 Nodes</p>
                </div>
              </div>
            </InfoCard>

            <InfoCard className="md:col-span-1 md:row-span-1 obsidian-hover p-8 obsidian-surface border border-white/5" variant="lab" href="/lab">
              <div className="h-full flex flex-col justify-between">
                <Terminal className="w-8 h-8 text-white/20" />
                <div>
                  <h3 className="text-lg obsidian-heading text-white leading-none">The Lab</h3>
                  <p className="obsidian-mono text-[9px] text-silver/40 mt-2 uppercase tracking-widest">Active Builds</p>
                </div>
              </div>
            </InfoCard>

            <SpotifyCard />
          </BentoGrid>
      </section>
    </div>
  );
}

