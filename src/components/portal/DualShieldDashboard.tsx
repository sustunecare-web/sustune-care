"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCurrency } from "@/context/CurrencyContext";
import {
  ShieldCheck,
  HeartHandshake,
  Building2,
  Activity,
  CreditCard,
  Wrench,
  FileText,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Download,
  PhoneCall,
  User,
  Heart,
  Droplets,
  PlusCircle,
  Pill,
  Stethoscope,
  Smile,
  ShieldAlert,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function DualShieldDashboard() {
  const { formatPrice, currency } = useCurrency();
  const [activeTab, setActiveTab] = useState<"real-estate" | "health-hub">("real-estate");
  const [selectedProperty, setSelectedProperty] = useState<number>(0);
  const [sosAlertSimulated, setSosAlertSimulated] = useState<boolean>(false);

  const properties = [
    {
      id: 1,
      name: "The Palms Villa 4B",
      microMarket: "Gachibowli Financial District, Hyderabad",
      type: "4BHK Independent Gated Villa (4,200 sq.ft)",
      monthlyRentINR: 85000,
      escrowStatus: "Paid & Remitted",
      lastRemittedDate: "Oct 05, 2026",
      remittanceAccount: "HDFC NRE A/C ending in ...9041",
      utrNumber: "HDFCNRE2026100588219",
      tdsDeductionINR: 26520, // 31.2% NRI TDS
      netRemittedINR: 58480,
      tenant: {
        name: "S. Krishnan & Family",
        role: "Principal Director, Microsoft India",
        cibilScore: 792,
        leaseTenure: "Aug 2025 – Jul 2027 (Year 2)",
        policeVerification: "Verified (Gachibowli PS #POL-891)",
        depositEscrowINR: 255000,
      },
      tickets: [
        {
          id: "TK-882",
          title: "RO Membrane Replacement & Purifier Flush",
          category: "Plumbing & Water",
          date: "Oct 01, 2026",
          status: "Completed",
          costINR: 2450,
          technician: "Ramesh Kumar (Sustune Civil Crew)",
        },
        {
          id: "TK-904",
          title: "Daikin VRV AC Scheduled Pre-Winter Servicing",
          category: "HVAC & Electrical",
          date: "Oct 08, 2026",
          status: "Scheduled",
          costINR: 1800,
          technician: "Authorized Daikin Service Partner",
        },
      ],
    },
    {
      id: 2,
      name: "Prestige Lakeside 1204",
      microMarket: "Whitefield, Bengaluru",
      type: "3BHK Luxury Tower Apartment (2,100 sq.ft)",
      monthlyRentINR: 110000,
      escrowStatus: "Paid & Remitted",
      lastRemittedDate: "Oct 05, 2026",
      remittanceAccount: "ICICI NRE A/C ending in ...3120",
      utrNumber: "ICICINRE2026100511894",
      tdsDeductionINR: 34320,
      netRemittedINR: 75680,
      tenant: {
        name: "Dr. Maya Nair",
        role: "Chief Scientific Officer, Biocon",
        cibilScore: 814,
        leaseTenure: "Dec 2025 – Nov 2027",
        policeVerification: "Verified (Whitefield PS #BLR-4011)",
        depositEscrowINR: 330000,
      },
      tickets: [
        {
          id: "TK-780",
          title: "Master Balcony Drain Scupper Cleaning",
          category: "Civil Maintenance",
          date: "Sep 28, 2026",
          status: "Completed",
          costINR: 950,
          technician: "Sustune Preventive Crew",
        },
      ],
    },
  ];

  const currentProp = properties[selectedProperty];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portal Top Header Bar */}
        <div className="bg-[#0B1B3D] text-white rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white p-1 border border-[#D4AF37]/50 shadow-md shrink-0">
              <Image
                src="/logo.png"
                alt="Sustune Care Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#0B1B3D]">
                  DUAL-SHIELD CLIENT PORTAL
                </span>
                <span className="text-xs text-slate-400">Live Client Simulation</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Welcome back, Vikram (Seattle, USA)
              </h1>
              <p className="text-xs text-slate-300">
                Assigned Account Director: <strong>Anand V.</strong> &bull; Emergency Response Desk: <strong>Active</strong>
              </p>
            </div>
          </div>

          {/* Quick Dual Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#060e20] border border-white/20 relative z-10">
            <button
              onClick={() => setActiveTab("real-estate")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "real-estate"
                  ? "bg-[#D4AF37] text-[#0B1B3D] shadow-md"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Real Estate Portfolio (Aegis)</span>
            </button>

            <button
              onClick={() => setActiveTab("health-hub")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "health-hub"
                  ? "bg-[#0F5132] text-white shadow-md border border-emerald-400/40"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Activity className="w-4 h-4 text-emerald-300" />
              <span>Parents Health Hub (Sparsh)</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: REAL ESTATE PORTFOLIO (AEGIS) */}
        {/* ========================================================================= */}
        {activeTab === "real-estate" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs text-slate-500 font-medium">Monthly Gross Yield</div>
                <div className="font-serif text-2xl font-bold text-[#0B1B3D] mt-1">
                  ₹1,95,000 <span className="text-xs font-sans text-slate-400">({formatPrice(195000)})</span>
                </div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>2 Properties 100% Occupied</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs text-slate-500 font-medium">Last Remittance Payout</div>
                <div className="font-serif text-2xl font-bold text-[#0B1B3D] mt-1">
                  Oct 05, 2026
                </div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                  Transferred via RTGS to NRE
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs text-slate-500 font-medium">Security Deposit in Escrow</div>
                <div className="font-serif text-2xl font-bold text-[#0B1B3D] mt-1">
                  ₹5,85,000
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Held in interest-bearing bank escrow
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs text-slate-500 font-medium">Next Structural Inspection</div>
                <div className="font-serif text-2xl font-bold text-[#0B1B3D] mt-1">
                  Jan 15, 2027
                </div>
                <div className="text-[11px] text-[#B79224] font-semibold mt-1">
                  Q4 Digital Audit & Monsoons check
                </div>
              </div>
            </div>

            {/* Property Selector Pills */}
            <div className="flex gap-3 overflow-x-auto pb-1">
              {properties.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProperty(idx)}
                  className={`py-3 px-5 rounded-2xl border text-left transition-all shrink-0 ${
                    selectedProperty === idx
                      ? "bg-[#0B1B3D] text-white border-[#0B1B3D] shadow-md"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="text-xs font-bold">{p.name}</div>
                  <div className={`text-[11px] ${selectedProperty === idx ? "text-slate-300" : "text-slate-500"}`}>
                    {p.microMarket}
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Property Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Rent Ledger & Escrow Remittance */}
              <div className="lg:col-span-7 space-y-6">
                {/* Remittance Ledger Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#0B1B3D]">
                        October 2026 Remittance Breakdown
                      </h3>
                      <p className="text-xs text-slate-500">{currentProp.name} &bull; {currentProp.microMarket}</p>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Escrow Cleared
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between items-center text-slate-700">
                      <span>Monthly Gross Rent Collected:</span>
                      <span className="font-bold text-[#0B1B3D]">
                        ₹{currentProp.monthlyRentINR.toLocaleString("en-IN")} ({formatPrice(currentProp.monthlyRentINR)})
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-slate-700">
                      <span>TDS Deducted at Source (Section 195 - 31.2%):</span>
                      <span className="font-semibold text-red-600">
                        -₹{currentProp.tdsDeductionINR.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-slate-700">
                      <span>Society Maintenance Retained:</span>
                      <span className="font-semibold text-slate-600">₹0 (Paid directly by tenant)</span>
                    </div>

                    <div className="pt-3 border-t border-slate-200 flex justify-between items-center text-sm">
                      <span className="font-bold text-slate-900">Net Remitted to NRE Account:</span>
                      <span className="font-serif text-xl font-bold text-emerald-700">
                        ₹{currentProp.netRemittedINR.toLocaleString("en-IN")} ({formatPrice(currentProp.netRemittedINR)})
                      </span>
                    </div>
                  </div>

                  {/* Bank Proof Box */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 text-slate-600 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Destination:</span>
                      <span className="font-semibold text-slate-900">{currentProp.remittanceAccount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Bank UTR Ref:</span>
                      <span className="font-semibold text-slate-900">{currentProp.utrNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Form 15CA/CB Filing:</span>
                      <span className="text-emerald-700 font-bold">Generated & Uploaded ✓</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-1">
                    <button
                      onClick={() => alert("Downloading Form 15CA Tax Certificate PDF...")}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B1B3D] text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-slate-200"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Form 15CA</span>
                    </button>
                    <button
                      onClick={() => alert("Downloading Monthly Statement...")}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B1B3D] text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-slate-200"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Monthly Statement</span>
                    </button>
                  </div>
                </div>

                {/* Maintenance Tickets Section */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#0B1B3D]">
                        Active Maintenance & Repairs
                      </h3>
                      <p className="text-xs text-slate-500">Corporate SLA: Maximum 48h resolution</p>
                    </div>
                    <button
                      onClick={() => alert("Opening ticket intake modal...")}
                      className="text-xs font-bold text-[#0B1B3D] hover:text-[#D4AF37] flex items-center gap-1.5"
                    >
                      <PlusCircle className="w-4 h-4 text-[#D4AF37]" />
                      <span>New Request</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {currentProp.tickets.map((t) => (
                      <div
                        key={t.id}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">
                              {t.id}
                            </span>
                            <span className="text-xs font-bold text-slate-900">{t.title}</span>
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {t.category} &bull; Technician: {t.technician}
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between text-xs">
                          <span
                            className={`font-semibold px-2 py-0.5 rounded-full text-[10px] ${
                              t.status === "Completed"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {t.status}
                          </span>
                          <span className="text-[11px] text-slate-600 sm:mt-1 font-mono">
                            ₹{t.costINR}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Tenant Dossier & Inspection Snapshot */}
              <div className="lg:col-span-5 space-y-6">
                {/* Tenant KYC Dossier */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="font-serif text-lg font-bold text-[#0B1B3D] flex items-center gap-2">
                      <User className="w-4 h-4 text-[#D4AF37]" />
                      <span>Verified Tenant Dossier</span>
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Tier 1 Corporate
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="text-slate-400 text-[11px]">Primary Tenant:</div>
                      <div className="font-bold text-slate-900 text-sm">{currentProp.tenant.name}</div>
                      <div className="text-slate-600">{currentProp.tenant.role}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                      <div className="p-2.5 rounded-xl bg-slate-50">
                        <div className="text-slate-400 text-[10px]">CIBIL Credit Score</div>
                        <div className="font-bold text-emerald-700 text-sm mt-0.5">
                          {currentProp.tenant.cibilScore} (Excellent)
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50">
                        <div className="text-slate-400 text-[10px]">Security Deposit</div>
                        <div className="font-bold text-slate-900 text-sm mt-0.5">
                          ₹{currentProp.tenant.depositEscrowINR.toLocaleString("en-IN")}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 text-slate-600 space-y-1.5">
                      <div className="flex justify-between">
                        <span>Lease Agreement:</span>
                        <strong className="text-slate-800">{currentProp.tenant.leaseTenure}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Police Verification:</span>
                        <strong className="text-emerald-700">{currentProp.tenant.policeVerification}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Latest Inspection Snapshot */}
                <div className="bg-[#0B1B3D] text-white rounded-3xl p-6 sm:p-7 border border-[#D4AF37]/50 shadow-md space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#F3DC87] uppercase tracking-wider">
                      Quarterly Audit
                    </span>
                    <span className="text-xs text-emerald-400 font-bold">96/100 Health Score</span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-white">
                    Q3 Structural & Tenancy Audit
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Evaluated by Lead Civil Steward K. Venkatesh on Oct 02, 2026. Zero wall seepage, electrical impedance balanced, smoke alarms verified.
                  </p>

                  <a
                    href="/aegis#inspection-report"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B1B3D] text-white text-xs font-bold border border-white/20 transition-all"
                  >
                    <span>View Full 80-Point Inspection Viewer</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: PARENT HEALTH HUB (SPARSH) */}
        {/* ========================================================================= */}
        {activeTab === "health-hub" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Top Parent Summary & SOS Trigger Alert */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-[#0F5132] shrink-0">
                    <HeartHandshake className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1B3D]">
                        Col. R.K. & Sunita Sharma
                      </h2>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Indiranagar 100ft Road, Bengaluru &bull; Sparsh VIP Concierge Tier
                    </p>
                    <div className="text-[11px] text-[#0F5132] font-semibold mt-1">
                      Assigned Primary Companion: <strong>Sister Mercy Varghese (RN)</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://wa.me/918007878863?text=Hi%20Sister%20Mercy%2C%20checking%20in%20on%20Dad's%20morning%20vitals."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#0F5132] text-xs font-bold border border-emerald-300 flex items-center gap-2 transition-all"
                  >
                    <span>WhatsApp Companion</span>
                  </a>
                </div>
              </div>

              {/* SOS Emergency Readiness Card */}
              <div className="lg:col-span-4 bg-[#0A3622] text-white rounded-3xl p-6 sm:p-7 border-2 border-emerald-400 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-bold text-emerald-300 tracking-wider">
                      24/7 Rapid Telemetry Grid
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">Emergency Response: STANDBY</h4>
                  <p className="text-xs text-emerald-100/90 mt-1">
                    Pre-cleared ICU at Manipal Hospital HAL Road (7 mins transit).
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSosAlertSimulated(!sosAlertSimulated);
                    }}
                    className="w-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <ShieldAlert className="w-4 h-4" />
                    <span>{sosAlertSimulated ? "Reset SOS Simulation" : "Test Live SOS Protocol"}</span>
                  </button>
                </div>
              </div>
            </div>

            {sosAlertSimulated && (
              <div className="p-4 rounded-2xl bg-red-50 border-2 border-red-500 text-red-950 text-xs flex items-start gap-3 animate-in zoom-in-95 duration-200">
                <ShieldAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-bold text-sm text-red-900">SOS SIMULATION ACTIVE: Dispatch Center Triaged</div>
                  <p>
                    Central Dispatcher <strong>Arun K.</strong> alerted. Paramedic rapid unit pinged at Domlur junction (ETA 8 mins). Automated SMS sent to Dr. Vikram in Seattle.
                  </p>
                </div>
              </div>
            )}

            {/* Vitals Telemetry Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                  <span>Blood Pressure</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">Optimal</span>
                </div>
                <div className="font-serif text-3xl font-bold text-[#0B1B3D] mt-1.5">
                  122 / 78 <span className="text-xs font-sans text-slate-400 font-normal">mmHg</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">Col. Sharma &bull; Checked Today 08:45 AM</div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                  <span>Fasting Glucose</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">Controlled</span>
                </div>
                <div className="font-serif text-3xl font-bold text-[#0B1B3D] mt-1.5">
                  108 <span className="text-xs font-sans text-slate-400 font-normal">mg/dL</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">Mrs. Sunita &bull; HbA1c 6.4% target</div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                  <span>Heart Rate / Pulse</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">Resting</span>
                </div>
                <div className="font-serif text-3xl font-bold text-[#0B1B3D] mt-1.5">
                  72 <span className="text-xs font-sans text-slate-400 font-normal">bpm</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">Sinus rhythm normal</div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                  <span>Blood Oxygen (SpO2)</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">High</span>
                </div>
                <div className="font-serif text-3xl font-bold text-[#0B1B3D] mt-1.5">
                  98 <span className="text-xs font-sans text-slate-400 font-normal">%</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">Ambient room air reading</div>
              </div>
            </div>

            {/* Health Hub Main Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Doctor Notes & Smart Pill Schedule */}
              <div className="lg:col-span-7 space-y-6">
                {/* Doctor Consult Record */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="font-serif text-lg font-bold text-[#0B1B3D] flex items-center gap-2">
                      <Stethoscope className="w-5 h-5 text-emerald-700" />
                      <span>Recent Clinical Consultation Report</span>
                    </h3>
                    <span className="text-[11px] text-slate-500">Escorted by Sister Mercy</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Dr. K. Hegde, MD DM (Cardiology)</div>
                        <div className="text-slate-600">Manipal Hospital, Old Airport Road, Bengaluru</div>
                      </div>
                      <span className="font-semibold text-slate-500 text-[11px]">Sep 29, 2026</span>
                    </div>

                    <p className="text-slate-700 leading-relaxed italic bg-white p-3 rounded-xl border border-slate-200">
                      &ldquo;Col. Sharma's echocardiogram shows good left ventricular function. Blood pressure is well titrated on Telmisartan 40mg. Advised to continue moderate evening walks and maintain low sodium intake. Next routine follow-up in 3 months.&rdquo;
                    </p>

                    <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-200">
                      <span className="text-emerald-700 font-bold">Prescription Digitized & Verified</span>
                      <button
                        onClick={() => alert("Downloading Dr. Hegde prescription PDF...")}
                        className="text-[#0B1B3D] font-bold hover:underline flex items-center gap-1"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Prescription (PDF)</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Smart Pill Dispenser Tracker */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="font-serif text-lg font-bold text-[#0B1B3D] flex items-center gap-2">
                      <Pill className="w-5 h-5 text-[#0F5132]" />
                      <span>Today’s Smart Medication Tracker</span>
                    </h3>
                    <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      Refill Status: Stocked for 18 Days
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-300">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="font-bold text-[#0F5132]">Morning (08:30 AM)</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="text-[11px] text-slate-700">
                        Telmisartan 40mg &bull; Metformin 500mg
                      </div>
                      <div className="text-[10px] text-emerald-800 font-bold mt-2">Taken with Breakfast ✓</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-300">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="font-bold text-[#0F5132]">Afternoon (01:30 PM)</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="text-[11px] text-slate-700">
                        Multivitamin &bull; Calcium + Vit D3
                      </div>
                      <div className="text-[10px] text-emerald-800 font-bold mt-2">Taken with Lunch ✓</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="font-bold text-slate-800">Night (08:30 PM)</span>
                        <Clock className="w-4 h-4 text-slate-400" />
                      </div>
                      <div className="text-[11px] text-slate-600">
                        Atorvastatin 10mg &bull; Glimepiride 1mg
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium mt-2">Pending Dinner (Alert set)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Companion Visit Diary */}
              <div className="lg:col-span-5 space-y-6">
                {/* Companion Visit Log */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="font-serif text-lg font-bold text-[#0B1B3D] flex items-center gap-2">
                      <Smile className="w-5 h-5 text-amber-500" />
                      <span>Latest Companion Visit Log</span>
                    </h3>
                    <span className="text-xs text-slate-500">Yesterday, 04:30 PM</span>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden h-48 border border-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80"
                      alt="Care Companion enjoying tea with senior"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#0B1B3D]/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Indiranagar Living Room
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Companion on Duty:</span>
                      <strong className="text-slate-900">Sister Mercy Varghese</strong>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Parent Mood & Energy:</span>
                      <strong className="text-emerald-700">9 / 10 (Cheerful & Active)</strong>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-600 italic">
                      &ldquo;Uncle showed me his old regiment photographs from 1974. We took a 35-minute stroll around the defense colony park. Assisted Aunty in setting up her FaceTime call with Rohan in Seattle.&rdquo;
                    </div>
                  </div>
                </div>

                {/* Upcoming Companion Schedule */}
                <div className="bg-[#0A3622] text-white rounded-3xl p-6 sm:p-7 border border-emerald-400 shadow-xs space-y-3">
                  <span className="text-[10px] uppercase font-bold text-emerald-300 tracking-wider">
                    Upcoming Schedule
                  </span>
                  <h4 className="font-serif text-base font-bold text-white">
                    Next Home Visit: Tomorrow, 10:00 AM
                  </h4>
                  <p className="text-xs text-emerald-100/90 leading-relaxed">
                    Sister Mercy is scheduled to accompany Mrs. Sharma for her bi-monthly diabetic lab sample collection at home, followed by organic grocery errand run.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
