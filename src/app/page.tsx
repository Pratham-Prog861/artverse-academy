import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen dark bg-black/96 bg-grid-white/2">
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  )
}
