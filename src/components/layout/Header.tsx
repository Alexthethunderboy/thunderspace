'use client';

import Link from 'next/link';
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full p-6 md:p-8 pointer-events-none">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="pointer-events-auto group">
          <div className="flex flex-col">
            <span className="obsidian-heading text-xl md:text-2xl text-white tracking-widest group-hover:text-metallic transition-colors duration-500">
              Kelechi Alexander Ugoh
            </span>
            <div className="flex items-center gap-2 obsidian-mono text-[9px] mt-1 opacity-60">
              <span className="inline-block w-1.5 h-1.5 bg-metallic/40" />
              <span>Personal Archive • Lagos, NG</span>
            </div>
          </div>
        </Link>

        <nav className="pointer-events-auto hidden md:flex items-center gap-8 obsidian-mono text-[10px] tracking-[0.3em]">
          <Link href="/archive" className="hover:text-white transition-colors">Archive</Link>
          <Link href="/lab" className="hover:text-white transition-colors">The Lab</Link>
          <Link href="/notes" className="hover:text-white transition-colors">Notes</Link>
        </nav>
      </div>
    </header>
  );
}
