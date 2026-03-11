import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/spotlight";

const Hero = () => {
  return (
    <div className="h-screen md:h-160 w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight 
        direction="left"
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        direction="right"
        className="-top-40 right-0 md:right-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400">
          Artverse{" "}
          <span className="font-semibold text-purple-400/70 mt-1">
            Academy
          </span>
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Master Sketching, Digital Art, UI Design & Photography at ArtVerse —
          where creative minds are forged into visionary artists.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
