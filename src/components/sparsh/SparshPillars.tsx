import React from "react";
import {
  Ambulance,
  Stethoscope,
  Pill,
  Smile,
  CheckCircle2,
  PhoneCall,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function SparshPillars() {
  const pillars = [
    {
      id: "sos",
      title: "1. 24/7 Rapid SOS & Emergency Dispatch",
      subtitle: "Instant triage and physical presence when seconds matter most.",
      icon: Ambulance,
      accentBg: "bg-red-50 text-red-700 border-red-200",
      highlights: [
        "One-touch Smart SOS panic button for home and wearable pendant",
        "Average 11-14 minute paramedic response time in Bengaluru & Hyderabad",
        "Pre-authorized admission agreements with Apollo, Manipal, Fortis & Max",
        "Sustune Care Companion arrives physically at the ER within 30 minutes",
        "Live audio bridge connecting attending ER physician directly to NRI sponsor",
      ],
    },
    {
      id: "escort",
      title: "2. Doctor Escort & Health Concierge",
      subtitle: "Dignified, stress-free medical appointments without burdening relatives.",
      icon: Stethoscope,
      accentBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      highlights: [
        "Door-to-door sanitized private cab accompaniment by vetted Care Companion",
        "Management of hospital registration queues, billing counters, and paperwork",
        "Companion attends consultation, records doctor guidance and questions",
        "Prescriptions scanned & digitized into your client health dashboard within 2 hours",
        "Post-consultation debrief summary shared with NRI sponsor via voice memo",
      ],
    },
    {
      id: "medication",
      title: "3. Routine Vitals & Smart Medication Sorting",
      subtitle: "Preventive health telemetry that catches issues before hospitalizations occur.",
      icon: Pill,
      accentBg: "bg-blue-50 text-blue-800 border-blue-200",
      highlights: [
        "Bi-weekly home vitals checks (Blood Pressure, Sugar, ECG, SpO2, Heart Rate)",
        "Doorstep delivery of 100% verified authentic medications from licensed pharmacies",
        "Pill sorting into color-coded Morning/Noon/Night smart blister organizers",
        "At-home blood and urine diagnostic sample collections (Thyroid, HbA1c, Lipid)",
        "Automated refill trigger 7 days prior to medicine exhaustion",
      ],
    },
    {
      id: "companionship",
      title: "4. Empathetic Companionship & Errands",
      subtitle: "Combatting loneliness with warmth, intellect, and genuine affection.",
      icon: Smile,
      accentBg: "bg-amber-50 text-amber-800 border-amber-200",
      highlights: [
        "Weekly dedicated home visits for conversation, tea, chess, and memory recall",
        "Accompanied evening strolls in neighborhood parks or temple visits",
        "Patience-centered technology coaching (FaceTime, Zoom, YouTube setup)",
        "Escort for bank KYC, pension life certificate renewals, and shopping",
        "Personalized birthday and Diwali/festival celebration visits with thoughtful gifts",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0F5132] uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Compassion Backed By Rigor
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3D] tracking-tight mt-3">
            The Four Pillars of Sparsh Care
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every senior is matched with a dedicated, background-verified Care Companion and clinical nurse who treat them like family while maintaining hospital-grade accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`p-3 rounded-2xl border ${p.accentBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#0B1B3D]">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{p.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    {p.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0F5132]">Care Protocol: Active</span>
                  <Link
                    href="/contact?interest=sparsh"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F5132] hover:underline"
                  >
                    <span>Request Care Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
