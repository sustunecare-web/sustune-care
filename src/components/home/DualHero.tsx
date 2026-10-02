"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Building2,
  Activity,
  CheckCircle,
  PhoneCall,
  Clock,
  Compass,
} from "lucide-react";

export type HeroMode = "combined" | "aegis" | "sparsh";

export default function DualHero() {
  const [activeMode, setActiveMode] = useState<HeroMode>("combined");

  return (
    <section className="relative overflow-hidden bg-[#0B1B3D] text-white pt-12 pb-24 md:pt-20 md:pb-32 transition-colors duration-700">
      {/* Dynamic Background Gradients */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none transition-all duration-700 ${
          activeMode === "aegis"
            ? "bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.18),transparent_65%)]"
            : activeMode === "sparsh"
            ? "bg-[radial-gradient(ellipse_at_top,_rgba(15,81,50,0.3),transparent_65%)]"
            : "bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.14),rgba(15,81,50,0.16),transparent_70%)]"
        }`}
      />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Institutional Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/40 backdrop-blur-md text-xs font-medium text-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[#F3DC87] font-semibold tracking-wide uppercase text-[11px]">
              Institutional-Grade Concierge
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">USA &bull; UK &bull; UAE &bull; Australia</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Care for your property. <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Care for your parents.</span> <br />
            <span className="text-slate-200">Peace of mind for you.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminating the <strong className="text-white font-semibold">Anxiety of Distance</strong> for non-resident Indians.
            A dual-shield framework combining high-yield real estate stewardship with clinical, compassionate elder healthcare back home.
          </p>
        </div>

        {/* Interactive Hero Mode Switcher */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#060e20] border border-white/15 shadow-2xl backdrop-blur-lg">
            <button
              onClick={() => setActiveMode("combined")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeMode === "combined"
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#B79224] text-[#0B1B3D] shadow-lg"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Dual-Shield (Both)</span>
            </button>

            <button
              onClick={() => setActiveMode("aegis")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeMode === "aegis"
                  ? "bg-[#132752] text-[#F3DC87] border border-[#D4AF37]/50 shadow-md"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Aegis (Property)</span>
            </button>

            <button
              onClick={() => setActiveMode("sparsh")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeMode === "sparsh"
                  ? "bg-[#0F5132] text-white border border-[#2CD997]/50 shadow-md"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              <span>Sparsh (Parental Care)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Mode Card Display */}
        <div className="mt-10 max-w-5xl mx-auto">
          {activeMode === "combined" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in zoom-in-95 duration-300">
              {/* Aegis Half */}
              <div className="bg-gradient-to-b from-[#132752]/70 to-[#0B1B3D] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 relative group hover:border-[#D4AF37] transition-all shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#D4AF37]/20 text-[#F3DC87] border border-[#D4AF37]/40">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#F3DC87] uppercase tracking-wider">
                        Real Estate Shield
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">Aegis Stewardship</h3>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#D4AF37]/15 text-[#F3DC87] font-semibold border border-[#D4AF37]/30">
                    High Yield
                  </span>
                </div>

                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Total protection for your premier residential & commercial assets in Hyderabad, Bengaluru & Delhi NCR.
                </p>

                <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Corporate tenant scouting & police verification</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Rent escrow auto-payout with TDS Form 15CA/CB</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Quarterly 360° digital inspection reports with HD photos</span>
                  </li>
                </ul>

                <Link
                  href="/aegis"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B1B3D] text-white font-semibold text-xs sm:text-sm border border-white/20 hover:border-transparent transition-all group/btn"
                >
                  <span>Explore Aegis Property Shield</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Sparsh Half */}
              <div className="bg-gradient-to-b from-[#0F5132]/60 to-[#0B1B3D] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 relative group hover:border-emerald-400 transition-all shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                        Parental Health Shield
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">Sparsh Concierge</h3>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-400/30">
                    24/7 Clinical
                  </span>
                </div>

                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Empathetic, institutional healthcare and physical companionship when you are thousands of miles away.
                </p>

                <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>24/7 Rapid SOS ambulance & pre-alerted ICU beds</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dedicated Care Companion for hospital OPD escorts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Bi-weekly home vitals telemetry & medicine replenishment</span>
                  </li>
                </ul>

                <Link
                  href="/sparsh"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-white text-white font-semibold text-xs sm:text-sm border border-white/20 hover:border-transparent transition-all group/btn"
                >
                  <span>Explore Sparsh Healthcare Shield</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          )}

          {activeMode === "aegis" && (
            <div className="bg-gradient-to-b from-[#132752] to-[#0B1B3D] border-2 border-[#D4AF37] rounded-3xl p-8 sm:p-10 shadow-2xl animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-4">
                  <span className="text-xs uppercase font-bold text-[#F3DC87] tracking-widest">
                    Asset Stewardship Deep Dive
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-white">
                    Your Real Estate In India, Managed with Corporate Rigor
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Never worry about non-paying tenants, unauthorized sub-letting, unaddressed plumbing crises, or delayed tax paperwork. Aegis assigns a certified Asset Steward to inspect, collect, and protect your investments.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-xl font-bold text-[#F3DC87]">99.8%</div>
                      <div className="text-[11px] text-slate-300">On-Time Rent Escrow</div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-xl font-bold text-[#F3DC87]">48-Hour</div>
                      <div className="text-[11px] text-slate-300">Maintenance SLA</div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                      <div className="text-xl font-bold text-[#F3DC87]">₹180Cr+</div>
                      <div className="text-[11px] text-slate-300">Portfolio Stewarded</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href="/aegis"
                    className="w-full text-center bg-[#D4AF37] hover:bg-[#B79224] text-[#0B1B3D] font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg text-sm"
                  >
                    View Aegis Stewardship Plans
                  </Link>
                  <Link
                    href="/portal-preview"
                    className="w-full text-center bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-6 rounded-xl border border-white/20 transition-all text-sm"
                  >
                    Inspect Digital Report Mockup &rarr;
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeMode === "sparsh" && (
            <div className="bg-gradient-to-b from-[#0F5132] to-[#0B1B3D] border-2 border-emerald-400 rounded-3xl p-8 sm:p-10 shadow-2xl animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-4">
                  <span className="text-xs uppercase font-bold text-emerald-300 tracking-widest">
                    Parental Care Deep Dive
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-white">
                    When You Can’t Be In The Room, Sparsh Is By Their Side
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    Aging parents often minimize their symptoms to avoid worrying children overseas. Sparsh provides trusted Clinical Care Companions who escort them to doctors, ensure medication adherence, handle grocery runs, and provide regular joyful companionship.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-3 bg-white/10 rounded-xl border border-white/15">
                      <div className="text-xl font-bold text-emerald-300">&lt; 14 Mins</div>
                      <div className="text-[11px] text-slate-200">Avg Emergency Dispatch</div>
                    </div>
                    <div className="p-3 bg-white/10 rounded-xl border border-white/15">
                      <div className="text-xl font-bold text-emerald-300">100%</div>
                      <div className="text-[11px] text-slate-200">Background Verified Staff</div>
                    </div>
                    <div className="p-3 bg-white/10 rounded-xl border border-white/15 col-span-2 sm:col-span-1">
                      <div className="text-xl font-bold text-emerald-300">4.9 / 5.0</div>
                      <div className="text-[11px] text-slate-200">NRI Family Satisfaction</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href="/sparsh"
                    className="w-full text-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg text-sm"
                  >
                    Configure Custom Care Plan
                  </Link>
                  <Link
                    href="/portal-preview"
                    className="w-full text-center bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-6 rounded-xl border border-white/20 transition-all text-sm"
                  >
                    Preview Live Health Hub &rarr;
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Global Diaspora Trust Bar */}
        <div className="mt-16 pt-10 border-t border-white/10 max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            <span>Real-time WhatsApp updates across GMT, EST, PST, GST & AEST</span>
          </div>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Dedicated City Managers in Bengaluru, Hyderabad & Delhi NCR</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Fully insured & compliant asset contracts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
