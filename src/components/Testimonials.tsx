"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import artVerseTestimonials from "@/data/testimonials";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  return (
    <section className="relative flex h-[38rem] w-full flex-col items-center justify-center overflow-hidden bg-black px-4">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)]",
        )}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.2),transparent_58%)]" />

      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_90%)] bg-[radial-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:7px_7px] opacity-35" />

      <h2 className="z-10 mb-8 text-center text-3xl font-bold text-white sm:text-5xl">Voices from ArtVerse alumni</h2>
      <div className="z-10 flex w-full justify-center overflow-hidden sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={artVerseTestimonials} direction="left" speed="normal" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
