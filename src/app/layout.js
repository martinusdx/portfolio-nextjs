import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Martinus Suryadi | Backend & Fullstack Developer",

  description:
    "Backend & Fullstack Developer specialized in PostgreSQL, APIs, Qt C++, Supabase, and modern web applications.",

  keywords: [
    "Backend Developer",
    "Fullstack Developer",
    "Next.js",
    "PostgreSQL",
    "Qt C++",
    "Supabase",
    "React",
    "Web Developer",
  ],

  authors: [
    {
      name: "Martinus Suryadi",
    },
  ],

  creator: "Martinus Suryadi",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
