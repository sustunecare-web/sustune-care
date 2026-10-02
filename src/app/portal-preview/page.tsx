import React from "react";
import type { Metadata } from "next";
import DualShieldDashboard from "@/components/portal/DualShieldDashboard";

export const metadata: Metadata = {
  title: "Dual-Shield Portal Demo | Sustune Care Client Hub",
  description:
    "Interactive preview of the Sustune Care client portal. Monitor high-yield real estate escrows and parental vital signs with 24/7 telemetry across continents.",
};

export default function PortalPreviewPage() {
  return <DualShieldDashboard />;
}
