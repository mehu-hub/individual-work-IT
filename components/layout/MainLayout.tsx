"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-full flex-col">
      {/* Sticky top navbar */}
      <Navbar onMenuToggle={() => setSidebarOpen((o) => !o)} />

      {/* Below navbar: sidebar + main content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main content area */}
        <main
          id="main-content"
          className="flex-1 overflow-y-auto bg-slate-100 p-6"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
