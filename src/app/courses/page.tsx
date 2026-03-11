"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/art_courses.json";
import { Spotlight } from "@/components/ui/spotlight";

const CoursesPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-4 py-12 pt-36 sm:px-8">
      <Spotlight direction="left" className="-top-40 left-0 md:left-40 md:-top-20" fill="#fef3c7" />
      <Spotlight direction="right" className="-top-40 right-0 md:right-40 md:-top-20" fill="#f59e0b" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <h1 className="text-center text-4xl font-bold text-white md:text-7xl">All Courses ({courseData.courses.length})</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-white/70 sm:text-base">
          Explore our premium curriculum across sketching, digital design, motion, and photography.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {courseData.courses.map((course) => (
            <CardContainer key={course.id} className="inter-var" containerClassName="py-8">
              <CardBody className="group/card relative h-auto w-[20.5rem] rounded-2xl border border-white/20 bg-zinc-950 p-6 dark:hover:shadow-2xl dark:hover:shadow-amber-400/15">
                <CardItem translateZ="40" className="text-xl font-semibold text-white">
                  {course.title}
                </CardItem>

                <CardItem as="p" translateZ="52" className="mt-2 max-w-sm text-sm leading-7 text-neutral-300">
                  {course.description}
                </CardItem>

                <CardItem translateZ="90" className="mt-4 w-full">
                  <Image
                    src={course.image}
                    height={1000}
                    width={1000}
                    className="h-52 w-full rounded-xl object-cover shadow-lg group-hover/card:shadow-amber-200/10"
                    alt={course.title}
                  />
                </CardItem>

                <div className="mt-6 flex items-center justify-between">
                  <CardItem translateZ={24} as="span" className="text-xs font-semibold tracking-[0.15em] text-amber-100/85">
                    ${course.price}
                  </CardItem>
                  <CardItem
                    translateZ={24}
                    as="button"
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-amber-100/45 hover:text-amber-100"
                  >
                    Enroll
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CoursesPage;
