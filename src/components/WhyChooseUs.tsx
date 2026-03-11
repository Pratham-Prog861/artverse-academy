"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import artVerseContent from '@/data/artVerseContent';

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={artVerseContent} />
    </div>
  );
};

export default WhyChooseUs;
