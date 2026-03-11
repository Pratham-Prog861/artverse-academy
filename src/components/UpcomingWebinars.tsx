"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import featuredWebinars from "@/data/webinars";

const UpcomingWebinars = () => {
  return (
    <section className="bg-zinc-950 p-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-xs font-semibold tracking-[0.32em] text-amber-100/80">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Live sessions with top practitioners</p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/courses",
            }))}
          />
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/courses"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-amber-100/50 hover:text-amber-100"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingWebinars;
