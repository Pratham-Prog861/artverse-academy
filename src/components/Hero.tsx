import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/spotlight";

const Hero = () => {
  return (
    <section className="relative mx-auto flex h-[44rem] w-full flex-col items-center justify-center overflow-hidden py-10">
      <Spotlight direction="left" className="-top-40 left-0 md:left-60 md:-top-20" fill="#fde68a" />
      <Spotlight direction="right" className="-top-40 right-0 md:right-60 md:-top-20" fill="#f59e0b" />

      <div className="relative z-10 w-full px-4 text-center">
        <p className="mx-auto mb-5 w-fit rounded-full border border-white/15 bg-black/45 px-4 py-1 text-xs tracking-[0.25em] text-white/70">
          PREMIUM CREATIVE ACADEMY
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl bg-gradient-to-b from-neutral-50 via-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
          ArtVerse Academy for ambitious creators
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-300 md:text-lg">
          Master sketching, digital art, UI UX, photography, and motion with an Aceternity-powered premium learning experience.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/courses">
            <Button borderRadius="1.75rem" className="border-white/30 bg-black/70 text-white">
              Explore Courses
            </Button>
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/85 transition hover:border-amber-100/50 hover:text-amber-100"
          >
            Contact Advisor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
