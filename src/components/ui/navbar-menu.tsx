"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring" as const,
  mass: 0.45,
  damping: 14,
  stiffness: 120,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.25 }}
        className={cn(
          "cursor-pointer px-1 text-sm tracking-[0.14em] uppercase transition",
          active === item ? "text-amber-100" : "text-white/80 hover:text-white",
        )}
      >
        {item}
      </motion.p>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute left-1/2 top-[calc(100%_+_1rem)] -translate-x-1/2 pt-2">
              <motion.div
                transition={transition}
                layoutId="active"
                className="overflow-hidden rounded-2xl border border-white/15 bg-black/90 shadow-[0_20px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
              >
                <motion.div layout className="h-full w-max p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex items-center justify-center space-x-6 rounded-full border border-white/15 bg-black/60 px-8 py-4 shadow-[0_15px_45px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
    >
      <div className="pointer-events-none absolute inset-x-16 -top-px h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="group flex space-x-3 rounded-xl p-2 transition hover:bg-white/5">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md border border-white/10 object-cover shadow-2xl"
      />
      <div>
        <h4 className="mb-1 text-base font-semibold text-white transition group-hover:text-amber-100">{title}</h4>
        <p className="max-w-[14rem] text-sm text-neutral-300">{description}</p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a {...rest} className="text-sm text-white/75 transition hover:text-amber-100">
      {children}
    </a>
  );
};
