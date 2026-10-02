import React from "react";
import { Star, MapPin, Building, Heart, CheckCircle2, ShieldCheck, Quote } from "lucide-react";

export default function DiasporaTrust() {
  const testimonials = [
    {
      name: "Dr. Vikramaditya Reddy",
      role: "Interventional Cardiologist, NHS London",
      location: "London, UK",
      hub: "Hyderabad (Jubilee Hills & Gachibowli)",
      story:
        "Managing my 4BHK villa in Gachibowli while ensuring my 78-year-old diabetic father had hospital escorts at Apollo was an ongoing emotional nightmare from London. Sustune transformed everything. The Aegis team found an executive tenant within 18 days, and Sparsh's care companion Sister Mary personally accompanies Appa for every checkup. The peace of mind is priceless.",
      rating: 5,
      service: "Dual-Shield Bundle (Aegis + Sparsh)",
    },
    {
      name: "Ananya & Rohan Sengupta",
      role: "VP of Engineering & Staff AI Researcher",
      location: "San Jose, CA (Silicon Valley)",
      hub: "Bengaluru (Indiranagar & Whitefield)",
      story:
        "When mom had an acute vertigo episode at 2:00 AM India time, the Sparsh SOS protocol dispatched their paramedic and care steward in 12 minutes flat. They pre-checked her into Manipal Hospital before we even woke up in California. Furthermore, our Whitefield apartment is maintained with surgical precision. The portal inspection reports leave zero room for doubt.",
      rating: 5,
      service: "Sparsh Concierge & Aegis Stewardship",
    },
    {
      name: "Farhan Siddiqui",
      role: "Managing Director, Private Equity",
      location: "Dubai, UAE (DIFC)",
      hub: "Delhi NCR (DLF Phase 5, Gurugram)",
      story:
        "Most Indian property managers are unorganized brokers who disappear when there’s a water seepage or tenant conflict. Sustune's institutional escrows and quarterly photographic audits are Wall-Street grade. My rental proceeds arrive in my NRE account on the 5th of every month with Form 15CA already drafted. Truly exemplary.",
      rating: 5,
      service: "Aegis Complete Stewardship",
    },
  ];

  const metrics = [
    { label: "Assets Stewarded", value: "₹180Cr+", sub: "Across prime Tier 1 micro-markets" },
    { label: "Avg SOS Response", value: "< 14 Mins", sub: "Paramedic & Companion dispatch" },
    { label: "On-Time Rent Escrow", value: "99.8%", sub: "Automated 5th of each month" },
    { label: "Diaspora Trust Rating", value: "4.9 / 5.0", sub: "Verified reviews across 6 countries" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B3D]/5 border border-[#0B1B3D]/10 text-xs font-semibold text-[#0B1B3D] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Diaspora Validation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3D] tracking-tight">
            Trusted Across 6 Time Zones
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            From Silicon Valley to London and Dubai, see how global Indians protect their family homes and care for their aging parents with Sustune.
          </p>
        </div>

        {/* Diaspora Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#D4AF37]/50 transition-all text-center"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1B3D] mb-1">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">{m.label}</div>
              <div className="text-[11px] text-slate-500 mt-1">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FBFBFB] rounded-3xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Top Rating & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0B1B3D]/5 text-[#0B1B3D] border border-[#0B1B3D]/10">
                    {t.service}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#D4AF37]/30 mb-2" />

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.story}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200">
                <div className="font-bold text-sm text-[#0B1B3D]">{t.name}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
                <div className="flex items-center gap-1.5 mt-2 text-[11px] font-semibold text-[#0F5132]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>
                    {t.location} &bull; Hub: {t.hub}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* City Coverage Badges */}
        <div className="mt-16 p-6 rounded-2xl bg-[#0B1B3D] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 justify-center md:justify-start">
              <span>Primary Operational Hubs</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </h4>
            <p className="text-xs text-slate-300">
              Direct physical field stewardship teams located in top diaspora hometowns.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-center">
            {["Bengaluru (Whitefield & Indiranagar)", "Hyderabad (Hitec City & Jubilee Hills)", "Delhi NCR (Gurugram & South Delhi)", "Pune (Koregaon Park)", "Chennai (OMR & Adyar)"].map((hub, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-slate-200 font-medium"
              >
                {hub}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
