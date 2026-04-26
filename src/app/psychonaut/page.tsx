import { ArrowLeft, Beaker, Brain, Leaf, Info, BookOpen } from "lucide-react";
import Link from "next/link";
import { TerpeneWheel } from "@/components/psychonaut/TerpeneWheel";
import { UnlearnTimeline } from "@/components/psychonaut/UnlearnTimeline";
import { DMNVisualizer } from "@/components/psychonaut/DMNVisualizer";

export const metadata = {
  title: "Psychonaut Corner | The Archive",
  description: "Exploring the intersection of biological science and consciousness archaeology.",
};

export default function PsychonautPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pb-32 min-h-screen obsidian-ambient-psychonaut">
      <Link href="/archive" className="fixed top-24 left-4 md:left-8 flex items-center gap-2 text-silver/40 hover:text-white transition-colors z-20 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-[9px] obsidian-mono uppercase tracking-[0.2em]">Archive</span>
      </Link>

      {/* Hero Section */}
      <header className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-12 py-20">
        <div className="relative">
          <div className="p-6 rounded-2xl obsidian-surface border border-neon-psychonaut-static relative z-10">
            <Leaf className="w-16 h-16 text-neon-psychonaut opacity-80" />
          </div>
          <div className="absolute inset-0 bg-neon-psychonaut/10 blur-3xl opacity-30 animate-pulse" />
        </div>
        
        <div className="space-y-6 max-w-3xl">
          <div className="flex items-center justify-center gap-3 obsidian-mono text-[9px] text-neon-psychonaut/60 uppercase tracking-[0.4em]">
            <span className="w-1.5 h-1.5 bg-neon-psychonaut shadow-[0_0_8px_rgba(176,38,255,0.6)]" />
            <span>Consciousness Research Log</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl obsidian-heading text-white tracking-tighter">
            Psychonaut Corner
          </h1>
          
          <p className="text-xl md:text-2xl text-silver/60 obsidian-mono font-light max-w-2xl mx-auto">
            We are not exploring chemicals; we are exploring the architecture of our own consciousness.
          </p>
        </div>
      </header>

      {/* Editorial Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pb-32">
        
        {/* Mission Statement */}
        <div className="lg:col-span-12">
          <div className="obsidian-surface p-8 md:p-16 relative overflow-hidden border border-white/5">
            <div className="flex items-center gap-2 text-neon-psychonaut/60 mb-8 obsidian-mono">
              <Info className="w-4 h-4" />
              <span className="text-[9px] uppercase tracking-[0.3em]">The Stance</span>
            </div>
            <h2 className="text-2xl md:text-3xl obsidian-heading text-white mb-8">Bio-Digital Exploration</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <p className="text-silver/60 obsidian-mono leading-relaxed text-base">
                I am a proud enthusiast and activist fighting for legalization, education, and the safe exploration of consciousness. 
                This space represents the intersection of indigenous wisdom and modern laboratory science.
              </p>
              <div className="space-y-4 border-l border-white/10 pl-8 obsidian-mono">
                {['Scientific Accuracy', 'Historical Reclamation', 'Safety & Harm Reduction'].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-[11px] tracking-widest text-silver/40 uppercase">
                    <div className="w-1 h-1 bg-neon-psychonaut/40 shadow-[0_0_5px_rgba(176,38,255,0.4)]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Terpene Lab */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center p-8 md:p-12 obsidian-surface border border-white/5 relative min-h-[500px]">
          <div className="absolute top-8 left-8 flex items-center gap-2 text-white/40 obsidian-mono">
            <Beaker className="w-4 h-4" />
            <span className="text-[9px] uppercase tracking-[0.3em]">The Terpene Lab</span>
          </div>
          <div className="scale-90 md:scale-100">
            <TerpeneWheel />
          </div>
        </div>

        {/* Neuro-Insight callout */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="obsidian-surface p-8 h-full flex flex-col justify-center border border-white/10">
            <div className="flex items-center gap-3 text-neon-psychonaut/60 mb-8 obsidian-mono">
              <Brain className="w-5 h-5" />
              <span className="text-[9px] uppercase tracking-[0.3em]">Neuro-Insight</span>
            </div>
            <h3 className="text-xl obsidian-heading text-white mb-4">The Default Mode Network</h3>
            <p className="text-silver/60 obsidian-mono text-sm leading-relaxed">
              Certain compounds suppress the DMN, allowing for global cross-connectivity between brain regions that rarely communicate, fostering novel perspectives and deep unlearning.
            </p>
          </div>
        </div>

        {/* DMN Visualizer */}
        <div className="lg:col-span-12 obsidian-surface p-8 md:p-12 border border-white/5">
           <div className="flex items-center gap-2 text-white/40 mb-10 obsidian-mono">
            <BookOpen className="w-4 h-4" />
            <span className="text-[9px] uppercase tracking-[0.3em]">Visualizing the Mind</span>
          </div>
          <DMNVisualizer />
        </div>

      </div>
    </div>
  );
}
