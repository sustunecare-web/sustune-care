"use client";

import React, { useState } from "react";
import {
  Heart,
  Play,
  Clock,
  UserCheck,
  Award,
  Sparkles,
  Quote,
  ShieldCheck,
  CheckCircle,
  X,
} from "lucide-react";

export default function TrustedPresenceStory() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const companions = [
    {
      name: "Sister Mercy Varghese",
      title: "Senior Clinical Care Companion",
      qualifications: "B.Sc Nursing, BLS Certified, 14 Years Geriatric ICU Experience",
      hub: "Bengaluru Hub",
      photo: "https://images.unsplash.com/photo-1594824813583-37651a2d659d?auto=format&fit=crop&w=500&q=80",
      quote:
        "When I escort Col. Sharma to his cardiologist, I don't just hold his file. I hold his arm, listen to his Army stories, and make sure he feels respected every second. His son in Seattle sleeps peacefully knowing I am there.",
    },
    {
      name: "Rahul Deshmukh, MSW",
      title: "Senior Wellness & Tech Companion",
      qualifications: "Master of Social Work (Gerontology), 7 Years Senior Advocacy",
      hub: "Hyderabad Hub",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
      quote:
        "Loneliness is more damaging than high blood pressure. Setting up a trouble-free iPad FaceTime call or accompanying Aunty for her evening stroll in KBR Park restores that spark of joy they miss when kids live abroad.",
    },
    {
      name: "Dr. Priya Nair, MD",
      title: "Head of Geriatric Tele-Triage",
      qualifications: "MD Internal Medicine, Former Senior Consultant at Fortis",
      hub: "Central Clinical Desk",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
      quote:
        "Our telemetry algorithms flag subtle changes in systolic trends or blood sugar before they escalate into emergency admissions. We act early, decisively, and always with profound empathy.",
    },
  ];

  const timeline = [
    {
      time: "08:30 AM",
      title: "Gentle Morning Vitals & Tea Check-In",
      desc: "Companion arrives, checks BP and SpO2 with clinical monitors, confirms breakfast, and organizes today's medication tray.",
    },
    {
      time: "11:00 AM",
      title: "Private Sanitized Hospital Escort",
      desc: "Escorting parents to Manipal Hospital in an air-conditioned cab, navigating registration, and sitting through the doctor consultation.",
    },
    {
      time: "04:30 PM",
      title: "Park Stroll & Intellectual Conversation",
      desc: "A relaxed 45-minute stroll in the community garden, sharing memories, doing light stretching, and discussing books or news.",
    },
    {
      time: "08:00 PM",
      title: "Digital Diary & NRI Sponsor Debrief",
      desc: "Clinical summary, prescription photos, and a cheerful video memo uploaded to your private client portal.",
    },
  ];

  return (
    <section id="storytelling" className="py-20 sm:py-28 bg-[#FBFBFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F5132]/10 border border-[#0F5132]/20 text-xs font-semibold text-[#0F5132] mb-3">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Human-Centric Empathy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3D] tracking-tight">
            &ldquo;A Trusted Presence Back Home&rdquo;
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Technology enables communication, but only genuine human affection can cure the ache of distance. Discover the caretakers who treat your parents like their own.
          </p>
        </div>

        {/* Video Feature Showcase Banner */}
        <div className="mb-20 rounded-3xl overflow-hidden bg-[#0B1B3D] text-white shadow-2xl relative border-2 border-[#D4AF37]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <span className="text-xs uppercase font-bold text-[#F3DC87] tracking-widest">
                Documentary Story
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                How Suresh Found Peace in London While His 82-Year-Old Mother Thrived in Bengaluru
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                &ldquo;Before Sustune, I was constantly on edge in London, wondering if Amma remembered to take her evening insulin. Meeting Sister Mercy changed our lives. Amma now calls her her second daughter, and their laughter over evening filter coffee is something money cannot buy.&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="bg-[#D4AF37] hover:bg-[#B79224] text-[#0B1B3D] font-bold py-3.5 px-6 rounded-xl flex items-center gap-2.5 transition-all shadow-lg text-xs sm:text-sm"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch the 3-Minute Story</span>
                </button>
                <span className="text-xs text-slate-400">Filmed in Bengaluru &bull; 4K</span>
              </div>
            </div>

            {/* Video Thumbnail */}
            <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[300px] cursor-pointer group" onClick={() => setVideoModalOpen(true)}>
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                alt="Elderly Indian mother laughing warmly with nurse companion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#0B1B3D] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Care Companions */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B3D]">
              Meet Your Parents’ Care Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Every Sustune Care Companion undergoes triple-tier background vetting, police verification, and hospital geriatric training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companions.map((c, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="relative mb-5 rounded-2xl overflow-hidden h-56">
                    <img
                      src={c.photo}
                      alt={c.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-[#0B1B3D]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">
                      {c.hub}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#0B1B3D]">{c.name}</h4>
                  <div className="text-xs font-semibold text-[#0F5132] mt-0.5">{c.title}</div>
                  <div className="text-[11px] text-slate-500 mt-1 mb-4 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{c.qualifications}</span>
                  </div>

                  <p className="text-xs text-slate-600 italic leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Background Verified
                  </span>
                  <span className="text-slate-400">CPR/BLS Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* A Day in the Life Timeline */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold text-[#0F5132] uppercase tracking-wider">
              Care Continuity
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B3D] mt-1">
              A Typical Day With Sparsh Care
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-mono font-bold text-[#0F5132] mb-1">
                  {item.time}
                </div>
                <h4 className="font-bold text-sm text-[#0B1B3D] mb-2">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Simulation */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-[#0B1B3D] text-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative border border-[#D4AF37]">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-video rounded-2xl overflow-hidden bg-black relative mb-4 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
                alt="Documentary video preview"
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute text-center p-6 bg-black/60 rounded-2xl backdrop-blur-sm max-w-md">
                <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <h4 className="font-serif text-lg font-bold text-white mb-1">
                  &ldquo;They are our eyes, ears, and hearts back home.&rdquo;
                </h4>
                <p className="text-xs text-slate-300">
                  Documentary excerpt: Dr. Vikramaditya Reddy & Sister Mercy sharing the journey of parental care from London to Bengaluru.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>Sustune Care Documentary Series &bull; 4K Ultra HD</span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="bg-[#D4AF37] text-[#0B1B3D] font-bold py-2 px-4 rounded-lg"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
