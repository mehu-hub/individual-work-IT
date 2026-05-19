"use client";

import { useState } from "react";
import Link from "next/link";

// Each section has a title and a list of links
const sections = [
  {
    title: "Trains",
    items: ["All Trains", "Train Schedule", "Departure Schedule", "Train Search"],
  },
  {
    title: "Stations",
    items: ["All Stations", "Arrival Times", "Departures", "Station Search"],
  },
  {
    title: "Routes",
    items: ["Train Routes", "Arrival Destinations", "Route Search"],
  },
  {
    title: "Timetables",
    items: ["Daily Schedule", "Platform Schedule", "Upcoming Departures"],
  },
  {
    title: "Information",
    items: ["Platforms", "Carriages and Seats", "Travel Information"],
  },
  {
    title: "Administration",
    items: ["Manage Trains", "Manage Stations", "Manage Schedules"],
  },
];

export default function Sidebar() {
  // Track which sections are open (all closed by default)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  function toggleSection(title: string) {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  }

  return (
    <aside
      style={{
        width: "210px",
        minWidth: "210px",
        backgroundColor: "#1E3A5F",
        padding: "8px 0",
      }}
    >
      {/* Home link (no dropdown) */}
      <Link
        href="/"
        style={{
          display: "block",
          padding: "10px 16px",
          color: "#e2e8f0",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>

      {/* Collapsible sections */}
      {sections.map((section) => {
        const isOpen = openSections[section.title] ?? false;

        return (
          <div key={section.title}>
            {/* Section toggle button */}
            <button
              onClick={() => toggleSection(section.title)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "10px 16px",
                backgroundColor: "transparent",
                border: "none",
                color: "#93c5fd",
                fontSize: "13px",
                fontWeight: "bold",
                textAlign: "left",
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {section.title}
              {/* Arrow icon */}
              <span style={{ fontSize: "10px" }}>{isOpen ? "▲" : "▼"}</span>
            </button>

            {/* Dropdown items */}
            {isOpen && (
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        display: "block",
                        padding: "7px 16px 7px 28px",
                        color: "#e2e8f0",
                        textDecoration: "none",
                        fontSize: "13px",
                        borderLeft: "2px solid #2563EB",
                        marginLeft: "16px",
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </aside>
  );
}
