"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";
import {
  Calculator,
  Building2,
  HeartPulse,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Percent,
} from "lucide-react";

export default function TCOEstimator() {
  const { formatPrice, currency, info } = useCurrency();
  const rentInputId = useId();

  // Calculator State
  const [city, setCity] = useState("Bengaluru");
  const [includeProperty, setIncludeProperty] = useState(true);
  const [includeParents, setIncludeParents] = useState(true);

  // Property Inputs
  const [propertyType, setPropertyType] = useState<"apt" | "luxury" | "villa">("luxury");
  const [monthlyRentINR, setMonthlyRentINR] = useState(65000);

  // Parental Care Inputs
  const [careTier, setCareTier] = useState<"essential" | "comprehensive" | "concierge">("comprehensive");

  // Calculations (in INR)
  // Aegis fee: typically 8% - 10% of monthly rent (minimum ₹3,500/mo)
  const aegisBaseRate = propertyType === "villa" ? 0.09 : propertyType === "luxury" ? 0.08 : 0.075;
  const aegisMonthlyFeeINR = includeProperty ? Math.max(3500, Math.round(monthlyRentINR * aegisBaseRate)) : 0;

  // Sparsh Care Tier Fees
  const sparshFees = {
    essential: 4999, // Emergency SOS + monthly vitals + digital reports
    comprehensive: 9999, // 2 doctor escorts + bi-weekly vitals + weekly companionship visits + SOS
    concierge: 18999, // Unlimited doctor escorts + 3x weekly visits + physio coordination + SOS
  };
  const sparshMonthlyFeeINR = includeParents ? sparshFees[careTier] : 0;

  // Bundle Synergy Discount: 15% off when both are selected
  const hasBundle = includeProperty && includeParents;
  const subtotalINR = aegisMonthlyFeeINR + sparshMonthlyFeeINR;
  const discountINR = hasBundle ? Math.round(subtotalINR * 0.15) : 0;
  const netMonthlyINR = subtotalINR - discountINR;

  // Estimated annual losses prevented (uncollected rent, contractor gouging, emergency transatlantic flights)
  const annualSavedINR = includeProperty
    ? monthlyRentINR * 1.5 + 45000 + (includeParents ? 150000 : 0)
    : includeParents
    ? 150000
    : 0;

  return (
    <section id="tco-estimator" className="py-20 sm:py-28 bg-[#FBFBFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B3D]/5 border border-[#0B1B3D]/10 text-xs font-semibold text-[#0B1B3D] mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive TCO & ROI Simulator</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1B3D] tracking-tight">
            Transparent Diaspora Care Estimator
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Estimate your monthly investment in INR or your local currency ({currency}). No hidden broker fees, zero markup on maintenance.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
            {/* Step 1: City Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                1. Select Target Metropolitan Hub in India
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {["Bengaluru", "Hyderabad", "Delhi NCR", "Pune", "Chennai"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setCity(c)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      city === c
                        ? "bg-[#0B1B3D] text-white border-[#0B1B3D] shadow-xs"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Coverage Scope Switches */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                2. Select Scope of Stewardship
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIncludeProperty(!includeProperty)}
                  className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                    includeProperty
                      ? "bg-[#D4AF37]/10 border-[#D4AF37] ring-1 ring-[#D4AF37]"
                      : "bg-slate-50 border-slate-200 opacity-60"
                  }`}
                >
                  <div className={`p-2 rounded-xl ${includeProperty ? "bg-[#0B1B3D] text-[#F3DC87]" : "bg-slate-200 text-slate-500"}`}>
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B1B3D]">Aegis Property Shield</div>
                    <div className="text-xs text-slate-500 mt-0.5">Rental, Tenant, Maintenance & Tax</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeParents(!includeParents)}
                  className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                    includeParents
                      ? "bg-emerald-50 border-emerald-500 ring-1 ring-emerald-500"
                      : "bg-slate-50 border-slate-200 opacity-60"
                  }`}
                >
                  <div className={`p-2 rounded-xl ${includeParents ? "bg-[#0F5132] text-white" : "bg-slate-200 text-slate-500"}`}>
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B1B3D]">Sparsh Parental Care</div>
                    <div className="text-xs text-slate-500 mt-0.5">24/7 SOS, Hospital Escort & Visits</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 3: Property Configuration (if enabled) */}
            {includeProperty && (
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0B1B3D] uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#D4AF37]" />
                    Property Type & Expected Rent
                  </span>
                  <span className="text-xs text-slate-500">Tier: {city}</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => {
                      setPropertyType("apt");
                      setMonthlyRentINR(40000);
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      propertyType === "apt" ? "bg-[#0B1B3D] text-white border-[#0B1B3D]" : "bg-white text-slate-700 border-slate-200"
                    }`}
                  >
                    2BHK Apartment
                  </button>
                  <button
                    onClick={() => {
                      setPropertyType("luxury");
                      setMonthlyRentINR(75000);
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      propertyType === "luxury" ? "bg-[#0B1B3D] text-white border-[#0B1B3D]" : "bg-white text-slate-700 border-slate-200"
                    }`}
                  >
                    3-4BHK Luxury
                  </button>
                  <button
                    onClick={() => {
                      setPropertyType("villa");
                      setMonthlyRentINR(150000);
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      propertyType === "villa" ? "bg-[#0B1B3D] text-white border-[#0B1B3D]" : "bg-white text-slate-700 border-slate-200"
                    }`}
                  >
                    Gated Villa / Penthouse
                  </button>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <label htmlFor={rentInputId} className="text-slate-600 font-medium">Monthly Rental Value:</label>
                    <span className="font-bold text-[#0B1B3D] text-sm">
                      ₹{monthlyRentINR.toLocaleString("en-IN")} ({formatPrice(monthlyRentINR)})
                    </span>
                  </div>
                  <input
                    id={rentInputId}
                    type="range"
                    min={25000}
                    max={250000}
                    step={5000}
                    value={monthlyRentINR}
                    aria-label="Monthly Rental Value"
                    onChange={(e) => setMonthlyRentINR(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹25,000</span>
                    <span>₹1,25,000</span>
                    <span>₹2,50,000+</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Parental Care Tier (if enabled) */}
            {includeParents && (
              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-4 animate-in fade-in duration-200">
                <span className="text-xs font-bold text-[#0F5132] uppercase tracking-wider flex items-center gap-1.5">
                  <HeartPulse className="w-4 h-4 text-[#0F5132]" />
                  Sparsh Healthcare Tier
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    onClick={() => setCareTier("essential")}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      careTier === "essential"
                        ? "bg-[#0F5132] text-white border-[#0F5132] shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="font-bold text-xs">Essential SOS</div>
                    <div className={`text-[10px] mt-0.5 ${careTier === "essential" ? "text-emerald-200" : "text-slate-500"}`}>
                      24/7 SOS & Emergency + Monthly Vitals
                    </div>
                  </button>

                  <button
                    onClick={() => setCareTier("comprehensive")}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      careTier === "comprehensive"
                        ? "bg-[#0F5132] text-white border-[#0F5132] shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="font-bold text-xs flex items-center gap-1">
                      <span>Comprehensive</span>
                      <span className="text-[9px] bg-emerald-300 text-[#0F5132] px-1 rounded font-bold">Popular</span>
                    </div>
                    <div className={`text-[10px] mt-0.5 ${careTier === "comprehensive" ? "text-emerald-200" : "text-slate-500"}`}>
                      Doctor Escorts + Bi-Weekly Vitals + Weekly Visits
                    </div>
                  </button>

                  <button
                    onClick={() => setCareTier("concierge")}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      careTier === "concierge"
                        ? "bg-[#0F5132] text-white border-[#0F5132] shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="font-bold text-xs">Full Concierge</div>
                    <div className={`text-[10px] mt-0.5 ${careTier === "concierge" ? "text-emerald-200" : "text-slate-500"}`}>
                      Unlimited Escorts + 3x Weekly Visits + Dedicated Nurse
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Real-Time Pricing Summary Card */}
          <div className="lg:col-span-5 bg-[#0B1B3D] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/50 shadow-xl space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-bold text-[#F3DC87] uppercase tracking-wider">
                  Live Plan Summary
                </span>
                <h3 className="font-serif text-xl font-bold text-white">Estimated Investment</h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-slate-200 border border-white/15">
                City: {city}
              </span>
            </div>

            {/* Line Items */}
            <div className="space-y-3 text-xs sm:text-sm">
              {includeProperty && (
                <div className="flex justify-between items-center text-slate-200">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span>Aegis Asset Stewardship</span>
                  </span>
                  <span className="font-semibold text-white">
                    {formatPrice(aegisMonthlyFeeINR, { perMonth: true })}
                  </span>
                </div>
              )}

              {includeParents && (
                <div className="flex justify-between items-center text-slate-200">
                  <span className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-emerald-400" />
                    <span>Sparsh Care ({careTier})</span>
                  </span>
                  <span className="font-semibold text-white">
                    {formatPrice(sparshMonthlyFeeINR, { perMonth: true })}
                  </span>
                </div>
              )}

              {hasBundle && (
                <div className="flex justify-between items-center text-emerald-300 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-500/30">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Percent className="w-4 h-4 text-emerald-400" />
                    <span>Dual-Shield Synergy Discount (15%)</span>
                  </span>
                  <span className="font-bold">
                    -{formatPrice(discountINR, { perMonth: true })}
                  </span>
                </div>
              )}
            </div>

            {/* Net Total Display */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-xs text-slate-400 mb-1">Total Net Monthly Fee:</div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold gold-gradient-text">
                  {formatPrice(netMonthlyINR)}
                </span>
                <span className="text-slate-400 text-sm">/ month</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Billed quarterly or annually. Cancel or pause anytime with 30-day notice.
              </div>
            </div>

            {/* Annual Savings & ROI Box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F3DC87]">
                <TrendingUp className="w-4 h-4" />
                <span>Estimated Annual Financial Protection:</span>
              </div>
              <div className="text-xl font-bold text-white">
                ~ {formatPrice(annualSavedINR)}
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Calculated based on zero rent loss, avoided contractor inflation, preventive property maintenance, and eliminating distress international travel.
              </p>
            </div>

            {/* Direct CTA */}
            <div className="space-y-3 pt-2">
              <Link
                href={`/contact?interest=${
                  hasBundle ? "bundle" : includeProperty ? "aegis" : "sparsh"
                }&city=${encodeURIComponent(city)}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D4AF37] text-[#0B1B3D] font-bold text-sm shadow-xl transition-all group"
              >
                <span>Lock In This Plan & Schedule Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/918007878863?text=Hi%20Sustune%20Care%2C%20I%20used%20the%20TCO%20Estimator%20for%20${city}.%20Estimated%20quote%3A%20${formatPrice(netMonthlyINR)}%2Fmo.%20I%20would%20like%20to%20discuss.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold border border-white/20 transition-all"
              >
                <span>Share Quote via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
