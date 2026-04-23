'use client';
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, MouseEvent } from "react";
import Link from "next/link";
import { useSpotify } from "@/hooks/useSpotify";

interface InfoCardProps {
  className?: string;
  children: ReactNode;
  href?: string;
  variant?: 'default' | 'unlearn' | 'psychonaut' | 'lab' | 'library';
}

export function InfoCard({ className, children, href, variant = 'default' }: InfoCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 50, damping: 10 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 10 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["-8deg", "8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["8deg", "-8deg"]);

  const { data } = useSpotify();
  const isPlaying = data?.isPlaying || false;
  const tempo = data?.tempo || 120;
  const energy = data?.energy || 0.5;

  // Pulse animation variants
  const pulseScale = isPlaying ? [1, 1 + (energy * 0.02), 1] : [1, 1, 1];
  const pulseDuration = 60 / tempo; // Duration of one beat

  const hoverClass = variant !== 'default' ? `obsidian-hover-${variant}` : '';

  const content = (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale: pulseScale,
      }}
      transition={{
        duration: pulseDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "obsidian-surface obsidian-hover relative overflow-hidden rounded-2xl p-5 md:p-7 border border-white/5 transition-all duration-400 group h-full cursor-pointer flex flex-col",
        hoverClass,
        className
      )}
    >
      
      <div style={{ transform: "translateZ(20px)" }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className={cn("block h-full outline-none", className && className.includes("col-span") ? className : "")}>
        {content}
      </Link>
    );
  }

  return content;
}
