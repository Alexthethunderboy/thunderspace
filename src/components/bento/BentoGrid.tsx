import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 50, damping: 10 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 10 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
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

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["-10deg", "10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["10deg", "-10deg"]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "row-span-1 rounded-2xl group/bento obsidian-surface obsidian-hover transition-all duration-400 p-6 border border-white/5 justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div style={{ transform: "translateZ(50px)" }}>{header}</div>
      <div className="group-hover/bento:translate-x-1 transition duration-200" style={{ transform: "translateZ(20px)" }}>
        {icon}
        <div className="obsidian-heading text-white mb-2 mt-2">
          {title}
        </div>
        <div className="obsidian-mono text-silver/60 text-[11px] leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
