import { ArrowRight, Book, Leaf, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "The Archive | Kelechi Alexander Ugoh",
  description: "A curated collection of research fragments, cultural dissections, and evolving thoughts.",
};

export default function ArchivePage() {
  const collections = [
    {
      title: "Unlearn Naija",
      description: "Dismantling regional paradigms and rethinking shared history through a personal lens.",
      href: "/unlearn",
      icon: Sparkles,
      tag: "Cultural Systems"
    },
    {
      title: "Psychonaut Corner",
      description: "Exploring the intersections of biological science, consciousness, and historical reclamation.",
      href: "/psychonaut",
      icon: Leaf,
      tag: "Consciousness Research"
    },
    {
      title: "Library of Thought",
      description: "A digital garden of raw fragments, syntheses, and architectural sketches in progress.",
      href: "/library",
      icon: Book,
      tag: "Knowledge Base"
    }
  ];

  return (
    <div className="min-h-screen pt-12 pb-32">
      <header className="max-w-3xl mb-24">
        <h1 className="obsidian-heading text-5xl md:text-7xl mb-6 text-white tracking-tight">The Archive</h1>
        <p className="obsidian-mono text-xl text-silver/60 leading-relaxed">
          &quot;We don&apos;t just collect information; we cultivate understanding.&quot;
        </p>
      </header>

      <div className="grid gap-16 md:gap-32">
        {collections.map((collection, index) => (
          <section key={collection.title} className="group relative">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-1 pt-2">
                <span className="text-[10px] obsidian-mono uppercase tracking-[0.3em] text-white/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <div className="md:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <collection.icon className="w-5 h-5 text-white/60" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-silver/40 obsidian-mono">{collection.tag}</span>
                </div>
                
                <h2 className="obsidian-heading text-4xl md:text-5xl text-white group-hover:text-metallic transition-colors duration-500">
                  {collection.title}
                </h2>
                
                <p className="text-lg md:text-xl text-silver/70 leading-relaxed max-w-2xl">
                  {collection.description}
                </p>
                
                <Link 
                  href={collection.href}
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white hover:text-metallic transition-all pt-4"
                >
                  Enter Collection <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="hidden md:block md:col-span-4 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="obsidian-surface p-12 aspect-square flex items-center justify-center rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-700 border border-white/5">
                   <collection.icon className="w-24 h-24 text-white/10" />
                </div>
              </div>
            </div>
            
            {/* Soft Divider */}
            {index !== collections.length - 1 && (
              <div className="mt-16 md:mt-32 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
            )}
          </section>
        ))}
      </div>

      <footer className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-md">
          <p className="text-silver/40 text-sm">
            This archive is a living entity. It grows as I learn, or rather, as I unlearn.
          </p>
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-silver/30 obsidian-mono">
          Last Curated: April 2026
        </div>
      </footer>
    </div>
  );
}
