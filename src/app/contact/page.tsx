"use client";

import type { FormEvent } from "react";
import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-12 pt-36">
      <BackgroundBeams className="absolute inset-0 z-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-2xl border border-white/15 bg-black/55 p-8 backdrop-blur-xl">
          <h1 className="text-3xl font-bold text-white md:text-6xl">Contact Us</h1>
          <p className="mt-4 text-sm leading-7 text-neutral-300">
            We are here to help with course selection, mentorship planning, and portfolio strategy.
          </p>

          <div className="mt-8 space-y-3 text-sm text-white/80">
            <p className="rounded-xl border border-white/12 bg-zinc-950/80 px-4 py-3">hello@artverse.in</p>
            <p className="rounded-xl border border-white/12 bg-zinc-950/80 px-4 py-3">+91 98765 43210</p>
            <p className="rounded-xl border border-white/12 bg-zinc-950/80 px-4 py-3">Bandra West, Mumbai</p>
          </div>
        </section>

        <section className="rounded-2xl border border-white/15 bg-black/55 p-8 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full rounded-xl border border-neutral-700 bg-zinc-950 p-4 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-300/50"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your goals"
              className="h-40 w-full rounded-xl border border-neutral-700 bg-zinc-950 p-4 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-300/50"
              required
            />
            <Button as="button" type="submit" borderRadius="1rem" containerClassName="w-full" className="w-full border-white/20 bg-black/80 text-white">
              Send Message
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
