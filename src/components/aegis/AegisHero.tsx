"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  KeyRound,
  ArrowRight,
  CheckCircle,
  FileCheck2,
  TrendingUp,
  MapPin,
} from "lucide-react";

export default function AegisHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3D] text-white pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Background radial gradient */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(212,175,55,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/40 text-xs font-semibold text-[#F3DC87]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Aegis Real Estate Stewardship Division</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Institutional Property Stewardship for <br />
              <span className="gold-gradient-text">High-Value Indian Assets</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              We protect prime residences and commercial spaces across Bengaluru, Hyderabad, and Delhi NCR with corporate lease vetting, guaranteed escrow rent collection, and forensic 80-point inspection audits.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#pricing"
                className="bg-gradient-to-r from-[#D4AF37] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D4AF37] text-[#0B1B3D] font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>Compare Stewardship Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#inspection-report"
                className="bg-white/10 hover:bg-white/15 text-white font-semibold text-sm py-3.5 px-6 rounded-xl border border-white/20 transition-all flex items-center gap-2"
              >
                <FileCheck2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Sample Digital Audit Report</span>
              </Link>
            </div>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Zero Unauthorized Tenancy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>5th of Month Escrow Payout</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Form 15CA/CB Tax Filing</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-[#132752] to-[#0B1B3D] border-2 border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Live Portfolio Metric
                  </span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F3DC87]">
                  Bengaluru &bull; Hyderabad
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400">Total Asset Value Stewarded</div>
                  <div className="font-serif text-3xl font-bold text-white mt-1">₹182.4 Crore</div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>99.8% On-time remittance rate</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">Average Tenant Placement</span>
                    <span className="font-bold text-[#F3DC87]">18.4 Days</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#D4AF37] h-full w-[85%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Target: &lt; 21 Days</span>
                    <span>Industry Avg: 60+ Days</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0F5132]/30 border border-emerald-500/30 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-emerald-200">Legal Eviction Protection</div>
                    <div className="text-[11px] text-slate-300">Supreme Court vetted lease agreements</div>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
