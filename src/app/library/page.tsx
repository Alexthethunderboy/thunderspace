import { ArrowLeft, BookOpen, Sparkles, Sprout } from "lucide-react";
import Link from "next/link";
import { MindMap } from "@/components/ui/MindMap";
import { DigitalGarden } from "@/components/library/DigitalGarden";
import { SynthesisSpotlight } from "@/components/library/SynthesisSpotlight";

export const metadata = {
  title: "Library of Thought | The Archive",
  description: "A cultivated repository of synthesis, research fragments, and evolving ideas.",
};

export default function LibraryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pb-32 min-h-screen obsidian-ambient-library">
      <Link href="/archive" className="fixed top-24 left-4 md:left-8 flex items-center gap-2 text-silver/40 hover:text-white transition-colors z-20 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-[9px] obsidian-mono uppercase tracking-[0.2em]">Archive</span>
      </Link>

      {/* Hero Section */}
      <header className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-12 py-20">
        <div className="relative">
          <div className="p-6 rounded-2xl obsidian-surface border border-neon-library-static relative z-10">
            <BookOpen className="w-16 h-16 text-neon-library opacity-80" />
          </div>
          <div className="absolute inset-0 bg-neon-library/10 blur-3xl opacity-30 animate-pulse" />
        </div>
        
        <div className="space-y-6 max-w-3xl">
          <div className="flex items-center justify-center gap-3 obsidian-mono text-[9px] text-neon-library/60 uppercase tracking-[0.4em]">
            <span className="w-1.5 h-1.5 bg-neon-library shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
            <span>Digital Garden Cultivation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl obsidian-heading text-white tracking-tighter">
            Library of Thought
          </h1>
          
          <p className="text-xl md:text-2xl text-silver/60 obsidian-mono font-light max-w-2xl mx-auto">
            A decentralized repository of raw fragments, ongoing syntheses, and architectural sketches in progress.
          </p>
        </div>
      </header>

      {/* Mind Map Section */}
      <section className="relative group mb-32">
        <div className="relative obsidian-surface p-8 md:p-12 border border-white/5">
           <div className="flex items-center gap-2 text-neon-library/60 mb-10 obsidian-mono">
            <Sprout className="w-4 h-4" />
            <span className="text-[9px] uppercase tracking-[0.3em]">The Concept Graph</span>
          </div>
          <MindMap />
        </div>
      </section>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
        <section className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
               <div className="p-2.5 rounded-xl obsidian-surface border border-neon-library-static">
                <Sparkles className="w-5 h-5 text-neon-library/80" />
               </div>
               <h2 className="text-2xl md:text-3xl obsidian-heading text-white">Synthesis</h2>
            </div>
            <p className="text-silver/60 obsidian-mono text-sm leading-relaxed max-w-xl">
              Connecting dots between history, ecology, and the systems we inhabit. These are structured essays and thoughts.
            </p>
          </div>
          <SynthesisSpotlight />
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
               <div className="p-2.5 rounded-xl obsidian-surface border border-neon-library-static">
                <Sprout className="w-5 h-5 text-neon-library/80" />
               </div>
               <h2 className="text-2xl md:text-3xl obsidian-heading text-white">The Garden</h2>
            </div>
            <p className="text-silver/60 obsidian-mono text-sm leading-relaxed max-w-xl">
              Raw fragments, unlearning logs, and architectural sketches. Unpolished and growing.
            </p>
          </div>
          <DigitalGarden />
        </section>
      </div>
    </div>
  );
}
