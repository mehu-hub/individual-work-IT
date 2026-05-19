export interface NavItem {
  label: string;
  href: string;
}

export interface NavSection {
  id: string;
  label: string;
  icon: string; // SVG path data
  items: NavItem[];
}

// SVG path data for each section icon
const ICONS = {
  home: "M10.707 2.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 0 0 1.414 1.414L4 10.414V17a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6.586l.293.293a1 1 0 0 0 1.414-1.414l-7-7z",
  trains:
    "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm2 0v8h12V4H6Zm-1 13 1.5 2h11l1.5-2H5ZM9 6h6v2H9V6Z",
  stations:
    "M8.111 16.404a5.5 5.5 0 0 1 7.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
  routes:
    "M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0zM15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  timetables: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z",
  information:
    "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
  administration:
    "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
};

export const navSections: NavSection[] = [
  {
    id: "home",
    label: "Home",
    icon: ICONS.home,
    items: [{ label: "Home", href: "/" }],
  },
  {
    id: "trains",
    label: "Trains",
    icon: ICONS.trains,
    items: [
      { label: "All Trains", href: "/trains" },
      { label: "Train Schedule", href: "/trains/schedule" },
      { label: "Departure Schedule", href: "/trains/departures" },
      { label: "Train Search", href: "/trains/search" },
    ],
  },
  {
    id: "stations",
    label: "Stations",
    icon: ICONS.stations,
    items: [
      { label: "All Stations", href: "/stations" },
      { label: "Arrival Times", href: "/stations/arrivals" },
      { label: "Departures", href: "/stations/departures" },
      { label: "Station Search", href: "/stations/search" },
    ],
  },
  {
    id: "routes",
    label: "Routes",
    icon: ICONS.routes,
    items: [
      { label: "Train Routes", href: "/routes" },
      { label: "Arrival Destinations", href: "/routes/destinations" },
      { label: "Route Search", href: "/routes/search" },
    ],
  },
  {
    id: "timetables",
    label: "Timetables",
    icon: ICONS.timetables,
    items: [
      { label: "Daily Schedule", href: "/timetables/daily" },
      { label: "Platform Schedule", href: "/timetables/platform" },
      { label: "Upcoming Departures", href: "/timetables/upcoming" },
    ],
  },
  {
    id: "information",
    label: "Information",
    icon: ICONS.information,
    items: [
      { label: "Platforms", href: "/information/platforms" },
      { label: "Carriages and Seats", href: "/information/carriages" },
      { label: "Travel Information", href: "/information/travel" },
    ],
  },
  {
    id: "administration",
    label: "Administration",
    icon: ICONS.administration,
    items: [
      { label: "Manage Trains", href: "/admin/trains" },
      { label: "Manage Stations", href: "/admin/stations" },
      { label: "Manage Schedules", href: "/admin/schedules" },
    ],
  },
];
