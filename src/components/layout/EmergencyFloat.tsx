"use client";

import React, { useState } from "react";
import { PhoneCall, ShieldAlert, MessageCircle, X, CheckCircle2, AlertTriangle } from "lucide-react";

export default function EmergencyFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [sosModalOpen, setSosModalOpen] = useState(false);
  const [sosSimulating, setSosSimulating] = useState(false);
  const [sosTriggered, setSosTriggered] = useState(false);

  const handleSimulateSOS = () => {
    setSosSimulating(true);
    setTimeout(() => {
      setSosSimulating(false);
      setSosTriggered(true);
    }, 1800);
  };

  const resetSOS = () => {
    setSosTriggered(false);
    setSosModalOpen(false);
  };

  return (
    <>
      {/* Floating Action Hub */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {isOpen && (
          <div className="bg-[#0B1B3D] border border-[#D4AF37]/50 rounded-2xl p-4 shadow-2xl w-80 text-white animate-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <h4 className="font-semibold text-sm">24/7 NRI Emergency Response</h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 mt-2.5 mb-3 leading-relaxed">
              Immediate triage and field dispatch across Bengaluru, Hyderabad, and Delhi NCR.
            </p>

            <div className="space-y-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSosModalOpen(true);
                }}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>Trigger Sparsh SOS Alert (Demo)</span>
              </button>

              <a
                href="https://wa.me/918007878863?text=Hi%20Sustune%20Care%2C%20I%20need%20urgent%20assistance%20for%20my%20parents%20in%20India."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0F5132] hover:bg-[#146c43] text-white font-semibold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 border border-[#2CD997]/40 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>WhatsApp Care Concierge</span>
              </a>

              <a
                href="tel:+918007878863"
                className="w-full bg-white/10 hover:bg-white/15 text-slate-200 text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Hotline: +91 800-SUSTUNE</span>
              </a>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <div className="flex items-center gap-2">
          {!isOpen && (
            <span className="hidden md:inline-flex items-center gap-1.5 bg-[#0B1B3D] text-white text-xs font-semibold py-1.5 px-3 rounded-full shadow-lg border border-[#D4AF37]/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              NRI Quick Desk
            </span>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0B1B3D] via-[#122856] to-[#0F5132] text-white flex items-center justify-center shadow-xl border-2 border-[#D4AF37] hover:scale-105 active:scale-95 transition-all group focus:outline-none"
            aria-label="Open emergency assistance"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#F3DC87]" />
            ) : (
              <div className="relative">
                <ShieldAlert className="w-6 h-6 text-[#F3DC87]" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0B1B3D] animate-ping" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* SOS Modal Demo */}
      {sosModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-[#0B1B3D] text-white border border-[#D4AF37] rounded-3xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={resetSOS}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center mb-3">
                <ShieldAlert className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Sparsh 24/7 Rapid SOS Protocol
              </h3>
              <p className="text-xs text-slate-300 mt-1.5">
                Simulate how Sustune triggers instant triage, hospital pre-alert, and dedicated paramedic dispatch.
              </p>
            </div>

            {!sosTriggered ? (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-2 text-slate-200">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Target Hub:</span>
                    <span className="font-semibold text-white">Bengaluru Central / Indiranagar</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Response SLA:</span>
                    <span className="font-semibold text-emerald-400">&lt; 15 mins to residence</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Partner Hospitals:</span>
                    <span className="font-semibold text-white">Manipal, Apollo, Fortis ICU</span>
                  </div>
                </div>

                <button
                  onClick={handleSimulateSOS}
                  disabled={sosSimulating}
                  className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-75"
                >
                  {sosSimulating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Broadcasting to City Emergency Grid...</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-5 h-5" />
                      <span>Test Live SOS Protocol (Demo)</span>
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-4 animate-in zoom-in-95 duration-200">
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-100 text-xs space-y-3">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Protocol Initiated Successfully</span>
                  </div>
                  <p className="leading-relaxed">
                    1. <strong>Triage Physician</strong> alerted via secure telemetry.
                    <br />
                    2. <strong>Care Companion (Sister Mercy)</strong> dispatched via rapid transit.
                    <br />
                    3. <strong>Pre-authenticated ICU bed</strong> reserved at partner hospital.
                    <br />
                    4. <strong>Live SMS & WhatsApp Bridge</strong> opened with NRI Sponsor (USA).
                  </p>
                </div>

                <button
                  onClick={resetSOS}
                  className="w-full bg-[#122856] hover:bg-[#1B3874] border border-[#D4AF37]/50 text-white font-semibold py-3 rounded-xl text-sm"
                >
                  Close Demo & Return
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
