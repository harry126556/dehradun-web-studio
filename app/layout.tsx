import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LocalLaunch — Websites for Dehradun Businesses",
  description: "Professional, mobile-friendly websites for tuition centres, grocery stores, stationery shops and growing local businesses in Dehradun.",
  keywords: ["website design Dehradun", "tuition website", "small business website", "website developer Dehradun"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
