"use client";

import React, { useState } from "react";
import {
  FileText,
  Download,
  Calendar,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  Camera,
  Droplets,
  Zap,
  Building,
  Maximize2,
  BadgeCheck,
  Printer,
} from "lucide-react";

export default function DigitalInspectionReport() {
  const [activeArea, setActiveArea] = useState<"living" | "master" | "kitchen" | "plumbing" | "balcony">("living");
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const reportMetadata = {
    property: "The Palms Villa 4B, Gachibowli Financial District",
    city: "Hyderabad, Telangana - PIN 500032",
    auditId: "SUS-HYD-2026-Q3-0894",
    date: "October 02, 2026",
    inspector: "K. Venkatesh, B.Tech Civil",
    license: "Licensed Asset Steward #AST-4412",
    healthScore: 96,
    status: "Grade A+ (Pristine)",
  };

  const areas = {
    living: {
      name: "Living Room & Foyer",
      score: "98/100",
      status: "Flawless",
      findings: [
        { item: "Italian Botticino Marble Flooring", status: "Pass", note: "Diamond polish intact, zero hairline fractures or grout erosion." },
        { item: "Concealed LED Cove Lighting", status: "Pass", note: "All 18 points functional. Voltage measured at standard 230V." },
        { item: "Main Teak Entrance Door & Yale Smart Lock", status: "Pass", note: "Battery level at 92%. Digital latch smooth, deadbolt engages tightly." },
        { item: "Wall Paint & Finish", status: "Pass", note: "Asian Paints Royale Luxury Emulsion. Zero scuffs or moisture marks." },
      ],
      photoUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      caption: "Living room facing East. Natural ventilation optimal, no dampness detected.",
    },
    master: {
      name: "Master Suite & Walk-in",
      score: "95/100",
      status: "Excellent",
      findings: [
        { item: "Engineered Walnut Hardwood Flooring", status: "Pass", note: "Zero cupping or moisture expansion detected along skirtings." },
        { item: "Daikin 2.0 Ton Inverter Split AC", status: "Pass", note: "Condenser coil cleansed. Delta-T cooling differential at healthy 11.2°C." },
        { item: "Soundproof UPVC Sliding Balcony Glazing", status: "Pass", note: "Acoustic EPDM rubber gasket sealing tight. Zero vibration." },
        { item: "Modular Walk-In Wardrobes", status: "Pass", note: "Soft-close Blum hinges inspected and lubricated." },
      ],
      photoUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
      caption: "Master Bedroom Suite: All electrical circuits load-tested and verified.",
    },
    kitchen: {
      name: "Gourmet Modular Kitchen",
      score: "94/100",
      status: "Optimal",
      findings: [
        { item: "Quartz Countertop & Backsplash", status: "Pass", note: "Acid resistance tested. Zero chips along under-mount sink." },
        { item: "Faber Auto-Clean Suction Chimney", status: "Pass", note: "Baffle filters degreased. Airflow volume checked at 1200 m³/hr." },
        { item: "Under-Sink RO Water Purifier", status: "Pass", note: "Sediment & carbon filters renewed. TDS output: 78 ppm (Ideal)." },
        { item: "Piped Natural Gas (PNG) Connection", status: "Pass", note: "Pressure test passed. Soap bubble leak test confirmed 100% negative." },
      ],
      photoUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      caption: "Modular Kitchen: Under-sink plumbing and RO drainage verified dry.",
    },
    plumbing: {
      name: "Plumbing & Moisture Radar",
      score: "97/100",
      status: "Certified Dry",
      findings: [
        { item: "Bathroom Wet Wall Moisture Radar", status: "Pass", note: "Thermal hygrometer reading: 0.4% (Threshold: < 1.2%). Zero seepage." },
        { item: "Grohe Concealed Cisterns & Flush Valves", status: "Pass", note: "Zero internal tank trickling. Water saving dual-flush calibrated." },
        { item: "Main Utility Water Pressure Booster Pump", status: "Pass", note: "Delivering stable 2.8 Bar pressure across all 4 en-suite showers." },
        { item: "Overhead Tank Float Valve & Level Sensor", status: "Pass", note: "Telemetry sensor syncing accurately with society control room." },
      ],
      photoUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      caption: "Infrared thermal scan of master bathroom plumbing shaft confirms zero hidden dampness.",
    },
    balcony: {
      name: "Terrace & Facade Drainage",
      score: "96/100",
      status: "High Integrity",
      findings: [
        { item: "Rainwater Drainage Gradient", status: "Pass", note: "Slope verified towards scupper drain. 0% stagnant pooling risk." },
        { item: "Toughened Glass & SS304 Railing Safety", status: "Pass", note: "Base anchoring bolts torqued to structural spec. Zero looseness." },
        { item: "External Weathercoat Anti-Fungal Paint", status: "Pass", note: "No micro-fissures or efflorescence on exterior chajjas." },
      ],
      photoUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      caption: "Terrace garden view. Drainage channels vacuumed and cleaned.",
    },
  };

  const currentArea = areas[activeArea];

  return (
    <section id="inspection-report" className="py-20 sm:py-28 bg-[#0B1B3D] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#F3DC87] border border-white/15 mb-3">
            <BadgeCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Forensic Transparency</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Sample Digital Inspection Report
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Experience what Sustune NRI property owners receive every quarter: high-resolution room-by-room photographic audits, moisture readings, and structural sign-offs.
          </p>
        </div>

        {/* Digital Report Viewer Mockup Container */}
        <div className="bg-white text-slate-900 rounded-3xl shadow-2xl border-4 border-[#D4AF37]/40 overflow-hidden">
          {/* Document Top Bar */}
          <div className="bg-[#060e20] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[#D4AF37] text-[#0B1B3D]">
                  OFFICIAL AUDIT REPORT
                </span>
                <span className="text-xs text-slate-400 font-mono">ID: {reportMetadata.auditId}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {reportMetadata.property}
              </h3>
              <p className="text-xs text-slate-300">{reportMetadata.city}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-slate-400">Overall Health Score</div>
                <div className="font-serif text-3xl font-bold text-[#F3DC87]">
                  {reportMetadata.healthScore} <span className="text-sm font-sans text-white">/ 100</span>
                </div>
                <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                  {reportMetadata.status}
                </div>
              </div>

              <button
                onClick={() => setIsPdfModalOpen(true)}
                className="bg-[#D4AF37] hover:bg-[#B79224] text-[#0B1B3D] text-xs font-bold py-2.5 px-4 rounded-xl flex items-center gap-2 shadow-md transition-all shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Export PDF</span>
              </button>
            </div>
          </div>

          {/* Audit Metadata Subheader */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Inspection Date: <strong>{reportMetadata.date}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span>Lead Auditor: <strong>{reportMetadata.inspector}</strong> ({reportMetadata.license})</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-blue-500" />
              <span>Moisture Level: <strong className="text-emerald-700">0.4% (Pass)</strong></span>
            </div>
          </div>

          {/* Room Navigation Tabs */}
          <div className="flex border-b border-slate-200 bg-slate-100/70 overflow-x-auto">
            {(Object.keys(areas) as Array<keyof typeof areas>).map((key) => {
              const area = areas[key];
              const isActive = activeArea === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveArea(key)}
                  className={`py-3.5 px-5 text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-2 border-b-2 ${
                    isActive
                      ? "border-[#0B1B3D] bg-white text-[#0B1B3D]"
                      : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
                >
                  <span>{area.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                    isActive ? "bg-[#0B1B3D] text-white" : "bg-slate-200 text-slate-600"
                  }`}>
                    {area.score}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main Inspection Body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Checklist Findings */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <h4 className="font-serif text-lg font-bold text-[#0B1B3D] flex items-center gap-2">
                  <span>{currentArea.name} Audit Checklist</span>
                </h4>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  {currentArea.status}
                </span>
              </div>

              <div className="space-y-3">
                {currentArea.findings.map((f, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        {f.item}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {f.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                      {f.note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Steward’s Recommendation:</strong> No immediate capital expenditure required. Scheduled for next routine quarterly re-test in January 2027.
                </span>
              </div>
            </div>

            {/* Right: Photographic Evidence & Geotag */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-md group">
                <img
                  src={currentArea.photoUrl}
                  alt={currentArea.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Timestamp & Geotag Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-xs">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span>GEO: 17.4401° N, 78.3489° E</span>
                    <span>11:34 AM IST</span>
                  </div>
                  <p className="font-medium text-xs mt-1 text-slate-100">
                    {currentArea.caption}
                  </p>
                </div>
              </div>

              {/* Inspector Signoff Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800">Digital Auditor Sign-Off:</span>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">
                    Verified Digital Hash
                  </span>
                </div>
                <div className="font-serif italic text-slate-700 text-sm">
                  &ldquo;I hereby certify that this property has been physically evaluated according to Sustune 80-Point Structural & Tenancy Protocols.&rdquo;
                </div>
                <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
                  Signed: K. Venkatesh (Civil Engineer, Reg #HYD-AST-4412)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Simulation Modal */}
      {isPdfModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white text-slate-900 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative border-2 border-[#D4AF37]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-serif font-bold text-lg text-[#0B1B3D]">
                  Certified Audit PDF Generated
                </h3>
              </div>
              <button
                onClick={() => setIsPdfModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1"
              >
                ✕
              </button>
            </div>

            <div className="py-6 text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <BadgeCheck className="w-9 h-9" />
              </div>
              <h4 className="font-bold text-base text-slate-900">
                Audit Report Ready for Download
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                The 24-page full high-resolution forensic audit report (including thermal moisture graphs, electrical impedance logs, and society dues ledger) has been compiled.
              </p>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 text-left max-w-sm mx-auto">
                <div>File: Sustune-Audit-{reportMetadata.auditId}.pdf</div>
                <div>Size: 14.2 MB (Signed 256-bit SHA)</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  window.print();
                  setIsPdfModalOpen(false);
                }}
                className="flex-1 bg-[#0B1B3D] hover:bg-[#122856] text-white font-semibold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save as PDF</span>
              </button>
              <button
                onClick={() => setIsPdfModalOpen(false)}
                className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
