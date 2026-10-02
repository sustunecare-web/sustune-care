import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
}

export default function BrandLogo({
  variant = "dark",
  size = "md",
  withTagline = true,
}: BrandLogoProps) {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link href="/" className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg p-1">
      {/* Dual Shield SVG Crest */}
      <div className={`relative flex items-center justify-center ${sizeClasses[size]} transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F3DC87" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#A8821B" />
            </linearGradient>
            <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2CD997" />
              <stop offset="60%" stopColor="#0F5132" />
              <stop offset="100%" stopColor="#082A1A" />
            </linearGradient>
            <linearGradient id="navyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B3260" />
              <stop offset="100%" stopColor="#0B1B3D" />
            </linearGradient>
          </defs>

          {/* Outer Shield: Aegis Sovereign Crest */}
          <path
            d="M50 4 L86 16 C86 52 70 82 50 96 C30 82 14 52 14 16 L50 4 Z"
            fill="url(#navyGrad)"
            stroke="url(#goldGrad)"
            strokeWidth="3.5"
          />

          {/* Inner Golden Rib */}
          <path
            d="M50 12 L78 22 C78 50 64 74 50 86 C36 74 22 50 22 22 L50 12 Z"
            fill="none"
            stroke="url(#goldGrad)"
            strokeWidth="1.2"
            opacity="0.6"
          />

          {/* Inner Heart & Care Shield: Sparsh Wellness */}
          <path
            d="M50 32 C58 24 70 28 70 38 C70 54 50 68 50 68 C50 68 30 54 30 38 C30 28 42 24 50 32 Z"
            fill="url(#emeraldGrad)"
            stroke="#F3DC87"
            strokeWidth="1.5"
          />

          {/* Center Sparkle Point */}
          <circle cx="50" cy="46" r="3" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-serif tracking-tight font-bold leading-none ${textSizes[size]} ${
            isLight ? "text-white" : "text-[#0B1B3D]"
          }`}
        >
          SUSTUNE <span className="text-[#D4AF37] font-semibold">CARE</span>
        </span>
        {withTagline && (
          <span
            className={`text-[9px] uppercase tracking-[0.2em] font-medium mt-1 ${
              isLight ? "text-slate-300" : "text-slate-500"
            }`}
          >
            Aegis &bull; Sparsh &bull; NRIs
          </span>
        )}
      </div>
    </Link>
  );
}
