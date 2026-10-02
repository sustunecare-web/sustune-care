import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  };

  const imageDimensions = {
    sm: 36,
    md: 46,
    lg: 58,
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-xl p-1"
    >
      {/* Official Sustune Care Logo Emblem */}
      <div
        className={`relative flex items-center justify-center shrink-0 ${sizeClasses[size]} rounded-2xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105 border border-[#D4AF37]/40 bg-white p-1`}
      >
        <Image
          src="/logo.png"
          alt="Sustune Care Logo"
          width={imageDimensions[size]}
          height={imageDimensions[size]}
          className="w-full h-full object-contain"
          priority
        />
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
