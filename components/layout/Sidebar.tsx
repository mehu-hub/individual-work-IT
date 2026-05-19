"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navSections } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { X, ChevronDown } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  // Track which sections are expanded; default all open
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    () =>
      Object.fromEntries(navSections.map((s) => [s.id, true])) as Record<
        string,
        boolean
      >
  );

  function toggleSection(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function isActiveLink(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar panel */}
      <aside
        id="sidebar"
        className={[
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-[#1E3A5F] transition-transform duration-300",
          "md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:translate-x-0 md:z-auto",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Close button — mobile only */}
        <div className="flex items-center justify-between px-4 py-3 md:hidden border-b border-white/10">
          <span className="text-sm font-semibold text-white/70 uppercase tracking-widest">
            Menu
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/10 hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Nav sections */}
        <nav
          className="flex-1 overflow-y-auto py-3 px-2 space-y-1"
          aria-label="Primary navigation"
        >
          {navSections.map((section) => (
            <div key={section.id}>
              {/* Section header — if only one item (Home), render as direct link */}
              {section.items.length === 1 && section.items[0] ? (
                <Link
                  href={section.items[0].href}
                  onClick={onClose}
                  className={[
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
                    isActiveLink(section.items[0].href)
                      ? "bg-[#2563EB] text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white",
                  ].join(" ")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 shrink-0"
                    aria-hidden="true"
                  >
                    <path d={section.icon} />
                  </svg>
                  {section.label}
                </Link>
              ) : (
                <>
                  {/* Collapsible section toggle */}
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                    aria-expanded={expanded[section.id]}
                    aria-controls={`section-${section.id}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      className="h-5 w-5 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={section.icon}
                      />
                    </svg>
                    <span className="flex-1 text-left">{section.label}</span>
                    {/* Chevron */}
                    <ChevronDown
                      className={[
                        "h-4 w-4 shrink-0 transition-transform duration-200",
                        expanded[section.id] ? "rotate-180" : "",
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Sub-items */}
                  <div
                    id={`section-${section.id}`}
                    className={[
                      "overflow-hidden transition-all duration-200",
                      expanded[section.id]
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0",
                    ].join(" ")}
                  >
                    <ul className="mt-0.5 space-y-0.5 pl-10">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className={[
                              "block rounded-md px-3 py-2 text-sm transition-colors",
                              isActiveLink(item.href)
                                ? "bg-[#2563EB] text-white font-medium"
                                : "text-white/65 hover:bg-white/10 hover:text-white",
                            ].join(" ")}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>

        {/* Footer branding */}
        <div className="border-t border-white/10 px-4 py-3">
          <p className="text-xs text-white/40 text-center">
            © {new Date().getFullYear()} Vilnius Railway
          </p>
        </div>
      </aside>
    </>
  );
}
