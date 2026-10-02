import React from "react";
import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import {
  ShieldCheck,
  HeartHandshake,
  Lock,
  FileCheck2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1B3D] text-white border-t border-[#D4AF37]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative subtle ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0F5132]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Institutional Trust Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 mb-14 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#F3DC87]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Audited Escrow & RERA Ready</h4>
              <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                Client rental yields remitted directly via bank-grade escrow accounts with full TDS & Form 15CA/CB support.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#0F5132]/20 border border-[#2CD997]/30 text-[#2CD997]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">NABH & HIPAA Aligned Care</h4>
              <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                Parental medical telemetry and electronic health records encrypted with military-grade 256-bit encryption.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/15 border border-blue-400/30 text-blue-300">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Dual-Shield Guarantee</h4>
              <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                Zero proxy-contractors. Dedicated background-checked Property Stewards and Certified Clinical Care Companions.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 text-sm">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" size="lg" />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mt-3">
              Institutional-grade Property Asset Stewardship & Empathetic Parental Healthcare Concierge. Built exclusively for Non-Resident Indians across the USA, UK, UAE, Australia, and Canada.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Operating Hubs: Bengaluru &bull; Hyderabad &bull; Delhi NCR &bull; Pune</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#2CD997] shrink-0" />
                <span>24/7 NRI Dispatch & Time-zone Aligned Account Managers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>NRI Emergency Concierge: +91 800-SUSTUNE (+91 800-787-8863)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>concierge@sustunecare.com</span>
              </div>
            </div>
          </div>

          {/* Aegis Property Stewardship */}
          <div>
            <h5 className="text-[#F3DC87] font-serif text-base font-semibold mb-4 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Aegis Property
            </h5>
            <ul className="space-y-2.5 text-slate-300 text-xs">
              <li>
                <Link href="/aegis" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Tenant Scouting & KYC</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/aegis" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Rent Escrow & Repatriation</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/aegis" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Turnkey Maintenance & Fit-out</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/aegis" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Digital Inspection Reports</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/aegis" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Khata Mutation & Property Tax</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Sparsh Parental Health */}
          <div>
            <h5 className="text-[#2CD997] font-serif text-base font-semibold mb-4 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F5132]" />
              Sparsh Healthcare
            </h5>
            <ul className="space-y-2.5 text-slate-300 text-xs">
              <li>
                <Link href="/sparsh" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>24/7 SOS & Ambulance Dispatch</span>
                  <ArrowUpRight className="w-3 h-3 text-[#2CD997] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/sparsh" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Doctor Escorts & Summaries</span>
                  <ArrowUpRight className="w-3 h-3 text-[#2CD997] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/sparsh" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Routine Vitals & Lab Tests</span>
                  <ArrowUpRight className="w-3 h-3 text-[#2CD997] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/sparsh" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Medication Delivery & Sorting</span>
                  <ArrowUpRight className="w-3 h-3 text-[#2CD997] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/sparsh" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Warm Companionship Visits</span>
                  <ArrowUpRight className="w-3 h-3 text-[#2CD997] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Access & Client Hub */}
          <div>
            <h5 className="text-white font-serif text-base font-semibold mb-4 tracking-wide">
              Client Experience
            </h5>
            <ul className="space-y-2.5 text-slate-300 text-xs">
              <li>
                <Link href="/portal-preview" className="hover:text-[#F3DC87] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Dual-Shield Dashboard Demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F3DC87] transition-colors">
                  NRI Fee Calculator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F3DC87] transition-colors">
                  Book Virtual Video Consultation
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/918007878863?text=Hi%20Sustune%2C%20I%20would%20like%20to%20speak%20with%20an%20NRI%20care%20manager."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2CD997] hover:underline flex items-center gap-1 mt-2 font-medium"
                >
                  Direct WhatsApp NRI Desk &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Sustune Care Private Limited. All rights reserved. Registered under Indian Companies Act.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
              Privacy Policy & Health Data Protection
            </span>
            <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
              Terms of Asset Stewardship
            </span>
            <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
              SOC-2 & ISO 27001 Security
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
