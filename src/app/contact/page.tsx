"use client";

import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">


      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="max-w-2xl mx-auto px-6 relative z-10">

        <h1 className="text-3xl md:text-6xl text-center font-bold mb-6 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full rounded-lg border border-neutral-800 bg-neutral-950 p-4 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="w-full rounded-lg border border-neutral-800 bg-neutral-950 p-4 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="mx-auto block px-8 py-3 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
