"use client";
import {
  Geist,
  Geist_Mono,
  Dancing_Script,
  Doto,
  Catamaran,
  Cormorant,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

const catamaran = Catamaran({
  variable: "--font-catamaran",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="8NoeHKk9ic2jlu3Ge_ndjPUUAnzFtfPvNoFrlnEvKvM" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${doto.variable} ${catamaran.variable} ${cormorant.variable} antialiased`}
      >
        <Header />
        <FloatingWhatsApp
          accountName="SHALA AutoRepair"
          phoneNumber="+19292199089"
          darkMode={true}
          allowEsc={true}
          avatar="../images/whatsapp.png"
          chatMessage="Welcome to SHALA AutoBody Repair. How can I help you?"
        />
        {children}
        {pathname !== "/contact" && <Footer />}
      </body>
    </html>
  );
}
