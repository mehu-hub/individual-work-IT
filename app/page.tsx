"use client";

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* ── Hero Section ── */}
      <section className="relative w-full min-h-[88vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero_train.png"
          alt="LTG Link double-decker train at the station"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1432]/80 via-[#1e3a5f]/70 to-blue-600/40" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          {/* Heading */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5 drop-shadow-2xl">
            Welcome to the{" "}
            <span className="text-blue-500 bg-clip-text">
              Train Schedule System
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mx-auto mb-10 max-w-2xl drop-shadow-md">
            Real-time train schedules, platform information, and route details
            for Vilnius and across Lithuania — all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Primary button */}
            <Link 
              href="/timetables/daily"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 px-8 text-base rounded-xl font-bold shadow-blue-600/50 hover:shadow-blue-600/70 shadow-lg transition-all hover:-translate-y-0.5"
              )}
            >
              View Schedules
            </Link>

            {/* Secondary button */}
            <Link 
              href="/trains/search"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 px-8 text-base rounded-xl font-bold bg-white/10 text-white border-white/30 backdrop-blur-md hover:bg-white/20 hover:text-white transition-all hover:-translate-y-0.5"
              )}
            >
              Search Trains
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
