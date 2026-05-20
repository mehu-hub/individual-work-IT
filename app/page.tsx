"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  TrainFront,
  MapPin,
  Route,
  Clock,
  Search,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Timer,
} from "lucide-react";

/* ─── Static sample data ─── */
const stats = [
  { id: "stat-trains", label: "Active Trains", value: "142", icon: TrainFront, color: "text-blue-500", bg: "bg-blue-50" },
  { id: "stat-stations", label: "Stations", value: "38", icon: MapPin, color: "text-emerald-500", bg: "bg-emerald-50" },
  { id: "stat-routes", label: "Routes", value: "24", icon: Route, color: "text-violet-500", bg: "bg-violet-50" },
  { id: "stat-ontime", label: "On-Time Rate", value: "91%", icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
];

const departures = [
  { id: "dep-1", train: "IC 501", destination: "Kaunas", platform: "3", departs: "11:15", status: "on-time" },
  { id: "dep-2", train: "R 238", destination: "Šiauliai", platform: "1", departs: "11:30", status: "delayed" },
  { id: "dep-3", train: "IC 703", destination: "Klaipėda", platform: "5", departs: "11:45", status: "on-time" },
  { id: "dep-4", train: "R 112", destination: "Trakai", platform: "2", departs: "12:00", status: "on-time" },
  { id: "dep-5", train: "IC 805", destination: "Panevėžys", platform: "4", departs: "12:20", status: "boarding" },
];

const features = [
  {
    id: "feat-schedules",
    icon: Clock,
    title: "Live Schedules",
    description: "Up-to-date departure and arrival times updated in real time.",
    href: "/timetables/daily",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "feat-search",
    icon: Search,
    title: "Train Search",
    description: "Find trains by number, route, or station with advanced filters.",
    href: "/trains/search",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    id: "feat-platforms",
    icon: MapPin,
    title: "Platform Info",
    description: "Real-time platform assignments and gate status for every train.",
    href: "/information/platforms",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    id: "feat-routes",
    icon: Route,
    title: "Route Planner",
    description: "Browse all routes and find the best connection across Lithuania.",
    href: "/routes",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "on-time")
    return (
      <Badge className="gap-1 bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100">
        <CheckCircle2 className="h-3 w-3" /> On Time
      </Badge>
    );
  if (status === "delayed")
    return (
      <Badge className="gap-1 bg-red-100 text-red-700 border-red-200 hover:bg-red-100">
        <AlertCircle className="h-3 w-3" /> Delayed
      </Badge>
    );
  return (
    <Badge className="gap-1 bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100">
      <Timer className="h-3 w-3" /> Boarding
    </Badge>
  );
}

export default function HomePage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div className="font-sans">

      {/* ══ Hero ══ */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero_train.png"
          alt="LTG Link double-decker train at the station"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#050e24]/85 via-[#1e3a5f]/70 to-blue-700/40" />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300 backdrop-blur-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Live Service Updates
          </span>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5 drop-shadow-2xl">
            Welcome to the{" "}
            <span className="text-blue-400">
              Train Schedule System
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mx-auto mb-10 max-w-2xl drop-shadow-md">
            Real-time train schedules, platform information, and route details
            for Vilnius and across Lithuania — all in one place.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/timetables/daily"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 px-8 text-base rounded-xl font-bold bg-[#2563EB] hover:bg-blue-500 shadow-blue-800/40 shadow-lg transition-all hover:-translate-y-0.5"
              )}
            >
              View Schedules
            </Link>
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

      {/* ══ Stats Bar ══ */}
      <section className="bg-white border-b border-slate-100 shadow-sm">
        <div className="mx-auto max-w-6xl px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.id} id={s.id} className="flex items-center gap-3">
              <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", s.bg)}>
                <s.icon className={cn("h-5 w-5", s.color)} />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-800 leading-none">{s.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ Quick Search ══ */}
      <section className="bg-slate-50 py-12 px-6">
        <div className="mx-auto max-w-3xl">
          <Card className="shadow-md border-slate-200 overflow-hidden">
            <CardHeader className="bg-[#1E3A5F] pb-4 pt-5">
              <CardTitle className="text-white flex items-center gap-2 text-lg">
                <Search className="h-5 w-5 text-blue-300" />
                Quick Train Search
              </CardTitle>
              <CardDescription className="text-blue-200/70 text-sm">
                Find trains between any two stations in Lithuania
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-5 pb-6">
              <form
                id="quick-search-form"
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = `/trains/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
                }}
              >
                <Input
                  id="search-from"
                  placeholder="From station…"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="flex-1"
                />
                <Input
                  id="search-to"
                  placeholder="To station…"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="flex-1"
                />
                <Select>
                  <SelectTrigger id="search-date" className="sm:w-36">
                    <SelectValue placeholder="Today" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                  </SelectContent>
                </Select>
                <Link
                  href={`/trains/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`}
                  className={cn(
                    buttonVariants(),
                    "bg-[#2563EB] hover:bg-blue-600 px-5 gap-2 shrink-0"
                  )}
                >
                  <Search className="h-4 w-4" /> Search
                </Link>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ══ Live Departures ══ */}
      <section className="py-12 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A5F]">Upcoming Departures</h2>
              <p className="text-sm text-slate-500 mt-0.5">Vilnius Railway Station — next departures</p>
            </div>
            <Link
              href="/timetables/upcoming"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1.5 text-[#1E3A5F] border-[#1E3A5F]/30 hover:bg-[#1E3A5F] hover:text-white")}
            >
              View All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <Card className="shadow-sm border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-3 px-4 text-left font-semibold text-slate-600">Train</th>
                    <th className="py-3 px-4 text-left font-semibold text-slate-600">Destination</th>
                    <th className="py-3 px-4 text-left font-semibold text-slate-600">Platform</th>
                    <th className="py-3 px-4 text-left font-semibold text-slate-600">Departs</th>
                    <th className="py-3 px-4 text-left font-semibold text-slate-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {departures.map((d, i) => (
                    <tr
                      key={d.id}
                      id={d.id}
                      className={cn(
                        "transition-colors hover:bg-blue-50/50",
                        i < departures.length - 1 && "border-b border-slate-100"
                      )}
                    >
                      <td className="py-3 px-4 font-bold text-[#1E3A5F]">{d.train}</td>
                      <td className="py-3 px-4 text-slate-700">{d.destination}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1E3A5F] text-white text-xs font-bold">
                          {d.platform}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-slate-800">{d.departs}</td>
                      <td className="py-3 px-4">
                        <StatusBadge status={d.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <Separator />

      {/* ══ Feature Cards ══ */}
      <section className="py-14 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1E3A5F]">Everything You Need</h2>
            <p className="text-slate-500 mt-2 text-sm max-w-md mx-auto">
              All the tools to plan your journey across Lithuania's rail network.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <Link key={f.id} href={f.href} className="block group">
                <Card
                  id={f.id}
                  className="h-full border-slate-200 shadow-sm hover:shadow-md hover:border-[#2563EB]/30 transition-all duration-200 group-hover:-translate-y-0.5"
                >
                  <CardContent className="pt-6 pb-5 px-5">
                    <div className={cn("inline-flex h-11 w-11 items-center justify-center rounded-xl mb-4", f.bg)}>
                      <f.icon className={cn("h-5 w-5", f.color)} />
                    </div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-1.5">{f.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.description}</p>
                    <div className={cn("mt-4 flex items-center gap-1 text-xs font-semibold", f.color)}>
                      Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Footer ══ */}
      <footer className="bg-[#1E3A5F] text-white/60 py-6 px-6 text-center text-xs">
        <p>© {new Date().getFullYear()} Vilnius Railway Station — Train Schedule Management System</p>
      </footer>
    </div>
  );
}
