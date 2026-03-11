import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/95">
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <UpcomingWebinars />
      <Instructors />
    </main>
  );
}
