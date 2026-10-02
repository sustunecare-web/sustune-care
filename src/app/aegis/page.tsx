import React from "react";
import type { Metadata } from "next";
import AegisHero from "@/components/aegis/AegisHero";
import AegisModules from "@/components/aegis/AegisModules";
import AegisPricingTable from "@/components/aegis/AegisPricingTable";
import DigitalInspectionReport from "@/components/aegis/DigitalInspectionReport";
import Link from "next/link";
import { ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Aegis Property Stewardship | Institutional NRI Real Estate Management",
  description:
    "Protect, rent, and preserve your luxury residential and commercial property in Bengaluru, Hyderabad, and Delhi NCR. Vetted corporate tenants, escrow rent collection, and quarterly 80-point inspection audits.",
};

export default function AegisPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AegisHero />
      <AegisModules />
      <AegisPricingTable />
      <DigitalInspectionReport />

      {/* Direct CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0B1B3D] via-[#122856] to-[#0B1B3D] text-white border-t border-[#D4AF37]/30 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 text-xs font-semibold text-[#F3DC87] border border-[#D4AF37]/40">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Protect Your Indian Real Estate</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Have a Property in Bengaluru, Hyderabad, or Delhi NCR?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Get an instant property valuation, rental yield analysis, and complimentary condition audit with a certified Sustune Asset Steward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact?interest=aegis"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D4AF37] text-[#0B1B3D] font-bold text-sm shadow-xl transition-all"
            >
              <span>Schedule Free Asset Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/918007878863?text=Hi%20Sustune%20Care%2C%20I%20have%20a%20property%20in%20India%20and%20would%20like%20to%20know%20about%20Aegis%20stewardship."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span>Chat with Lead Property Steward</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
