"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/ui/BrandLogo";
import { useCurrency, CURRENCIES, CurrencyCode } from "@/context/CurrencyContext";
import {
  ShieldCheck,
  HeartHandshake,
  LayoutDashboard,
  Calculator,
  PhoneCall,
  Menu,
  X,
  ChevronDown,
  Globe,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { currency, setCurrency, info } = useCurrency();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Aegis Property",
      href: "/aegis",
      badge: "Real Estate",
      badgeColor: "bg-[#D4AF37]/15 text-[#947416] border border-[#D4AF37]/40",
      icon: ShieldCheck,
    },
    {
      name: "Sparsh Care",
      href: "/sparsh",
      badge: "Parental Health",
      badgeColor: "bg-[#0F5132]/10 text-[#0F5132] border border-[#0F5132]/30",
      icon: HeartHandshake,
    },
    {
      name: "Client Portal",
      href: "/portal-preview",
      badge: "Live Demo",
      badgeColor: "bg-blue-100 text-blue-800 border border-blue-200",
      icon: LayoutDashboard,
    },
    {
      name: "Get Started",
      href: "/contact",
      icon: Calculator,
    },
  ];

  return (
    <>
      {/* Top Advisory Ticker for NRIs */}
      <div className="bg-[#0B1B3D] text-white text-xs py-1.5 px-4 border-b border-[#D4AF37]/20 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline text-slate-300">
              Active Concierge Desks in:
            </span>
            <span className="text-[#F3DC87] font-medium tracking-wide">
              Bengaluru &bull; Hyderabad &bull; Delhi NCR
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="tel:+918007878863"
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden md:inline text-[11px] uppercase tracking-wider text-slate-400">
                24/7 NRI Hotline:
              </span>
              <span className="font-semibold text-white text-xs">+91 800-SUSTUNE</span>
            </a>

            {/* Currency Selector Pill */}
            <div className="relative">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-1.5 bg-[#132752] hover:bg-[#1C366E] border border-[#D4AF37]/30 text-white rounded-full px-2.5 py-0.5 text-xs transition-colors"
                aria-expanded={currencyOpen}
                aria-label="Select currency"
              >
                <span>{info.flag}</span>
                <span className="font-semibold">{currency}</span>
                <ChevronDown className="w-3 h-3 text-[#D4AF37]" />
              </button>

              {currencyOpen && (
                <div
                  className="absolute right-0 mt-1.5 w-52 bg-[#0B1B3D] border border-[#D4AF37]/40 rounded-xl shadow-2xl py-1 z-50 overflow-hidden"
                  onMouseLeave={() => setCurrencyOpen(false)}
                >
                  <div className="px-3 py-1.5 border-b border-white/10 text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    Select Diaspora Currency
                  </div>
                  {(Object.keys(CURRENCIES) as CurrencyCode[]).map((cCode) => {
                    const c = CURRENCIES[cCode];
                    const isActive = currency === cCode;
                    return (
                      <button
                        key={cCode}
                        onClick={() => {
                          setCurrency(cCode);
                          setCurrencyOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                          isActive
                            ? "bg-[#D4AF37]/20 text-[#F3DC87] font-semibold"
                            : "text-slate-200 hover:bg-white/10"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{c.flag}</span>
                          <span>{c.code} ({c.symbol.trim()})</span>
                        </span>
                        {isActive && <span className="text-[#D4AF37] text-xs">✓</span>}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-[#0B1B3D]/10"
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <BrandLogo variant="dark" size="md" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#0B1B3D] bg-slate-100 font-semibold shadow-xs"
                      : "text-slate-700 hover:text-[#0B1B3D] hover:bg-slate-50"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-[#D4AF37]" : "text-slate-400 group-hover:text-[#D4AF37]"
                    }`}
                  />
                  <span>{link.name}</span>
                  {link.badge && (
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${link.badgeColor}`}
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/portal-preview"
              className="text-xs font-semibold text-[#0B1B3D] hover:text-[#0F5132] px-3 py-2 rounded-lg border border-slate-200 hover:border-[#D4AF37]/50 transition-all flex items-center gap-1.5"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Portal Login</span>
            </Link>

            <Link
              href="/contact"
              className="bg-[#0B1B3D] hover:bg-[#122856] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md border border-[#D4AF37]/50 transition-all flex items-center gap-2 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
              <span>Book Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0B1B3D] hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5 mb-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm ${
                      isActive
                        ? "bg-slate-100 text-[#0B1B3D] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-[#D4AF37]" />
                      <span>{link.name}</span>
                    </div>
                    {link.badge && (
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${link.badgeColor}`}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#0B1B3D] text-white text-sm font-semibold py-3 rounded-lg border border-[#D4AF37]/50 shadow-sm"
              >
                Schedule Free NRI Assessment
              </Link>
              <a
                href="https://wa.me/918007878863?text=Hello%20Sustune%20Care%20Team%2C%20I%20am%20an%20NRI%20interested%20in%20learning%20more."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#0F5132] text-white text-sm font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <span>WhatsApp Care Desk</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
