import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./Sidebar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Vilnius Train Schedule System",
  description: "Train schedule information for Vilnius Railway Station.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5" }}>

        {/* Top navbar */}
        <header style={{ backgroundColor: "#006EFF", padding: "12px 24px", display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Favicon icon */}
          <img
            src="/favicon.ico"
            alt="Vilnius Train System icon"
            style={{ width: "24px", height: "24px" }}
          />
          <h1 style={{ color: "white", margin: 0, fontSize: "20px" }}>
            Vilnius Train Schedule System
          </h1>
        </header>

        {/* Sidebar + content */}
        <div style={{ display: "flex", minHeight: "calc(100vh - 48px)" }}>

          <Sidebar />

          <main style={{ flex: 1, padding: "24px" }}>
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
