"use client";

import { StickyScroll } from "./ui/sticky-scroll-reveal";
import artVerseContent from "@/data/artVerseContent";

const WhyChooseUs = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8 text-center">
        <h2 className="text-xs tracking-[0.32em] text-amber-100/80">WHY ARTVERSE</h2>
        <p className="mt-3 text-3xl font-bold text-white sm:text-5xl">Mentorship-first, portfolio-driven learning</p>
      </div>
      <StickyScroll content={artVerseContent} contentClassName="shadow-[0_25px_70px_rgba(0,0,0,0.45)]" />
    </section>
  );
};

export default WhyChooseUs;

