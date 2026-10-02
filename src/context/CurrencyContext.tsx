"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CurrencyCode = "USD" | "GBP" | "AED" | "CAD" | "AUD" | "INR";

interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  rateFromINR: number; // multiplier from INR
  label: string;
  flag: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  USD: {
    code: "USD",
    symbol: "$",
    rateFromINR: 0.0118,
    label: "USD ($) - United States",
    flag: "🇺🇸",
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    rateFromINR: 0.0093,
    label: "GBP (£) - United Kingdom",
    flag: "🇬🇧",
  },
  AED: {
    code: "AED",
    symbol: "AED ",
    rateFromINR: 0.0433,
    label: "AED - United Arab Emirates",
    flag: "🇦🇪",
  },
  CAD: {
    code: "CAD",
    symbol: "C$",
    rateFromINR: 0.0165,
    label: "CAD (C$) - Canada",
    flag: "🇨🇦",
  },
  AUD: {
    code: "AUD",
    symbol: "A$",
    rateFromINR: 0.0184,
    label: "AUD (A$) - Australia",
    flag: "🇦🇺",
  },
  INR: {
    code: "INR",
    symbol: "₹",
    rateFromINR: 1,
    label: "INR (₹) - India",
    flag: "🇮🇳",
  },
};

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  info: CurrencyInfo;
  formatPrice: (inrAmount: number, options?: { perMonth?: boolean }) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");

  const info = CURRENCIES[currency];

  const formatPrice = (inrAmount: number, options?: { perMonth?: boolean }): string => {
    const converted = inrAmount * info.rateFromINR;
    let formatted = "";

    if (currency === "INR") {
      formatted = inrAmount >= 100000 
        ? `₹${(inrAmount / 100000).toFixed(1)} Lakh`
        : `₹${inrAmount.toLocaleString("en-IN")}`;
    } else {
      const rounded = Math.round(converted);
      formatted = `${info.symbol}${rounded.toLocaleString("en-US")}`;
    }

    if (options?.perMonth) {
      formatted += "/mo";
    }

    return formatted;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, info, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
