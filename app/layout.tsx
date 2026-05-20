import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Vilnius Train Schedule System",
  description:
    "Real-time train schedules, platform information, and route details for Vilnius Railway Station and all of Lithuania.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="m-0 bg-background text-foreground antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
