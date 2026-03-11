"use client";

import courseData from "@/data/art_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const tones = ["amber", "violet", "emerald"] as const;

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <section className="bg-black/85 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-xs font-semibold tracking-[0.32em] text-amber-100/80">FEATURED COURSES</h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Premium pathways for modern artists</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course: Course, index) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient
                animate={false}
                tone={tones[index % tones.length]}
                containerClassName="w-full"
                className="h-full rounded-[22px] bg-zinc-950 p-0"
              >
                <div className="flex h-full flex-col p-6 text-left">
                  <p className="text-xs uppercase tracking-[0.18em] text-amber-100/75">{course.instructor}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{course.title}</p>
                  <p className="mt-3 grow text-sm leading-7 text-neutral-300">{course.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">${course.price}</span>
                    <Link href="/courses" className="text-sm text-amber-200 transition hover:text-amber-100">
                      View Course
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
