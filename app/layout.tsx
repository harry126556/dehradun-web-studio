import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paper & Pine — Stationery, Gifts & Good Ideas | Dehradun",
  description: "Discover thoughtful stationery, notebooks, pens, planners, art supplies and gift-worthy finds. Message Paper & Pine in Dehradun to check availability and order.",
  keywords: ["stationery shop Dehradun", "notebooks", "pens and markers", "art supplies", "school stationery", "office supplies"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
