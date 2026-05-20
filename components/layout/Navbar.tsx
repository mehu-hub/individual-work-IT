"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Menu, TrainFront, Search, Settings, LogOut, User, X, LogIn, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onMenuToggle: () => void;
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  // Simulated auth state – replace with real auth context later
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <TooltipProvider delayDuration={300}>
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between gap-3 bg-[#1E3A5F] px-4 shadow-lg md:px-6">

        {/* ── Left: Hamburger (mobile) + Logo ── */}
        <div className="flex items-center gap-2 shrink-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                id="sidebar-toggle"
                variant="ghost"
                size="icon"
                onClick={onMenuToggle}
                className="text-white hover:bg-white/10 hover:text-white md:hidden"
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Toggle menu</TooltipContent>
          </Tooltip>

          <Link
            href="/"
            className="flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563EB] shadow-md shadow-blue-900/40">
              <TrainFront className="h-5 w-5 text-white" />
            </div>
            <span className="hidden text-base font-bold tracking-tight sm:block leading-tight">
              Vilnius{" "}
              <span className="text-[#60a5fa]">Train System</span>
            </span>
          </Link>
        </div>

        {/* ── Centre: Search bar (desktop) ── */}
        <div className="hidden flex-1 max-w-sm md:flex items-center">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
            <Input
              id="navbar-search"
              type="search"
              placeholder="Search trains, stations, routes…"
              className="w-full rounded-lg border-white/20 bg-white/10 pl-9 pr-4 text-sm text-white placeholder:text-white/40 focus-visible:bg-white/15 focus-visible:ring-[#2563EB] focus-visible:ring-2 focus-visible:border-transparent transition-all"
            />
          </div>
        </div>

        {/* ── Right: Auth buttons or User menu ── */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Mobile search toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white md:hidden"
                onClick={() => setSearchOpen((o) => !o)}
                aria-label="Toggle search"
              >
                {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Search</TooltipContent>
          </Tooltip>

          {isLoggedIn ? (
            /* ── Logged-in: Avatar dropdown ── */
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  id="user-menu-btn"
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  aria-label="User menu"
                >
                  <Avatar className="h-8 w-8 border-2 border-white/30">
                    <AvatarFallback className="bg-[#2563EB] text-white text-xs font-bold">
                      AD
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52 mt-1">
                <DropdownMenuLabel className="flex flex-col gap-0.5">
                  <span className="font-semibold text-sm">Admin User</span>
                  <span className="text-xs text-muted-foreground font-normal">admin@vilniusrail.lt</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem id="profile-menu-item" className="cursor-pointer gap-2">
                  <User className="h-4 w-4" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem id="settings-menu-item" className="cursor-pointer gap-2">
                  <Settings className="h-4 w-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  id="logout-menu-item"
                  className="cursor-pointer gap-2 text-red-600 focus:text-red-600"
                  onClick={() => setIsLoggedIn(false)}
                >
                  <LogOut className="h-4 w-4" /> Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            /* ── Logged-out: Login + Sign Up buttons ── */
            <>
              <Link
                id="navbar-login-btn"
                href="/login"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "hidden sm:inline-flex gap-1.5 text-white hover:bg-white/10 hover:text-white border border-white/20"
                )}
              >
                <LogIn className="h-4 w-4" />
                Log In
              </Link>
              <Link
                id="navbar-signup-btn"
                href="/signup"
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "gap-1.5 bg-[#2563EB] hover:bg-blue-500 text-white shadow-md shadow-blue-900/30"
                )}
              >
                <UserPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Up</span>
                <span className="sm:hidden">Join</span>
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Mobile search bar (slides in below navbar) */}
      {searchOpen && (
        <div className="sticky top-16 z-40 flex items-center gap-2 bg-[#1a3355] px-4 py-2.5 md:hidden shadow-md">
          <Search className="h-4 w-4 text-white/40 shrink-0" />
          <Input
            id="mobile-search"
            type="search"
            autoFocus
            placeholder="Search trains, stations, routes…"
            className="flex-1 border-white/20 bg-white/10 text-sm text-white placeholder:text-white/40 focus-visible:ring-[#2563EB]"
          />
        </div>
      )}
    </TooltipProvider>
  );
}
