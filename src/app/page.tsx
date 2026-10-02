import React from "react";
import DualHero from "@/components/home/DualHero";
import AnxietyOfDistance from "@/components/home/AnxietyOfDistance";
import DualShowcase from "@/components/home/DualShowcase";
import TCOEstimator from "@/components/home/TCOEstimator";
import DiasporaTrust from "@/components/home/DiasporaTrust";
import Link from "next/link";
import { ArrowRight, ShieldCheck, HeartHandshake, PhoneCall } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Dual-Hero Interactive Section */}
      <DualHero />

      {/* 2. Value Proposition: The "Anxiety of Distance" Solved */}
      <AnxietyOfDistance />

      {/* 3. Dual Showcase: Side-by-Side Comparison Cards with Tabs */}
      <DualShowcase />

      {/* 4. Interactive TCO & Care Estimator Calculator */}
      <TCOEstimator />

      {/* 5. Testimonials & Diaspora Trust Metrics */}
      <DiasporaTrust />

      {/* 6. Pre-Footer Institutional Call To Action */}
      <section className="py-20 bg-gradient-to-br from-[#0B1B3D] via-[#122856] to-[#0A3622] text-white relative overflow-hidden border-t border-[#D4AF37]/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#F3DC87] border border-white/15">
            <span>Sustune Institutional Guarantee</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Stop worrying across time zones. <br />
            <span className="gold-gradient-text">Start experiencing true peace of mind.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Schedule a confidential virtual consultation with a dedicated NRI Care Director. We review your property portfolio and parents’ health needs with zero obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D4AF37] text-[#0B1B3D] font-bold text-sm shadow-xl transition-all group"
            >
              <span>Book Virtual NRI Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/portal-preview"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
            >
              <span>Explore Live Portal Demo</span>
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              RERA Compliant Escrows
            </span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              NABH & HIPAA Aligned
            </span>
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              24/7 NRI Emergency Hotlines
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
