"use client";

import { useState } from "react";
import Link from "next/link";

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
  const [hoveredSection, setHoveredSection] = useState<string | null>("Trains");
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);

  function handleMouseEnter(title: string) {
    const timer = setTimeout(() => {
      setHoveredSection(title);
    }, 300); // hover delay time

    setHoverTimer(timer);
  }

  function handleMouseLeave() {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }

    setHoveredSection(null);
  }

  return (
    <aside
      style={{
        width: "210px",
        minWidth: "210px",
        minHeight: "100vh",
        backgroundColor: "#1E3A5F",
        padding: "8px 0",
      }}
    >
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

      {sections.map((section) => {
        const isOpen = hoveredSection === section.title;

        return (
          <div
            key={section.title}
            onMouseEnter={() => handleMouseEnter(section.title)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "10px 16px",
                color: "#93c5fd",
                fontSize: "13px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                cursor: "pointer",
              }}
            >
              {section.title}
              <span style={{ fontSize: "10px" }}>
                {isOpen ? "▲" : "▼"}
              </span>
            </div>

            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                maxHeight: isOpen ? "200px" : "0px",
                overflow: "hidden",
                opacity: isOpen ? 1 : 0,
                transition: "max-height 0.4s ease, opacity 0.3s ease",
              }}
            >
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
          </div>
        );
      })}
    </aside>
  );
}