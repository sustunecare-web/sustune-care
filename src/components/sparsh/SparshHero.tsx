"use client";

import React from "react";
import Link from "next/link";
import {
  HeartHandshake,
  ShieldAlert,
  Activity,
  ArrowRight,
  CheckCircle,
  PhoneCall,
  UserCheck,
  Stethoscope,
} from "lucide-react";

export default function SparshHero() {
  return (
    <section className="relative overflow-hidden bg-[#0A3622] text-white pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Background radial gradient */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(44,217,151,0.2),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-emerald-400/40 text-xs font-semibold text-emerald-300">
              <HeartHandshake className="w-4 h-4 text-emerald-300" />
              <span>Sparsh Parental Healthcare & Concierge Division</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              A Loving, Institutional <br />
              <span className="text-emerald-300">Presence Back Home</span> For Your Aging Parents
            </h1>

            <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed max-w-2xl">
              24/7 Rapid SOS ambulance dispatch, vetted clinical escorts to hospital appointments, doorstep medication sorting, and joyful companionship across Bengaluru, Hyderabad, and Delhi NCR.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#configurator"
                className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-[#093420] font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>Customize Parent Care Plan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#storytelling"
                className="bg-white/10 hover:bg-white/15 text-white font-semibold text-sm py-3.5 px-6 rounded-xl border border-white/20 transition-all flex items-center gap-2"
              >
                <UserCheck className="w-4 h-4 text-emerald-300" />
                <span>Meet Our Care Companions</span>
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15 text-xs text-emerald-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>&lt; 14-min Avg Emergency Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hospital Bed Pre-Alert Network</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clinical Doctor Consultation Debriefs</span>
              </div>
            </div>
          </div>

          {/* Right Visual Stats Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-[#0F5132] to-[#082A1A] border-2 border-emerald-400/50 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                    Active Telemetry Grid
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                  NABH Aligned
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                  <div className="text-xs text-emerald-200">Emergency Rapid Triage Response</div>
                  <div className="font-serif text-3xl font-bold text-white mt-1">11.8 Minutes</div>
                  <div className="text-[11px] text-emerald-300 mt-1">
                    Paramedic and Care Companion arriving simultaneously
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-emerald-100 font-medium">Hospital OPD Accompaniment</span>
                    <span className="font-bold text-emerald-300">100% In-Person</span>
                  </div>
                  <p className="text-[11px] text-emerald-200/90 leading-relaxed">
                    We stand in ticket queues, record doctor prescriptions, and coordinate medications directly into your client portal.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#061e13] border border-emerald-500/40 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-emerald-200">Hospital Tie-ups</div>
                    <div className="text-[11px] text-slate-300">Apollo, Manipal, Fortis, Max Healthcare</div>
                  </div>
                  <Stethoscope className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
