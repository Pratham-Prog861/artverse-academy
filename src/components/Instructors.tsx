"use client";

import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import instructors from "@/data/instructors";

const Instructors = () => {
  return (
    <section className="relative flex h-[42rem] items-center justify-center overflow-hidden">
      <WavyBackground className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center" containerClassName="h-[42rem] w-full">
        <h2 className="text-center text-3xl font-bold text-white md:text-5xl lg:text-6xl">Meet our expert mentors</h2>
        <p className="mb-6 mt-4 text-center text-base text-white/80 md:text-lg">Industry-led faculty shaping your creative breakthroughs</p>
        <div className="mb-10 flex w-full flex-row items-center justify-center">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </section>
  );
};

export default Instructors;
