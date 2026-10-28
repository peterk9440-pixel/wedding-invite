# Royal Wedding Invitation Website 👑✨
### Theme: Midnight Emerald, Champagne Gold & Warm Ivory Luxury

A complete, production-ready, cinematic Indian wedding invitation web application built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Supabase (PostgreSQL, Auth, Storage)**.

---

## 🌟 Highlights & Key Features

- **Cinematic Visual Design**: Midnight Emerald (`#102B26`), Forest Green (`#183B32`), Champagne Gold (`#D6B779`), Warm Ivory (`#F8F4EB`), and Bronze (`#92744A`).
- **11 Mandatory Sections (in exact sequence)**:
  1. **Cinematic Welcome Screen**: Animated gold borders, film grain, light sweeps, invocation, couple names, and "Enter Invitation" button.
  2. **Groom & Bride Profile**: High-resolution couple portrait, typography with masked image reveal, family titles, and invitation message.
  3. **Our Story**: Romantic timeline with milestone photographs, dates, and chapters.
  4. **Wedding Countdown**: Real-time animated days, hours, minutes, and seconds based on configured ceremony date, time, and timezone.
  5. **Wedding Ceremony**: Unified ceremony section with photography, auspicious date, time, venue, Google Maps directions, and quick RSVP button (no separate event cards).
  6. **Scrollable Photo Gallery ("Moments We Cherish")**: Horizontal scroll track with smooth swipe gestures, navigation arrows, progress bar, image captions, and full-screen lightbox.
  7. **Groom & Bride Family Gallery ("Two Families, One Beautiful Beginning")**: Dedicated sections for the Groom's Family and Bride's Family with photographs, lineage titles, and warm blessings.
  8. **RSVP Form**: Guest full name, WhatsApp number with country code picker, attendance status, party size, optional blessing message, duplicate prevention, and celebratory confetti.
  9. **Contact and Social Links**: Direct WhatsApp Concierge, Instagram Memories, Accommodations helpdesk, and custom channels.
  10. **Final Thank-You Section**: Sacred blessing "॥ शुभ विवाह ॥", couple names, and heartfelt gratitude message.
  11. **VVR Creations Footer**: "Designed by VVR Creations" with a clickable WhatsApp link, editable number, and prefilled inquiry message.
- **Secure Admin Dashboard (`/admin`)**:
  - Protected with Supabase Auth (and demo passcode bypass for immediate testing).
  - Live editor tabs for Couple Profile, Ceremony, Our Story, Photo Gallery, Family Profiles, Theme colors, Social Links, VVR Creations footer, and Groom Alerts.
  - RSVP Management: live search, status filters (Attending / Declined), guest counts, and one-click CSV export.
  - Image upload support with Supabase Storage `wedding-assets`.
  - Instant live website updates without redeployment.
- **Automated Groom RSVP Notifications**:
  - Integrates with Meta WhatsApp Business Cloud API to immediately dispatch alert to the groom's phone when an RSVP is received.
  - Automatic fallback to Email (Resend) if WhatsApp credentials are not configured.
  - Complete notification audit log table tracking delivery status (`delivered`, `failed`, `simulated_offline`).
  - Groom's personal notification phone number is kept strictly separate from the VVR Creations designer contact number.

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- Node.js 18+ (tested with Node 20.18.0)
- npm or pnpm

### 2. Installation
```bash
# Clone the repository and enter the directory
cd "my website"

# Install dependencies
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your credentials:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Groom RSVP Notifications
GROOM_WHATSAPP_NUMBER=+919876543210
WHATSAPP_CLOUD_API_TOKEN=your-meta-bearer-token
WHATSAPP_PHONE_NUMBER_ID=your-phone-number-id
WHATSAPP_TEMPLATE_NAME=wedding_rsvp_alert

# Fallback Email (Resend)
RESEND_API_KEY=re_your_api_key
GROOM_FALLBACK_EMAIL=groom@example.com

# Admin Demo Passcode
ADMIN_DEMO_PASSWORD=royalwedding2026
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the wedding invitation.  
Open [http://localhost:3000/admin](http://localhost:3000/admin) to access the editor dashboard.

---

## 🗄️ Database & Supabase Setup

1. Create a new project on [Supabase](https://supabase.com).
2. Go to the **SQL Editor** in your Supabase Dashboard.
3. Open `supabase/schema.sql` from this repository and run the SQL query.
   - This sets up the `wedding_settings`, `story_milestones`, `gallery_images`, `family_profiles`, `social_links`, `rsvp_submissions`, and `notification_logs` tables.
   - It also enables Row Level Security (RLS) policies and configures the public `wedding-assets` storage bucket.
4. Copy your project URL, Anon Key, and Service Role Key into `.env.local` and your Vercel Project Settings.

---

## 📲 WhatsApp Cloud API Setup Guide

To enable live WhatsApp notifications to the Groom:
1. Go to [Meta for Developers](https://developers.facebook.com) and register as a developer.
2. Create an App with the **Business** type and add the **WhatsApp** product.
3. Under **WhatsApp > API Setup**, copy the **Temporary Access Token** (or create a System User Permanent Token) and your **Phone Number ID**.
4. In WhatsApp Template Manager, create a template named `wedding_rsvp_alert`:
   - Category: Utility
   - Body: `New RSVP from {{1}}! Status: {{2}}. Party size: {{3}}. Contact: {{4}}. Message: {{5}}`
5. Add the Token, Phone Number ID, and Groom's phone number in `.env.local` or the `/admin` Groom Alerts tab.

---

## 🚢 Deployment on Vercel

1. Push your repository to GitHub / GitLab.
2. Import the project into [Vercel](https://vercel.com).
3. Set the environment variables in Vercel Project Settings.
4. Deploy! Your luxury invitation website is live with zero-cold-start performance.

---

## 🎨 Designed by VVR Creations
Crafted with devotion for an eternal royal union.
