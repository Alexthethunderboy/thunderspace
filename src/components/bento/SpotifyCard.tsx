'use client';

import { useSpotify } from "@/hooks/useSpotify";
import { InfoCard } from "@/components/bento/InfoCard";
import { Radio, ListMusic, Play, ArrowUpRight, Music, Mic2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";

export function SpotifyCard() {
  const { data, playlists, topTracks, topArtists, profileUrl, loading, error } = useSpotify();
  const [view, setView] = useState<'player' | 'playlists' | 'hits' | 'artists'>('player');
  const isPlaying = data?.isPlaying;

  const isListView = view !== 'player';

  return (
    <InfoCard 
      className={cn(
        "md:col-span-4 flex flex-col justify-between group relative overflow-hidden transition-all duration-700",
        isListView ? "md:min-h-[450px] md:row-span-2" : "min-h-[160px] md:row-span-1"
      )} 
      href={view === 'player' && isPlaying ? data.songUrl : undefined}
    >
      {/* Header / Tabs */}
      <div className="flex items-center justify-between relative z-20 mb-2">
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
           <button 
             onClick={(e) => { e.preventDefault(); e.stopPropagation(); setView('player'); }}
             className={cn(
               "p-2 rounded-lg transition-all duration-300 flex items-center gap-2 obsidian-mono text-[9px] tracking-widest",
               view === 'player' ? "bg-white/10 text-white" : "text-silver/40 hover:text-white"
             )}
           >
             <Radio className={cn("w-3.5 h-3.5", isPlaying && view === 'player' ? "animate-pulse" : "")} />
             <span className="hidden sm:block">Frequency</span>
           </button>
           <button 
             onClick={(e) => { e.preventDefault(); e.stopPropagation(); setView('playlists'); }}
             className={cn(
               "p-2 rounded-lg transition-all duration-300 flex items-center gap-2 obsidian-mono text-[9px] tracking-widest",
               view === 'playlists' ? "bg-white/10 text-white" : "text-silver/40 hover:text-white"
             )}
           >
             <ListMusic className="w-3.5 h-3.5" />
             <span className="hidden sm:block">Library</span>
           </button>
           <button 
             onClick={(e) => { e.preventDefault(); e.stopPropagation(); setView('hits'); }}
             className={cn(
               "p-2 rounded-lg transition-all duration-300 flex items-center gap-2 obsidian-mono text-[9px] tracking-widest",
               view === 'hits' ? "bg-white/10 text-white" : "text-silver/40 hover:text-white"
             )}
           >
             <Music className="w-3.5 h-3.5" />
             <span className="hidden sm:block">Monthly Hits</span>
           </button>
           <button 
             onClick={(e) => { e.preventDefault(); e.stopPropagation(); setView('artists'); }}
             className={cn(
               "p-2 rounded-lg transition-all duration-300 flex items-center gap-2 obsidian-mono text-[9px] tracking-widest",
               view === 'artists' ? "bg-white/10 text-white" : "text-silver/40 hover:text-white"
             )}
           >
             <Mic2 className="w-3.5 h-3.5" />
             <span className="hidden sm:block">Top Artists</span>
           </button>
        </div>
        
        <div className="hidden sm:flex items-center gap-2 obsidian-mono text-[9px] text-silver/40">
            {view === 'player' && isPlaying && (
              <>
                <div className="flex gap-0.5 items-end h-3">
                  <span className="w-0.5 bg-white/40 h-1 animate-[music-bar_1s_ease-in-out_infinite]" />
                  <span className="w-0.5 bg-white/40 h-2 animate-[music-bar_1.2s_ease-in-out_infinite_0.1s]" />
                  <span className="w-0.5 bg-white/40 h-3 animate-[music-bar_0.8s_ease-in-out_infinite_0.2s]" />
                </div>
                <span className="text-white/60">ON AIR</span>
              </>
            )}
        </div>
      </div>
      {/* View Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center py-2">
        {view === 'player' ? (
          // PLAYER VIEW
          <div className="flex items-center justify-between w-full px-4">
            <div className="flex items-center gap-6 md:gap-10">
              <div className="relative w-20 h-20 shrink-0 md:w-24 md:h-24">
                {isPlaying && data?.albumImageUrl ? (
                  <div className="relative w-full h-full">
                    <img 
                      src={data.albumImageUrl} 
                      alt="Album Art" 
                      className="w-full h-full rounded-lg object-cover shadow-2xl border border-white/5 relative z-10 grayscale-[0.2]" 
                    />
                  </div>
                ) : (
                  <div className="w-full h-full rounded-lg obsidian-surface flex items-center justify-center border border-white/5">
                    <Radio className="w-10 h-10 text-white/10" />
                  </div>
                )}
              </div>

              <div className="overflow-hidden space-y-1">
                <p className="obsidian-mono text-[9px] text-white/40 uppercase tracking-[0.2em]">
                  {loading ? "SEARCHING..." : (isPlaying ? "BROADCASTING LIVE" : "STATION OFFLINE")}
                </p>
                <div className="flex flex-col">
                  <h4 className="text-xl md:text-3xl obsidian-heading truncate max-w-[200px] md:max-w-[500px] text-white tracking-tighter">
                    {loading ? "Initializing..." : (isPlaying ? data.title : "Static / Silence")}
                  </h4>
                  <p className="text-sm md:text-lg text-silver/60 truncate max-w-[150px] md:max-w-[400px] font-light">
                    {isPlaying ? data.artist : "Nexus Frequency"}
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8 pr-4">
               <div className="flex flex-col items-end gap-1 obsidian-mono text-[9px]">
                  <span className="text-white/40">SIGNAL STRENGTH</span>
                  <div className="flex gap-0.5">
                     {[...Array(5)].map((_, i) => (
                       <div key={i} className={cn("w-1 h-3", i < 4 ? "bg-white/60" : "bg-white/10")} />
                     ))}
                  </div>
               </div>
               
               <div className="flex flex-col items-end gap-1 obsidian-mono text-[9px]">
                  <span className="text-white/40">FORMAT</span>
                  <span className="text-white bg-white/5 px-1.5 py-0.5 border border-white/10">LOSSLESS</span>
               </div>

               <div className="h-12 w-px bg-white/5" />

               <div className="flex flex-col items-end gap-1 obsidian-mono text-[9px] text-right">
                  <span className="text-white/40 uppercase">Band</span>
                  <span className="text-white">432.00 MHz</span>
               </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 w-full h-full">
            {/* Mobile Scroll View */}
            <div className="flex md:hidden gap-6 overflow-x-auto pb-4 no-scrollbar px-4 pt-2">
               {view === 'playlists' && playlists.length > 0 && playlists.map((p) => (
                 <Link key={p.id} href={p.url} target="_blank" className="flex flex-col gap-2 min-w-[120px] max-w-[120px] group/item">
                    <div className="aspect-square w-full rounded-xl overflow-hidden border border-white/10 relative">
                      <img src={p.image || ''} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[11px] font-bold text-white truncate text-center">{p.name}</p>
                 </Link>
               ))}
               {view === 'hits' && topTracks.length > 0 && topTracks.map((t) => (
                 <Link key={t.id} href={t.url} target="_blank" className="flex flex-col gap-2 min-w-[120px] max-w-[120px] group/item">
                    <div className="aspect-square w-full rounded-xl overflow-hidden border border-white/10 relative">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                     <div className="space-y-0.5">
                       <p className="text-[11px] font-bold text-white truncate text-center">{t.name}</p>
                       <p className="text-[9px] text-gray-500 truncate text-center">{t.artist}</p>
                     </div>
                 </Link>
               ))}
               {view === 'artists' && topArtists.length > 0 && topArtists.map((a) => (
                 <Link key={a.id} href={a.url} target="_blank" className="flex flex-col gap-2 min-w-[120px] max-w-[120px] group/item">
                    <div className="aspect-square w-full rounded-full overflow-hidden border border-white/10 relative">
                      <img src={a.image} alt={a.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[11px] font-bold text-white truncate text-center">{a.name}</p>
                 </Link>
               ))}
            </div>

            {/* Desktop Grid View */}
            <div className="hidden md:grid grid-cols-5 lg:grid-cols-7 gap-6 px-4 pt-2 h-full content-start">
               {view === 'playlists' && playlists.map((p) => (
                   <Link key={p.id} href={p.url} target="_blank" className="flex flex-col gap-2 group/item transition-transform duration-300 hover:-translate-y-1">
                      <div className="aspect-square w-full rounded-lg overflow-hidden border border-white/5 relative shadow-2xl obsidian-surface">
                        <img src={p.image || ''} alt={p.name} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700 opacity-80 group-hover/item:opacity-100 grayscale-[0.2]" />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-all duration-300">
                          <div className="bg-white/10 p-3 rounded-full scale-50 group-hover/item:scale-100 transition-transform duration-300 border border-white/20">
                            <Play className="w-6 h-6 text-white fill-current" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-0.5 px-1">
                        <p className="obsidian-mono text-[10px] font-bold text-white truncate w-full group-hover/item:text-metallic transition-colors uppercase tracking-tight">{p.name}</p>
                        <p className="text-[8px] text-silver/40 obsidian-mono tracking-widest">{p.tracks} TRACKS</p>
                      </div>
                   </Link>
               ))}

               {view === 'hits' && topTracks.map((t) => (
                   <Link key={t.id} href={t.url} target="_blank" className="flex flex-col gap-2 group/item transition-transform duration-300 hover:-translate-y-1">
                      <div className="aspect-square w-full rounded-lg overflow-hidden border border-white/5 relative shadow-2xl obsidian-surface">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700 opacity-80 group-hover/item:opacity-100 grayscale-[0.2]" />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-all duration-300">
                          <div className="bg-white/10 p-3 rounded-full scale-50 group-hover/item:scale-100 transition-transform duration-300 border border-white/20">
                            <Play className="w-6 h-6 text-white fill-current" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-0.5 px-1">
                        <p className="obsidian-mono text-[10px] font-bold text-white truncate w-full group-hover/item:text-metallic transition-colors uppercase tracking-tight">{t.name}</p>
                        <p className="text-[8px] text-silver/40 obsidian-mono tracking-widest">{t.artist}</p>
                      </div>
                   </Link>
               ))}

               {view === 'artists' && topArtists.map((a) => (
                   <Link key={a.id} href={a.url} target="_blank" className="flex flex-col gap-2 group/item transition-transform duration-300 hover:-translate-y-1 text-center">
                      <div className="aspect-square w-full rounded-full overflow-hidden border border-white/5 relative shadow-2xl obsidian-surface">
                        <img src={a.image} alt={a.name} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700 opacity-80 group-hover/item:opacity-100 grayscale-[0.2]" />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-all duration-300">
                          <div className="bg-white/10 p-3 rounded-full scale-50 group-hover/item:scale-100 transition-transform duration-300 border border-white/20">
                            <Play className="w-6 h-6 text-white fill-current" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-0.5 px-1">
                        <p className="obsidian-mono text-[10px] font-bold text-white truncate w-full group-hover/item:text-metallic transition-colors uppercase tracking-tight">{a.name}</p>
                        <p className="text-[8px] text-silver/40 obsidian-mono tracking-widest uppercase truncate">{a.genres[0]}</p>
                      </div>
                   </Link>
               ))}

                {/* Empty States */}
                {view === 'playlists' && playlists.length === 0 && (
                  <div className="col-span-full text-center text-xs obsidian-mono text-silver/40 py-12 obsidian-surface border border-white/5 rounded-xl">
                    {loading ? "Decrypting Library..." : (error || "No public playlists found. Synchronizing...")}
                  </div>
                )}
                {view === 'hits' && topTracks.length === 0 && (
                  <div className="col-span-full text-center text-xs obsidian-mono text-silver/40 py-12 obsidian-surface border border-white/5 rounded-xl">
                    {loading ? "Analyzing Frequencies..." : (error || "Insufficient data for this cycle. Keep playing.")}
                  </div>
                )}
                {view === 'artists' && topArtists.length === 0 && (
                  <div className="col-span-full text-center text-xs obsidian-mono text-silver/40 py-12 obsidian-surface border border-white/5 rounded-xl">
                     {loading ? "Scanning Aura..." : (error || "Aura signal weak. More input required.")}
                  </div>
                )}
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-3 right-3 z-20 flex gap-2">
        {view === 'playlists' && profileUrl && (
           <a href={profileUrl} target="_blank" className="text-[9px] obsidian-mono bg-white/5 hover:bg-white/10 text-white border border-white/10 px-3 py-1.5 transition-colors flex items-center gap-1">
             Visit Full Frequency <ArrowUpRight className="w-3 h-3" />
           </a>
        )}
      </div>
    </InfoCard>
  );
}

