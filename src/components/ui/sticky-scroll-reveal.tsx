"use client";

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    image?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(
      content.length - 1,
      Math.max(0, Math.round(latest * (content.length - 1))),
    );

    if (nextIndex !== activeCard) {
      setActiveCard(nextIndex);
    }
  });

  const surfaceClasses = ["bg-black", "bg-zinc-950", "bg-zinc-900"];
  const frameGradients = [
    "linear-gradient(to bottom right, #f59e0b, #78350f)",
    "linear-gradient(to bottom right, #fef3c7, #f59e0b)",
    "linear-gradient(to bottom right, #f59e0b, #7c3aed)",
  ];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-[34rem] justify-center space-x-10 overflow-y-auto rounded-3xl border border-white/12 p-8 hide-scrollbar transition-colors duration-300",
        surfaceClasses[activeCard % surfaceClasses.length],
      )}
    >
      <div className="relative flex items-start px-2">
        <div className="max-w-2xl">
          {content.map((item, index) => {
            const active = activeCard === index;

            return (
              <div key={`${item.title}-${index}`} className="my-16">
                <h2 className={cn("text-3xl font-semibold transition-opacity duration-300", active ? "opacity-100 text-slate-100" : "opacity-35 text-slate-200")}>
                  {item.title}
                </h2>
                <p className={cn("mt-6 max-w-lg text-sm leading-8 transition-opacity duration-300", active ? "opacity-100 text-slate-300" : "opacity-35 text-slate-400")}>
                  {item.description}
                </p>
              </div>
            );
          })}
          <div className="h-32" />
        </div>
      </div>

      <div
        className={cn(
          "sticky top-10 hidden h-[420px] w-[460px] overflow-hidden rounded-2xl border border-white/15 lg:block",
          contentClassName,
        )}
      >
        <div className="absolute inset-0 opacity-30" style={{ background: frameGradients[activeCard % frameGradients.length] }} />
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.28 }}
          className="relative h-full w-full"
        >
          {content[activeCard]?.image ? (
            <img
              src={content[activeCard].image}
              alt={content[activeCard].title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : null}
        </motion.div>
      </div>
    </div>
  );
};
