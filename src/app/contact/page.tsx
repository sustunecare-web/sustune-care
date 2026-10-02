import React from "react";
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Book NRI Consultation | Sustune Care",
  description:
    "Schedule a confidential virtual consultation with a dedicated NRI Care Director. Time-zone synchronized for the USA, UK, UAE, Australia, and Canada.",
};

export default function ContactPage() {
  return <ContactForm />;
}
