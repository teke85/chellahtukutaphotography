import type { Metadata } from "next";
import {
  Lora,
  Inter,
  Playfair_Display,
  Ibarra_Real_Nova,
  Aboreto,
  Jost,
  Cormorant_Garamond,
} from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-aboreto",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const ibarra = Ibarra_Real_Nova({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibarra",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ChellaTukuta  - ChellahTukuta Photography Studio",
  description: "We.",
  openGraph: {
    type: "website",
    locale: "en_ZM",
    url: "",
    siteName: "ChellahTukututa Studio",
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
        className={`${playfair.variable} ${jost.variable} ${cormorant.variable} ${aboreto.variable} ${ibarra.variable} ${inter.variable} ${lora.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
