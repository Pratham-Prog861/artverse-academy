"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import artVerseTestimonials from "@/data/testimonials";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  return (
    <div className="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={artVerseTestimonials}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
