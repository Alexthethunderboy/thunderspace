import { ArrowLeft, ExternalLink, Sparkles, Book } from "lucide-react";
import Link from "next/link";
import { JournalSection } from "@/components/unlearn/JournalSection";
import { ParadigmShifter } from "@/components/unlearn/ParadigmShifter";
import { ActivistLedger } from "@/components/unlearn/ActivistLedger";

export const metadata = {
  title: "Unlearn Naija | The Archive",
  description: "Dismantling paradigms and rethinking our shared history.",
};

export default function UnlearnPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-32 min-h-screen obsidian-ambient-unlearn">
      <Link href="/archive" className="fixed top-24 left-4 md:left-8 flex items-center gap-2 text-silver/40 hover:text-white transition-colors z-20 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-[9px] uppercase tracking-widest obsidian-mono">Archive</span>
      </Link>
      
      <header className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-12 py-20">
        <div className="relative">
          <div className="p-8 obsidian-surface border border-neon-unlearn-static relative z-10 shadow-2xl">
            <Sparkles className="w-12 h-12 text-neon-unlearn opacity-80" />
            <div className="absolute inset-0 bg-neon-unlearn/5 animate-sheen" />
          </div>
          <div className="absolute inset-0 bg-neon-unlearn/10 blur-3xl opacity-30 animate-pulse" />
        </div>

        <div className="space-y-6 max-w-2xl">
          <h1 className="text-5xl md:text-7xl obsidian-heading text-white tracking-tighter">
            Unlearn Naija
          </h1>
          <div className="flex items-center justify-center gap-3 obsidian-mono text-[9px] text-neon-unlearn/60 uppercase tracking-[0.3em]">
            <span className="w-1.5 h-1.5 bg-neon-unlearn shadow-[0_0_8px_rgba(255,0,60,0.6)]" />
            <span>Cultural Observation in Progress</span>
          </div>
          <p className="text-xl md:text-2xl text-silver/70 obsidian-mono leading-relaxed">
            A digital platform dedicated to cultural re-education, dismantling societal programming, and community activism.
          </p>
          <div className="pt-8">
             <a 
               href="https://unlearn-archive.vercel.app" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 px-8 py-3 obsidian-surface obsidian-hover border border-neon-unlearn-static text-white text-[10px] obsidian-mono uppercase tracking-[0.3em] transition-all hover:bg-neon-unlearn/5"
             >
               <span>Full Repository</span>
               <ExternalLink className="w-4 h-4" />
             </a>
          </div>
        </div>
      </header>

      <div className="space-y-48">
        {/* Paradigm Shifter - Styled as an Observation */}
        <section className="space-y-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <div className="flex items-center gap-2 obsidian-mono text-neon-unlearn/60 text-[9px] uppercase tracking-widest">
              <Book className="w-3 h-3" />
              Chapter 01
            </div>
            <h2 className="text-4xl md:text-5xl obsidian-heading text-white">The Perspective Shift</h2>
            <p className="text-silver/60 max-w-xl obsidian-mono leading-relaxed text-sm">
              Explore how unlearning changes our lens on the structures we once considered absolute.
            </p>
          </div>
          <div className="obsidian-surface p-8 md:p-12 border border-white/5">
            <ParadigmShifter />
          </div>
        </section>

        {/* Ledger - Styled as a Collection of Actions */}
        <section className="space-y-12">
          <div className="text-center">
             <h2 className="text-4xl md:text-5xl obsidian-heading text-white tracking-tight">Activist Ledger</h2>
             <p className="obsidian-mono text-[9px] text-silver/40 uppercase tracking-[0.3em] mt-4">Tracing movements & intentions</p>
          </div>
          <ActivistLedger />
        </section>

        {/* Journal - Final Thoughts */}
        <section className="border-t border-white/5 pt-24">
          <JournalSection />
        </section>
      </div>
    </div>
  );
}
