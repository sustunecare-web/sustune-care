"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";
import { Check, X, ShieldCheck, Sparkles, HelpCircle, ArrowRight } from "lucide-react";

export default function AegisPricingTable() {
  const { formatPrice, currency } = useCurrency();
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">("annual");

  const features = [
    { name: "Professional HD Staging & 3D Tour", scouting: true, complete: true },
    { name: "Syndication on 6+ NRI & High-Net-Worth Portals", scouting: true, complete: true },
    { name: "CIBIL / Experian Credit Bureau Background Check", scouting: true, complete: true },
    { name: "Corporate HR & Police Tenant Verification", scouting: true, complete: true },
    { name: "Legal Digital Lease Drafting & E-Stamp Execution", scouting: true, complete: true },
    { name: "Deposit Collection & Escrow Remittance", scouting: true, complete: true },
    { name: "Monthly Escrow Rent Collection & 5th Payout", scouting: false, complete: true },
    { name: "TDS Computation & Form 15CA/CB Assistance", scouting: false, complete: true },
    { name: "Quarterly 80-Point Digital Forensic Inspections", scouting: false, complete: true },
    { name: "24/7 Emergency Maintenance SLA Dispatch", scouting: false, complete: true },
    { name: "Annual Property Tax Filing & Khata Verification", scouting: false, complete: true },
    { name: "Dedicated Named Asset Steward & NRI Portal Access", scouting: false, complete: true },
    { name: "Free Tenant Replacement Guarantee (12 Months)", scouting: false, complete: true },
  ];

  // Pricing values in INR
  // Scouting only: 15 days rental value flat one-time placement fee
  // Complete management: 8% of monthly rent (or ~₹4,500/mo)
  const completeMonthlyINR = billingCycle === "annual" ? 4250 : 4999;
  const annualSavingsINR = 4999 * 12 - 4250 * 12;

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-semibold text-[#947416] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Transparent Fee Structure</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3D] tracking-tight">
            Compare Aegis Stewardship Tiers
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Choose between one-time placement or complete 365-day institutional asset protection. All rates supported in {currency}.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 flex justify-center items-center gap-3">
            <span className={`text-xs font-semibold ${billingCycle === "monthly" ? "text-[#0B1B3D]" : "text-slate-500"}`}>
              Monthly Retainer
            </span>

            <button
              onClick={() => setBillingCycle(billingCycle === "annual" ? "monthly" : "annual")}
              className="w-14 h-8 bg-[#0B1B3D] rounded-full p-1 transition-colors relative focus:outline-none"
              aria-label="Toggle billing cycle"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#D4AF37] transition-transform duration-200 ${
                  billingCycle === "annual" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>

            <span className={`text-xs font-semibold flex items-center gap-1.5 ${billingCycle === "annual" ? "text-[#0B1B3D]" : "text-slate-500"}`}>
              <span>Annual Retainer</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-300">
                Save ~15%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Card 1: Tenant Scouting Only */}
          <div className="bg-[#FBFBFB] border border-slate-200 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0B1B3D]">
                    Tenant Scouting Only
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Ideal for owners who manage day-to-day maintenance themselves.
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-200 text-slate-700">
                  One-Time
                </span>
              </div>

              <div className="my-6 py-4 border-y border-slate-200">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1B3D]">
                  15 Days Rent
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Payable only upon successful lease execution and key delivery.
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 mb-8">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Full corporate & police background check</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>CIBIL 750+ credit verified tenants</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Lawyer-drafted digital lease agreement</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-400">
                  <X className="w-4 h-4 text-slate-300 shrink-0" />
                  <span>Ongoing rent escrow & tax assistance</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-400">
                  <X className="w-4 h-4 text-slate-300 shrink-0" />
                  <span>Quarterly forensic inspection audits</span>
                </div>
              </div>
            </div>

            <Link
              href="/contact?interest=aegis&tier=scouting"
              className="w-full text-center py-3.5 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B1B3D] font-bold text-sm transition-all border border-slate-300"
            >
              Select Tenant Scouting
            </Link>
          </div>

          {/* Card 2: Complete Aegis Management (Featured) */}
          <div className="bg-[#0B1B3D] text-white border-2 border-[#D4AF37] rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#0B1B3D] text-[10px] font-extrabold uppercase tracking-widest py-1.5 px-6 rounded-bl-xl">
              Most Popular Diaspora Plan
            </div>

            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <span>Complete Aegis Stewardship</span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Hands-off, end-to-end asset preservation and rental escrow.
                  </p>
                </div>
              </div>

              <div className="my-6 py-4 border-y border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#F3DC87]">
                    8% of Rent
                  </span>
                  <span className="text-xs text-slate-300">
                    (or min {formatPrice(completeMonthlyINR, { perMonth: true })})
                  </span>
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  {billingCycle === "annual"
                    ? `Billed annually. Includes ~${formatPrice(annualSavingsINR)} yearly savings.`
                    : "Billed monthly with zero lock-in contracts."}
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-200 mb-8">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Everything in Tenant Scouting included</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Automated rent escrow collection & 5th-of-month payout</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Quarterly 80-point digital forensic inspection audits</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>TDS calculation & Form 15CA/CB compliance support</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Free tenant replacement guarantee within 12 months</span>
                </div>
              </div>
            </div>

            <Link
              href="/contact?interest=aegis&tier=complete"
              className="w-full text-center py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D4AF37] text-[#0B1B3D] font-bold text-sm shadow-xl transition-all"
            >
              Enroll Property in Complete Aegis
            </Link>
          </div>
        </div>

        {/* Detailed Feature-by-Feature Matrix */}
        <div className="max-w-5xl mx-auto bg-[#FBFBFB] border border-slate-200 rounded-3xl p-6 sm:p-8">
          <h3 className="font-serif text-lg font-bold text-[#0B1B3D] mb-6">
            Detailed Feature Comparison Matrix
          </h3>

          <div className="divide-y divide-slate-200 text-xs sm:text-sm">
            <div className="grid grid-cols-12 py-3 font-bold text-[#0B1B3D] uppercase text-[11px] tracking-wider">
              <div className="col-span-6 sm:col-span-8">Stewardship Deliverable</div>
              <div className="col-span-3 sm:col-span-2 text-center">Scouting Only</div>
              <div className="col-span-3 sm:col-span-2 text-center text-[#D4AF37]">Complete Aegis</div>
            </div>

            {features.map((f, i) => (
              <div key={i} className="grid grid-cols-12 py-3 items-center hover:bg-slate-50">
                <div className="col-span-6 sm:col-span-8 text-slate-800 font-medium">
                  {f.name}
                </div>
                <div className="col-span-3 sm:col-span-2 flex justify-center">
                  {f.scouting ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <X className="w-4 h-4 text-slate-300" />
                  )}
                </div>
                <div className="col-span-3 sm:col-span-2 flex justify-center">
                  {f.complete ? (
                    <Check className="w-5 h-5 text-[#D4AF37] font-bold" />
                  ) : (
                    <X className="w-4 h-4 text-slate-300" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
