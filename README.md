# Sustune Care — Dual-Shield Stewardship for Global NRIs
> *"Care for your property. Care for your parents. Peace of mind for you."*

---

## 🏛️ Executive Summary & Architectural Overview

**Sustune Care** is an institutional-grade, full-stack web application designed specifically for Non-Resident Indians (NRIs) residing in the United States, United Kingdom, United Arab Emirates, Australia, Canada, and Singapore. 

It resolves the chronic **"Anxiety of Distance"** by providing a unified dual-shield framework:
1. **Aegis Division**: Institutional Property Asset Stewardship (tenant vetting, automated bank escrow payouts, TDS Form 15CA/CB documentation, and 80-point quarterly digital forensic audits).
2. **Sparsh Division**: Empathetic Parental Healthcare Concierge (24/7 Rapid SOS triage, dedicated hospital doctor escorts, bi-weekly vitals telemetry, smart blister medication sorting, and joyful companionship).

Built using **React 18 / 19**, **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Lucide React**.

---

## 🎨 Design System & Visual Palette

| Token | Hex Code | Purpose & Aesthetic Application |
|---|---|---|
| **Primary Dark** | `#0B1B3D` | Deep Royal Navy — Sovereign authority, institutional trust |
| **Accent Primary** | `#D4AF37` | Brushed Champagne Gold — Elite wealth management, prestige |
| **Secondary Accent** | `#0F5132` | Deep Wellness Emerald — Clinical vitality, compassionate health |
| **Neutral Canvas** | `#FBFBFB` | Off-White — Calming, distraction-free readability |
| **Slate Charcoal** | `#1E293B` | High-contrast typography adhering to WCAG 2.1 AA accessibility |

---

## 🗺️ Core Architecture & Routes

### 1. `/` — Dual-Hero Landing Page
- **Interactive Dual-Hero (`<DualHero />`)**: Interactive switch between *Dual-Shield*, *Aegis (Property)*, and *Sparsh (Parental Care)* with dynamic ambient lighting, metrics, and targeted value points.
- **Anxiety of Distance Matrix (`<AnxietyOfDistance />`)**: Side-by-side contrast revealing the real emotional and financial costs of ad-hoc reliance on relatives versus Sustune's institutional SLAs.
- **Dual Showcase (`<DualShowcase />`)**: Side-by-side comparative tabbed feature breakdown for both divisions.
- **Interactive TCO & Care Estimator (`<TCOEstimator />`)**: Dynamic calculator factoring city, rental yield, care tier, currency conversion (USD, GBP, AED, CAD, AUD, INR), and estimated annual losses prevented.
- **Diaspora Trust (`<DiasporaTrust />`)**: Verified NRI diaspora case studies from London, Silicon Valley, and Dubai across Bengaluru, Hyderabad, and Delhi NCR.

### 2. `/aegis` — Property Stewardship Page
- **Four Core Modules (`<AegisModules />`)**:
  1. *Corporate Tenant Scouting & Police KYC*
  2. *Active Rental Management & Bank-Grade Escrow*
  3. *Turnkey Maintenance & Fit-outs (48h SLA)*
  4. *Global Sourcing & Legal/Tax Advisory (Patta/Khata & Form 15CA)*
- **Interactive Pricing Comparison Table (`<AegisPricingTable />`)**: Comprehensive comparison between *"Tenant Scouting Only"* vs *"Complete Aegis Management"* with monthly/annual billing toggles.
- **Sample Digital Inspection Report Viewer Mockup (`<DigitalInspectionReport />`)**: Room-by-room forensic audit viewer (Living Room, Master Suite, Gourmet Kitchen, Plumbing & Moisture Radar, Balcony), geotagged photos, moisture meter logs, civil engineer sign-off, and PDF export modal.

### 3. `/sparsh` — Parental Healthcare Page
- **The Four Pillars (`<SparshPillars />`)**:
  1. *24/7 Rapid SOS & Emergency Dispatch*
  2. *Doctor Escorts & Hospital Concierge*
  3. *Routine Vitals Telemetry & Smart Medication Sorting*
  4. *Empathetic Companionship & Errands*
- **Live Care Plan Configurator (`<CarePlanConfigurator />`)**: Real-time slider and tier configurator for single parent or couple, vitals frequency, doctor escorts, companion visits, and blister pill packaging with live currency conversion.
- **Emotional Storytelling Module (`<TrustedPresenceStory />`)**: *"A Trusted Presence Back Home"* featuring vetted caregiver bios (Sister Mercy, Rahul Deshmukh, Dr. Priya Nair), interactive daily timeline, and documentary video modal.

### 4. `/portal-preview` — Dual-Shield Dashboard Demo
- **Real Estate Portfolio Tab (Aegis)**:
  - Multi-property switcher (*The Palms Villa 4B, Hyderabad* and *Prestige Lakeside Penthouse, Bengaluru*).
  - Monthly rent escrow ledger with TDS deduction (31.2%) and RTGS remittance proof to NRE account.
  - Active maintenance ticket tracker with costs and technician details.
  - Corporate tenant dossier with CIBIL score and police verification.
- **Parent Health Hub Tab (Sparsh)**:
  - Beneficiary profile: Col. R.K. & Sunita Sharma (Indiranagar, Bengaluru).
  - Vitals telemetry dashboard with real-time status (BP 122/78, Glucose 108 mg/dL, Heart Rate 72 bpm, SpO2 98%).
  - Doctor consultation reports (Cardiologist notes from Manipal Hospital) with prescription PDF download.
  - Smart medication pill organizer with intake confirmations.
  - Companion visit log with mood rating (9/10), photo, and visit summary.
  - Interactive **Test Live SOS Protocol** simulation.

### 5. `/contact` — Lead Intake & Consultation Desk
- Multi-step segmentation for NRI location (USA, UK, UAE, Australia, Canada, Singapore) with automatic local timezone alignment.
- Division selector with automatic 15% Dual-Shield Bundle savings.
- City selector (Bengaluru, Hyderabad, Delhi NCR, Pune, Chennai).
- **Direct WhatsApp Web Redirection**: Pre-populates formatted inquiry message directly to the 24/7 NRI concierge desk.

---

## 🚀 Running Locally

```bash
# Navigate to the project directory
cd C:\Users\shiv0\.gemini\antigravity-ide\scratch\sustune-care

# Install dependencies (already completed)
npm install

# Start development server
npm run dev

# App will be accessible at:
http://localhost:3000
```
