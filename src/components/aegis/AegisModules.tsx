import React from "react";
import {
  KeyRound,
  FileCheck,
  Wrench,
  Scale,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function AegisModules() {
  const modules = [
    {
      id: "scouting",
      title: "1. Institutional Tenant Scouting",
      subtitle: "Never suffer through bad tenants, unverified sub-letting, or delayed payments.",
      icon: KeyRound,
      color: "border-[#D4AF37]",
      accentBg: "bg-[#D4AF37]/10 text-[#B79224]",
      highlights: [
        "CIBIL & Experian Credit Bureau scoring (min 750 threshold)",
        "Corporate HR verification (MNCs, tech firms & consulates)",
        "Mandatory local police jurisdiction tenant background verification",
        "High-definition staging photography & 360° virtual tours",
        "Aadhaar-based e-Stamp and legally enforceable digital lease execution",
      ],
    },
    {
      id: "rental",
      title: "2. Active Rental Management & Escrow",
      subtitle: "Automated cash flows directly into your NRE/NRO account without timezone friction.",
      icon: FileCheck,
      color: "border-blue-500",
      accentBg: "bg-blue-50 text-blue-800",
      highlights: [
        "Escrow collection with guaranteed transfer on the 5th of every month",
        "Automated TDS deduction calculations and Form 15CA/CB documentation",
        "Society maintenance, electricity, and water bill reconciliation",
        "Automated annual rental escalation enforcement (standard 5-8% YoY)",
        "Formal legal delinquency notices dispatched on Day 7 of default",
      ],
    },
    {
      id: "maintenance",
      title: "3. Turnkey Maintenance & Fit-outs",
      subtitle: "Corporate civil and interior engineering with zero proxy-contractor inflation.",
      icon: Wrench,
      color: "border-emerald-500",
      accentBg: "bg-emerald-50 text-emerald-800",
      highlights: [
        "Fixed-rate transparent rate cards for electrical, plumbing & HVAC",
        "Pre-monsoon roof and balcony waterproofing diagnostics",
        "Deep industrial chemical sanitization & professional paint restoration",
        "Turnkey modular kitchen and wardrobe installation for new handovers",
        "Strict 48-hour turnaround SLA for standard maintenance tickets",
      ],
    },
    {
      id: "legal",
      title: "4. Global Sourcing & Legal/Tax Advisory",
      subtitle: "Protecting ownership integrity and sovereign documentation in India.",
      icon: Scale,
      color: "border-purple-500",
      accentBg: "bg-purple-50 text-purple-800",
      highlights: [
        "Annual municipal property tax (BBMP, GHMC, MCD) assessment & filing",
        "Khata / Patta transfer, mutation, and legal title due diligence",
        "Updated Encumbrance Certificates (EC) pulled bi-annually",
        "FEMA compliance and RBI repatriation guidance for NRI accounts",
        "Legal advisory panel for tenancy disputes and encroachment prevention",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0B1B3D] uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            End-To-End Infrastructure
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3D] tracking-tight mt-3">
            The Four Aegis Operational Modules
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Engineered from ground up to satisfy the high compliance standards of NRI property owners across North America, Europe, the Middle East, and Asia-Pacific.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`p-3 rounded-2xl ${m.accentBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#0B1B3D]">
                        {m.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{m.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    {m.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">Standard SLA: Guaranteed</span>
                  <Link
                    href="/contact?interest=aegis"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1B3D] hover:text-[#D4AF37] transition-colors"
                  >
                    <span>Inquire for Property</span>
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
