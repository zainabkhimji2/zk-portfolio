import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StarCanvas from "@/app/components/main/starbg"
import Navbar from "./components/main/Navbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "Created By Zainab Khimji",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 overflow-y-scroll overflow-x-hidden`}
      >
        <StarCanvas/>
        <Navbar/>
        {children}
     
       
      </body>
    </html>
  );
}
