import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const cassannetPlus = localFont({
  src: "../fonts/cassannet-plus.woff2",
  weight: "400",
  variable: "--font-cassannet",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-heading-fallback",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ZiX AI Solutions & Studios | We Make Films Using AI",
  description:
    "ZiX AI Solutions & Studios — We produce films, short films, ad commercials, and websites using cutting-edge AI tools. Fast, cinematic, affordable.",
  openGraph: {
    title: "ZiX AI Solutions & Studios",
    description: "We make films, short films, ad commercials & websites using AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cassannetPlus.variable} ${spaceGrotesk.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ParticlesBackground />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
