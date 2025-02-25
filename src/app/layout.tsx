import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobNavbar from "@/components/MobNavbar";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hidden Desires | Premium Products & Experiences",
  description: "Your premier destination for unique and fulfilling experiences. Explore our premium collection to satisfy your hidden desires.",
  keywords: ["premium products", "hidden desires", "unique experiences", "quality products"],
  authors: [{ name: "Hidden Desires Team" }],
  
  openGraph: {
    title: "Hidden Desires | Premium Products & Experiences",
    description: "Your premier destination for unique and fulfilling experiences.",
    
    type: "website",
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderTop />
        <HeaderMain />
        <MobNavbar />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
