"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";
import {
  HeartHandshake,
  Ambulance,
  Activity,
  Stethoscope,
  Smile,
  Pill,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function CarePlanConfigurator() {
  const { formatPrice, currency } = useCurrency();

  // Configurator state
  const [parentCount, setParentCount] = useState<"single" | "couple">("couple");
  const [vitalsFreq, setVitalsFreq] = useState<"monthly" | "biweekly" | "weekly">("biweekly");
  const [escortCount, setEscortCount] = useState<1 | 2 | 4>(2);
  const [visitCount, setVisitCount] = useState<2 | 4 | 8>(4);
  const [smartPillSorting, setSmartPillSorting] = useState<boolean>(true);

  // Pricing Calculation in INR
  let basePriceINR = 3999; // Base SOS + Emergency response protocol

  // Vitals addition
  if (vitalsFreq === "biweekly") basePriceINR += 2000;
  if (vitalsFreq === "weekly") basePriceINR += 4000;

  // Escorts (approx ₹1,500 per escorted doctor trip with private cab & companion)
  basePriceINR += escortCount * 1500;

  // Companionship visits (approx ₹800 per visit)
  basePriceINR += visitCount * 800;

  // Pill sorting
  if (smartPillSorting) basePriceINR += 1200;

  // Couple multiplier (35% incremental fee instead of 100%)
  const totalMonthlyINR = parentCount === "couple" ? Math.round(basePriceINR * 1.35) : basePriceINR;

  return (
    <section id="configurator" className="py-20 sm:py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-[#0F5132] mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Care Configurator</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3D] tracking-tight">
            Build Your Parents’ Custom Care Plan
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every senior’s health profile is unique. Configure companionship hours, doctor visit frequencies, and emergency coverage with live pricing in {currency}.
          </p>
        </div>

        {/* Configurator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#FBFBFB] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-7">
            {/* Step 1: Beneficiary Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                1. Parents Covered
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setParentCount("single")}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    parentCount === "single"
                      ? "bg-[#0F5132] text-white border-[#0F5132] shadow-xs"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <Users className="w-5 h-5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold">Single Parent</div>
                    <div className={`text-[10px] ${parentCount === "single" ? "text-emerald-200" : "text-slate-500"}`}>
                      Father or Mother
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setParentCount("couple")}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    parentCount === "couple"
                      ? "bg-[#0F5132] text-white border-[#0F5132] shadow-xs"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <Users className="w-5 h-5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold">Both Parents (Couple)</div>
                    <div className={`text-[10px] ${parentCount === "couple" ? "text-emerald-200" : "text-slate-500"}`}>
                      Save 65% on second parent
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Routine Vitals & Telemetry */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  2. Home Vitals & ECG Checkup Frequency
                </label>
                <span className="text-[11px] text-slate-500">Nurse Home Visit</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "monthly", label: "Monthly", desc: "Basic maintenance" },
                  { id: "biweekly", label: "Bi-Weekly", desc: "Most recommended" },
                  { id: "weekly", label: "Weekly", desc: "Chronic monitoring" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setVitalsFreq(item.id as typeof vitalsFreq)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      vitalsFreq === item.id
                        ? "bg-[#0F5132] text-white border-[#0F5132]"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className={`text-[10px] mt-0.5 ${vitalsFreq === item.id ? "text-emerald-200" : "text-slate-500"}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Doctor Escorts */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4 text-emerald-600" />
                  3. In-Person Hospital & Doctor Escorts
                </label>
                <span className="text-[11px] text-slate-500">Includes sanitized cab + companion</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { count: 1, label: "1 Visit / Mo", desc: "Routine review" },
                  { count: 2, label: "2 Visits / Mo", desc: "Dual specialists" },
                  { count: 4, label: "4 Visits / Mo", desc: "Post-op / Intensive" },
                ].map((item) => (
                  <button
                    key={item.count}
                    onClick={() => setEscortCount(item.count as typeof escortCount)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      escortCount === item.count
                        ? "bg-[#0F5132] text-white border-[#0F5132]"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className={`text-[10px] mt-0.5 ${escortCount === item.count ? "text-emerald-200" : "text-slate-500"}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Companionship Visits */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Smile className="w-4 h-4 text-emerald-600" />
                  4. Warm Companionship & Errand Visits
                </label>
                <span className="text-[11px] text-slate-500">Tea, walks & errands</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { count: 2, label: "2 Visits / Mo", desc: "Fortnightly social" },
                  { count: 4, label: "Weekly (4 / Mo)", desc: "Ideal engagement" },
                  { count: 8, label: "Twice Weekly (8 / Mo)", desc: "Daily connection" },
                ].map((item) => (
                  <button
                    key={item.count}
                    onClick={() => setVisitCount(item.count as typeof visitCount)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      visitCount === item.count
                        ? "bg-[#0F5132] text-white border-[#0F5132]"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className={`text-[10px] mt-0.5 ${visitCount === item.count ? "text-emerald-200" : "text-slate-500"}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Smart Pill Sorting */}
            <div className="pt-2">
              <label className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-emerald-500 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-[#0F5132]">
                    <Pill className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      Smart Color-Coded Blister Pill Sorting
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Doorstep medicine delivery organized into Morning / Noon / Night pouches
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={smartPillSorting}
                  onChange={(e) => setSmartPillSorting(e.target.checked)}
                  className="w-5 h-5 accent-[#0F5132] rounded cursor-pointer"
                />
              </label>
            </div>
          </div>

          {/* Pricing & Plan Summary Box */}
          <div className="lg:col-span-5 bg-[#0A3622] text-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-400 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
                  Configured Care Plan
                </span>
                <h3 className="font-serif text-xl font-bold text-white">Monthly Subscription</h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-emerald-200 border border-white/15">
                {parentCount === "couple" ? "2 Beneficiaries" : "1 Beneficiary"}
              </span>
            </div>

            {/* Inclusions summary list */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between text-emerald-100">
                <span className="flex items-center gap-2">
                  <Ambulance className="w-4 h-4 text-emerald-400" />
                  <span>24/7 Rapid SOS & Emergency Ambulance</span>
                </span>
                <span className="font-semibold text-emerald-300">Included</span>
              </div>

              <div className="flex items-center justify-between text-emerald-100">
                <span className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>Vitals Telemetry ({vitalsFreq})</span>
                </span>
                <span className="font-semibold text-white">Active</span>
              </div>

              <div className="flex items-center justify-between text-emerald-100">
                <span className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-emerald-400" />
                  <span>Doctor Escorts ({escortCount} visits/mo)</span>
                </span>
                <span className="font-semibold text-white">Active</span>
              </div>

              <div className="flex items-center justify-between text-emerald-100">
                <span className="flex items-center gap-2">
                  <Smile className="w-4 h-4 text-emerald-400" />
                  <span>Companionship ({visitCount} visits/mo)</span>
                </span>
                <span className="font-semibold text-white">Active</span>
              </div>

              {smartPillSorting && (
                <div className="flex items-center justify-between text-emerald-100">
                  <span className="flex items-center gap-2">
                    <Pill className="w-4 h-4 text-emerald-400" />
                    <span>Smart Blister Pill Sorting</span>
                  </span>
                  <span className="font-semibold text-white">Active</span>
                </div>
              )}
            </div>

            {/* Total Monthly Investment */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-xs text-emerald-300 mb-1">Total Monthly Care Fee:</div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-white">
                  {formatPrice(totalMonthlyINR)}
                </span>
                <span className="text-emerald-300 text-sm">/ month</span>
              </div>
              <div className="text-[11px] text-emerald-200/80 mt-1">
                No long-term contracts. Pause or upgrade anytime with 1 click.
              </div>
            </div>

            {/* Dedicated Care Companion Assurance */}
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs text-emerald-100 space-y-1.5">
              <div className="font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>The Sparsh Guarantee:</span>
              </div>
              <p className="leading-relaxed text-[11px]">
                Parents are assigned the <em>same</em> named Companion for continuity of care. Police verified, basic life support certified, and background checked.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-2">
              <Link
                href={`/contact?interest=sparsh&plan=custom&monthly=${totalMonthlyINR}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-[#093420] font-bold text-sm shadow-xl transition-all group"
              >
                <span>Enroll Parents in This Plan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/918007878863?text=Hi%20Sustune%20Care%2C%20I%20configured%20a%20Sparsh%20Care%20Plan%20for%20my%20parents.%20Estimated%20total%3A%20${formatPrice(totalMonthlyINR)}%2Fmo.%20Can%20we%20schedule%20an%20onboarding%20call%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/20 transition-all"
              >
                <span>Discuss Plan on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
