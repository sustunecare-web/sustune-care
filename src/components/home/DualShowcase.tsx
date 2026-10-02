"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  HeartHandshake,
  KeyRound,
  FileCheck,
  Wrench,
  Scale,
  Activity,
  Ambulance,
  Stethoscope,
  Smile,
  ArrowRight,
  Check,
} from "lucide-react";

export default function DualShowcase() {
  const [activeTab, setActiveTab] = useState<"aegis" | "sparsh">("aegis");

  const aegisPillars = [
    {
      title: "Corporate Tenant Scouting",
      icon: KeyRound,
      desc: "Deep background checks, CIBIL credit scores, employment letters, and local police verification before keys are ever handed over.",
      features: ["Multi-portal listing syndication", "Physical accompanied viewings", "Lawyer-drafted digital lease agreements"],
    },
    {
      title: "Escrow Rent & Tax Compliance",
      icon: FileCheck,
      desc: "Automated rent collection into escrow, transparent TDS deductions, and seamless compliance paperwork for international repatriation.",
      features: ["Guaranteed 5th-of-the-month transfer", "NRE/NRO remittance assistance", "Annual Form 15CA/CB documentation"],
    },
    {
      title: "Periodic 80-Point Inspections",
      icon: ShieldCheck,
      desc: "Quarterly forensic audits with high-resolution photos, electrical checkups, plumbing leak detection, and inventory status reports.",
      features: ["Timestamped photo ledger", "Direct video walkthrough call", "Preventive repairs before monsoons"],
    },
    {
      title: "Turnkey Maintenance & Fit-outs",
      icon: Wrench,
      desc: "Vetted electricians, plumbers, and interior craftsmen operating under strict corporate SLAs with zero markup surprises.",
      features: ["Itemized quote pre-approvals", "Deep post-tenancy restoration", "Emergency plumbing/power response"],
    },
  ];

  const sparshPillars = [
    {
      title: "24/7 Rapid SOS & ICU Network",
      icon: Ambulance,
      desc: "Dedicated emergency panic button triggering ambulance dispatch with pre-arranged hospital bed reservations across major networks.",
      features: ["Under 15-minute response in tier 1 hubs", "Paramedic on-board telemetry", "Direct NRI crisis communication link"],
    },
    {
      title: "Doctor Escorts & Health Records",
      icon: Stethoscope,
      desc: "Qualified care companions who pick up your parents, escort them through hospital consultations, and take down clinical notes.",
      features: ["Prescription digitization & summaries", "Lab sample home collection", "Post-consultation debrief to sponsor"],
    },
    {
      title: "Bi-Weekly Vitals & Medication",
      icon: Activity,
      desc: "Systematic vitals tracking (BP, Blood Sugar, SpO2) and doorstep delivery of sorted, tamper-evident weekly pill organizers.",
      features: ["Digital sparkline trend tracking", "Refill automation before stock ends", "Geriatric doctor review on spikes"],
    },
    {
      title: "Warm Companionship & Errands",
      icon: Smile,
      desc: "Physical visits for tea, outdoor strolls in parks, tech assistance (FaceTime setup), and safe companionship to banks or temples.",
      features: ["Weekly social visit reports & photos", "Groceries and bank errand escort", "Mental wellness & loneliness relief"],
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#0F5132]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#F3DC87] mb-3">
              <span>Modular Architecture</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Dual-Shield Service Matrix
            </h2>
            <p className="mt-2 text-slate-300 text-sm max-w-xl">
              Switch between our two specialized divisions. Tailor them separately or bundle them together for complete diaspora coverage.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-950 border border-white/15">
            <button
              onClick={() => setActiveTab("aegis")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "aegis"
                  ? "bg-[#D4AF37] text-[#0B1B3D] shadow-md"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Aegis (Property)</span>
            </button>

            <button
              onClick={() => setActiveTab("sparsh")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "sparsh"
                  ? "bg-[#0F5132] text-white shadow-md border border-[#2CD997]/40"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              <span>Sparsh (Parental Care)</span>
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeTab === "aegis" ? aegisPillars : sparshPillars).map((col, idx) => {
            const Icon = col.icon;
            const isAegis = activeTab === "aegis";
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      isAegis
                        ? "bg-[#D4AF37]/20 text-[#F3DC87] border border-[#D4AF37]/30"
                        : "bg-[#0F5132]/30 text-emerald-300 border border-emerald-500/40"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#F3DC87] transition-colors">
                    {col.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed mb-6">
                    {col.desc}
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-4">
                    {col.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isAegis ? "text-[#D4AF37]" : "text-emerald-400"}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <Link
                    href={isAegis ? "/aegis" : "/sparsh"}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white group-hover:translate-x-0.5 transition-all"
                  >
                    <span>View Division Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0B1B3D] via-[#122856] to-[#0F5132] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-white/10 text-[#F3DC87]">
              <Scale className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-white text-sm font-bold">Bundle Aegis + Sparsh for 15% Synergy Discount</h4>
              <p className="text-slate-300 text-xs">Unified monthly reporting, dedicated dual account steward, and prioritized 24/7 hotline.</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 bg-[#D4AF37] hover:bg-[#B79224] text-[#0B1B3D] text-xs font-bold py-2.5 px-5 rounded-xl transition-all shadow-md"
          >
            Claim Dual-Shield Bundle
          </Link>
        </div>
      </div>
    </section>
  );
}
