"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 110, damping: 16 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(useTransform(x, [-100, 100], [-35, 35]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-44, 44]), springConfig);

  const handleMouseMove = (event: any) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.75 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 280,
                    damping: 12,
                  },
                }}
                exit={{ opacity: 0, y: 16, scale: 0.75 }}
                style={{
                  translateX,
                  rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-xl border border-white/15 bg-black/90 px-4 py-2 text-xs shadow-2xl backdrop-blur-xl"
              >
                <div className="absolute inset-x-8 -bottom-px z-30 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
                <div className="relative z-30 text-base font-semibold text-amber-100">{item.name}</div>
                <div className="text-xs text-white/85">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="relative !m-0 h-16 w-16 rounded-full border-2 border-white/80 object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-110"
          />
        </div>
      ))}
    </>
  );
};

