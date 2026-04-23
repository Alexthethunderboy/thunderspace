"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { historyPoints } from "@/data/psychonautData";

export const UnlearnTimeline: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative max-w-2xl mx-auto py-12 px-6">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2" />
      <motion.div
        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/40 origin-top -translate-x-1/2 z-10"
        style={{ scaleY }}
      />

      <div className="space-y-24">
        {historyPoints.map((point, i) => (
          <motion.div
            key={point.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8`}
          >
            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-obsidian border-2 border-white/40 -translate-x-1/2 z-20" />

            {/* Content */}
            <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
              <span className="text-3xl md:text-4xl obsidian-heading text-silver/20 mb-3 block tracking-tighter">
                {point.year}
              </span>
              <h4 className="text-xl md:text-2xl obsidian-heading text-white mb-3">{point.event}</h4>
              <p className="text-silver/60 obsidian-mono text-sm leading-relaxed max-w-xs ml-auto mr-0 md:mx-0">
                {point.context}
              </p>
            </div>
            
            {/* Empty space for the other side */}
            <div className="hidden md:block w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
