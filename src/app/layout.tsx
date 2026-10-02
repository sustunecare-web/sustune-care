import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EmergencyFloat from "@/components/layout/EmergencyFloat";
import { CurrencyProvider } from "@/context/CurrencyContext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sustunecare.com"),
  title: "Sustune Care | Institutional Property & Parental Care for Global NRIs",
  description:
    "Care for your property. Care for your parents. Peace of mind for you. Institutional-grade property stewardship (Aegis) and compassionate elder healthcare concierge (Sparsh) across Bengaluru, Hyderabad, and Delhi NCR.",
  keywords: [
    "NRI Property Management India",
    "Elder Care for NRIs",
    "Parental Healthcare Concierge",
    "Property Stewardship Bengaluru Hyderabad Delhi NCR",
    "Sustune Care",
    "Aegis Property",
    "Sparsh Elder Care",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Sustune Care | Dual-Shield Care for NRIs",
    description:
      "Bridging the distance with institutional property stewardship and empathetic parental healthcare concierge.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Sustune Care Emblem",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#1E293B] antialiased selection:bg-[#D4AF37]/30 selection:text-[#0B1B3D]">
        <CurrencyProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <EmergencyFloat />
        </CurrencyProvider>
      </body>
    </html>
  );
}
