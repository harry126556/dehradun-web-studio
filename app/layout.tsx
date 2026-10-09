import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Peak Web Studio | Websites for Dehradun Businesses",
  description: "Modern, mobile-friendly websites for barbers, salons, cafes, gyms and growing local businesses in Dehradun and Uttarakhand.",
  keywords: ["website designer Dehradun", "salon website Dehradun", "small business websites Uttarakhand"]
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
