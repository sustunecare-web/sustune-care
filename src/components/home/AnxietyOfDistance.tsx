"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Home,
  HeartHandshake,
  ArrowRight,
  Shield,
  FileSpreadsheet,
} from "lucide-react";
import Link from "next/link";

export default function AnxietyOfDistance() {
  const [selectedPillar, setSelectedPillar] = useState<"property" | "parental">("parental");

  const comparisons = {
    parental: {
      title: "Parental Health & Well-being",
      subtitle: "When you are 8,000 miles away and a health scare strikes at midnight",
      painPoints: [
        {
          heading: "The 3:00 AM Anxious Awakening",
          desc: "Waking up to a missed call in San Jose or London, frantic about whether mom took her heart medicine or fell in the bathroom.",
        },
        {
          heading: "Parents Concealing Symptoms",
          desc: "'Beta, we are completely fine!' — Indian parents habitually downplay chest discomfort or dizziness so their overseas children don't panic.",
        },
        {
          heading: "Reluctant Favors from Relatives",
          desc: "Calling overburdened distant cousins or neighbors to escort your parents through 4-hour chaotic hospital queues.",
        },
      ],
      solutions: [
        {
          heading: "24/7 Rapid SOS & Pre-Alerted ICUs",
          desc: "Dedicated clinical dispatch under 15 minutes, with hospital admissions pre-authorized at Apollo, Fortis, or Manipal.",
        },
        {
          heading: "Certified Healthcare Companion",
          desc: "A trained nurse or geriatric escort accompanies them to every appointment, recording doctor consultations into your digital portal.",
        },
        {
          heading: "Routine Telemetry & Joyful Visits",
          desc: "Bi-weekly vitals screening, doorstep medicine replenishment, and warm social check-ins with photo & voice updates.",
        },
      ],
    },
    property: {
      title: "Real Estate & Asset Preservation",
      subtitle: "When your multi-crore Indian property is left to informal caretakers",
      painPoints: [
        {
          heading: "Tenant Ghosting & Unpaid Rent",
          desc: "Rent delayed by months while you struggle across 10-hour timezone differences to reach tenants who make endless excuses.",
        },
        {
          heading: "Contractor Exploitation & Decay",
          desc: "Fly-by-night local handymen charging exorbitant fees for shoddy plumbing repairs that leave hidden moisture leaks and wall decay.",
        },
        {
          heading: "Tax, Legal & Khata Nightmare",
          desc: "Unpaid property taxes, missed BBMP/GHMC notices, and agonizing bureaucratic confusion when trying to remit funds abroad.",
        },
      ],
      solutions: [
        {
          heading: "Institutional Vetting & Escrow Remittance",
          desc: "Rigorous CIBIL & background verification for corporate tenants, automated escrow rent payouts with TDS Form 15CA/CB documentation.",
        },
        {
          heading: "80-Point Digital Inspection Audits",
          desc: "Quarterly high-resolution room-by-room photographic audits, moisture meter readings, and transparent, fixed-rate repair contracts.",
        },
        {
          heading: "Complete Legal & Municipal Stewardship",
          desc: "Municipal tax filing, Khata/Patta verification, encumbrance checks, and seamless repatriation assistance to NRE/NRO accounts.",
        },
      ],
    },
  };

  const current = comparisons[selectedPillar];

  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B3D]/5 border border-[#0B1B3D]/10 text-xs font-semibold text-[#0B1B3D] mb-4">
            <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The NRI Reality</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3D] tracking-tight">
            The <span className="text-[#0B1B3D] underline decoration-[#D4AF37] decoration-4 underline-offset-8">Anxiety of Distance</span>, Resolved.
          </h2>

          <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every NRI lives with a quiet undercurrent of guilt and worry. Sustune Care replaces guesswork and dependence on distant relatives with institutional responsibility and heartfelt care.
          </p>

          {/* Pillar Switcher */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300">
              <button
                onClick={() => setSelectedPillar("parental")}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  selectedPillar === "parental"
                    ? "bg-[#0F5132] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <HeartHandshake className="w-4 h-4 text-emerald-300" />
                <span>Parental Health Concierge</span>
              </button>

              <button
                onClick={() => setSelectedPillar("property")}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  selectedPillar === "property"
                    ? "bg-[#0B1B3D] text-[#F3DC87] shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Home className="w-4 h-4 text-[#D4AF37]" />
                <span>Property Asset Stewardship</span>
              </button>
            </div>
          </div>
        </div>

        {/* Side-by-Side Reality Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Without Sustune: The Chaos Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-red-200/70 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-400/80" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-red-50 text-red-600">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
                      The Status Quo
                    </span>
                    <h3 className="font-serif text-lg font-bold text-slate-900">
                      Relying on Relatives & Ad-Hoc Fixes
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                  High Stress
                </span>
              </div>

              <div className="space-y-4">
                {current.painPoints.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-red-50/50 border border-red-100">
                    <h4 className="font-bold text-xs sm:text-sm text-red-950 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      {item.heading}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed pl-3.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Average NRI time lost in ad-hoc resolution: <strong>14 hours / month</strong></span>
            </div>
          </div>

          {/* With Sustune: The Institutional Peace of Mind */}
          <div className="bg-[#0B1B3D] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/60 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#2CD997] to-[#D4AF37]" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#D4AF37]/20 text-[#F3DC87]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#F3DC87] uppercase tracking-wider">
                      The Sustune Protocol
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white">
                      Guaranteed Corporate Accountability
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#0F5132] text-emerald-200 border border-emerald-400/40">
                  Zero Anxiety
                </span>
              </div>

              <div className="space-y-4">
                {current.solutions.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-colors">
                    <h4 className="font-bold text-xs sm:text-sm text-[#F3DC87] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2CD997] shrink-0" />
                      {item.heading}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-300">
                Managed via private <strong>Dual-Shield Client Portal</strong>
              </span>

              <Link
                href="/portal-preview"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F3DC87] hover:underline"
              >
                <span>View Portal Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
