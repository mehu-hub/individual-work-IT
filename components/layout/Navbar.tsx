"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, TrainFront } from "lucide-react";

interface NavbarProps {
  onMenuToggle: () => void;
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-[#1E3A5F] px-4 shadow-lg md:px-6">
      {/* Left: logo + title */}
      <Link
        href="/"
        className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
      >
        {/* Train icon */}
        <TrainFront className="h-8 w-8 text-[#2563EB] shrink-0" />
        <span className="text-lg font-bold tracking-tight leading-tight">
          Vilnius Train{" "}
          <span className="text-[#2563EB]">Schedule System</span>
        </span>
      </Link>

      {/* Right: hamburger (mobile only) */}
      <Button
        id="sidebar-toggle"
        variant="ghost"
        size="icon"
        onClick={onMenuToggle}
        className="text-white hover:bg-[#264d7a] hover:text-white md:hidden"
        aria-label="Toggle navigation menu"
      >
        <Menu className="h-6 w-6" />
      </Button>
    </header>
  );
}
