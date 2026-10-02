"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Globe,
  Building,
  User,
  Mail,
  Lock,
} from "lucide-react";

function ContactFormInner() {
  const searchParams = useSearchParams();

  // Pre-fill state from URL params if arrived from calculator
  const initialInterest = searchParams.get("interest") || "bundle";
  const initialCity = searchParams.get("city") || "Bengaluru";

  const [nriLocation, setNriLocation] = useState<string>("USA");
  const [timezone, setTimezone] = useState<string>("PST (San Francisco / Seattle)");
  const [interest, setInterest] = useState<string>(initialInterest);
  const [city, setCity] = useState<string>(initialCity);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [preferredSlot, setPreferredSlot] = useState<string>("Evening (6:00 PM – 9:00 PM)");
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Timezone suggestions based on NRI location
  const timezonesByCountry: Record<string, string[]> = {
    USA: [
      "PST (San Francisco / Seattle / Los Angeles)",
      "EST (New York / Boston / Atlanta)",
      "CST (Chicago / Dallas / Austin)",
      "MST (Denver / Phoenix)",
    ],
    UK: ["GMT / BST (London / Manchester / Edinburgh)", "CET (Frankfurt / Paris / Amsterdam)"],
    UAE: ["GST (Dubai / Abu Dhabi)", "AST (Riyadh / Doha)"],
    Australia: [
      "AEST (Sydney / Melbourne / Brisbane)",
      "AWST (Perth)",
      "ACST (Adelaide)",
    ],
    Canada: ["EST (Toronto / Montreal)", "PST (Vancouver)", "CST (Calgary / Edmonton)"],
    Singapore: ["SGT (Singapore / Kuala Lumpur)", "HKT (Hong Kong)"],
  };

  useEffect(() => {
    if (timezonesByCountry[nriLocation]) {
      setTimezone(timezonesByCountry[nriLocation][0]);
    }
  }, [nriLocation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Generate WhatsApp message and redirect URL
  const generateWhatsAppUrl = () => {
    const interestLabel =
      interest === "bundle"
        ? "Dual-Shield Bundle (Property + Parents)"
        : interest === "aegis"
        ? "Aegis Property Stewardship"
        : "Sparsh Parental Healthcare";

    const text = encodeURIComponent(
      `Hi Sustune Care Concierge Desk,\n\nI am an NRI based in ${nriLocation} (${timezone}).\nI am interested in: *${interestLabel}* for my hometown *${city}*.\n\nName: ${
        fullName || "NRI Sponsor"
      }\nPhone: ${phone || "Via WhatsApp"}\nNotes: ${notes || "Looking for consultation."}\nPreferred Time: ${preferredSlot}\n\nPlease connect me with an NRI Care Director.`
    );

    return `https://wa.me/918007878863?text=${text}`;
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FBFBFB] relative min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B3D]/5 border border-[#0B1B3D]/10 text-xs font-semibold text-[#0B1B3D] mb-3">
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Time-Zone Synchronized Intake</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3D] tracking-tight">
            Schedule a Confidential NRI Consultation
          </h1>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Our Senior Care Directors align with your local overseas schedule across the Americas, Europe, Middle East, and Asia-Pacific.
          </p>
        </div>

        {!submitted ? (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 1. Location & Timezone Segmentation */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  1. Your Overseas Residence Location & Timezone
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {Object.keys(timezonesByCountry).map((country) => (
                    <button
                      type="button"
                      key={country}
                      onClick={() => setNriLocation(country)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                        nriLocation === country
                          ? "bg-[#0B1B3D] text-white border-[#0B1B3D] shadow-xs"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {country}
                    </button>
                  ))}
                </div>

                <div className="pt-1">
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  >
                    {(timezonesByCountry[nriLocation] || []).map((tz) => (
                      <option key={tz} value={tz}>
                        {tz}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 2. Service Interest */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Service Requirements in India
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setInterest("bundle")}
                    className={`p-4 rounded-2xl border text-left transition-all relative ${
                      interest === "bundle"
                        ? "bg-gradient-to-br from-[#0B1B3D] to-[#122856] text-white border-[#D4AF37] ring-2 ring-[#D4AF37]/50 shadow-md"
                        : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <span className="absolute top-2 right-2 text-[9px] font-extrabold uppercase tracking-wider bg-[#D4AF37] text-[#0B1B3D] px-1.5 py-0.5 rounded">
                      Save 15%
                    </span>
                    <Sparkles className="w-5 h-5 text-[#F3DC87] mb-2" />
                    <div className="text-xs font-bold">Dual-Shield Bundle</div>
                    <div className={`text-[10px] mt-1 ${interest === "bundle" ? "text-slate-300" : "text-slate-500"}`}>
                      Complete property stewardship + parental healthcare
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInterest("aegis")}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      interest === "aegis"
                        ? "bg-[#0B1B3D] text-[#F3DC87] border-[#D4AF37] ring-1 ring-[#D4AF37] shadow-sm"
                        : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <ShieldCheck className="w-5 h-5 text-[#D4AF37] mb-2" />
                    <div className="text-xs font-bold">Aegis Property Only</div>
                    <div className={`text-[10px] mt-1 ${interest === "aegis" ? "text-slate-300" : "text-slate-500"}`}>
                      Tenants, escrow rents, maintenance & taxes
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInterest("sparsh")}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      interest === "sparsh"
                        ? "bg-[#0F5132] text-white border-emerald-400 ring-1 ring-emerald-400 shadow-sm"
                        : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <HeartHandshake className="w-5 h-5 text-emerald-400 mb-2" />
                    <div className="text-xs font-bold">Sparsh Care Only</div>
                    <div className={`text-[10px] mt-1 ${interest === "sparsh" ? "text-emerald-200" : "text-slate-500"}`}>
                      24/7 SOS, hospital escort, vitals & companionship
                    </div>
                  </button>
                </div>
              </div>

              {/* 3. Hometown Hub */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  3. City in India Where Care / Property is Located
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {["Bengaluru", "Hyderabad", "Delhi NCR", "Pune", "Chennai"].map((c) => (
                    <button
                      type="button"
                      key={c}
                      onClick={() => setCity(c)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                        city === c
                          ? "bg-[#0B1B3D] text-white border-[#0B1B3D]"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Contact Information Inputs */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  4. Your Contact Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1 font-medium">Your Full Name:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Reddy"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1 font-medium">Email Address:</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. vikram@tech-corp.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1 font-medium">
                      Phone / WhatsApp Number (with country code):
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (415) 890-..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1 font-medium">
                      Preferred Video Call Slot in {nriLocation} Timezone:
                    </label>
                    <select
                      value={preferredSlot}
                      onChange={(e) => setPreferredSlot(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    >
                      <option>Morning (08:00 AM – 11:00 AM)</option>
                      <option>Afternoon (01:00 PM – 04:00 PM)</option>
                      <option>Evening (06:00 PM – 09:00 PM)</option>
                      <option>Weekend Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-600 mb-1 font-medium">
                    Brief Notes on Property or Parents’ Health (Optional):
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 4BHK apartment in Whitefield needing tenant scouting, and 79-year-old mother needing bi-weekly diabetes checks and doctor escorts."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Action Buttons: Dual Options (Submit or WhatsApp) */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-[#0B1B3D] hover:bg-[#122856] text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 border border-[#D4AF37]/50 transition-all group"
                >
                  <span>Request Video Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-[#0F5132] hover:bg-[#146c43] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 border border-emerald-400/40 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Connect Directly on WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Strict Non-Disclosure & HIPAA-level privacy guaranteed. No third-party data sharing.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-500 shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 text-[#0F5132] flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Consultation Request Logged
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#0B1B3D]">
                Thank You, {fullName || "Friend"}!
              </h2>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Your inquiry has been assigned to an NRI Senior Care Director for <strong>{city}</strong>. We will contact you at <strong>{email}</strong> within your selected window ({preferredSlot} {nriLocation} Time).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-xs text-left space-y-1.5 font-mono text-slate-700">
              <div>Reference Code: SUS-NRI-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div>Hub: {city} &bull; Service: {interest.toUpperCase()}</div>
              <div>Assigned Desk: NRI West Coast / Europe Unit</div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-[#0F5132] hover:bg-[#146c43] text-white font-bold text-xs flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Need Instant Answer? Ping WhatsApp</span>
              </a>

              <button
                onClick={() => setSubmitted(false)}
                className="py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center text-slate-500">Loading NRI Consultation Desk...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
