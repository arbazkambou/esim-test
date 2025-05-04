# Table of Contents

- [Project Overview](#esim-card-next)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Config Files](#config-files)
- [Environment Variables](#environment-variables)
- [Future Todos](#future-todos)

## eSIM Card Next

This project allows users to view and purchase eSIM packages for over 200 countries, including regional and global options. It supports both data-only and data + voice plans, making international connectivity seamless and hassle-free.

## Tech Stack

Here are the core technologies and libraries used in the project:

### Framework & Language

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**

### UI & Styling

- **Tailwind CSS**
- **Shadcn/UI** for 3rd party components
- **Lucide React** for icons

### State & Data Management

- **Redux Toolkit**
- **React Redux**
- **React Query (@tanstack/react-query)** for data fetching and caching

### Forms & Validation

- **React Hook Form**
- **Zod** for schema validation
- **@hookform/resolvers** to integrate Zod with React Hook Form

### Authentication

- **Firebase** for social logins
- **js-cookie** for token storage
- **react-google-recaptcha** for bot protection

### API & HTTP Requests

- **Axios** for making API calls

### Utilities & Helpers

- **clsx** and **class-variance-authority** for conditional class handling
- **date-fns** for date manipulation
- **react-hot-toast** for toast notifications
- **react-qr-code** for displaying QR codes
- **next-themes** for theme switching
- **nextjs-toploader** for page loading indicator

### Developer Tools

- **ESLint** and `eslint-config-next` for linting
- **Prettier** and `prettier-plugin-tailwindcss` for formatting
- **TypeScript types** (`@types/*` packages)

### 📦 Build Tools

- **PostCSS**
- **Sharp** for image optimization (used by Next.js)

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Codiea/esimcard-next.git
cd esimcard-next
```

### 2. Install Dependencies

npm install

### 3. Configure Environment Variables

NEXT_PUBLIC_BASE_API=https://esimcard.com/api/landing
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LciuBwcAAAAANn0AyLyjr48ID4aZjNSpNbP8ARH
NEXT_PUBLIC_ENV=development
REVALIDATE_SECRET=c08f6a5e-7e4e-4fa2-83e1-2bcb81aa6f8b
REVALIDATE_TIME=86400
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDE2GpFax6hL1I6WEaTmWosUJUvwWI8OUk
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=esim-card.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=esim-card
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=esim-card.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=893208328959
NEXT_PUBLIC_FIREBASE_APP_ID=1:893208328959:web:fa9d8b53f10daea65faaca
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-SWMQ4G5EX1

### 3. Start the Development Server

npm run dev

## Folder Structure

```text
Public
src
├── app                                     # Contains all route segments, layouts, pages, and API endpoints
│   ├── [slug]                              # Displays data + voice packages for a counrty and region.
│   ├── about-us
│   ├── api/revalidate                      # Handles on-demand revalidation for dynamic content or pages.
│   ├── blog                                # Displays all blog posts with pagination support.
│   ├── blog/[category]                     # Displays blog posts filtered by a specific category.
│   ├── blog/[category]/[slug]              # Displays the full details of a specific blog post.
│   ├── careers
│   ├── checkout                            # Handles the complete checkout process for both authenticated and guest users.
│   ├── client/my-sims                      # Displays all eSIMs purchased by the user.
│   ├── client/my-sim/[slug]                # Displays usage details of data only sim.
│   ├── client/my-sim/voice/[slug]          # Displays usage details of data + voice sim.
│   ├── contact-us
│   ├── data-voice-sms                      # Displays supported countries for data + voice eSIMs along with starting prices.
│   ├── data-voice-sms/regional             # Displays supported regions for data + voice eSIMs along with starting prices.
│   ├── esim                                # Displays supported countries for data only eSIMs along with starting prices.
│   ├── esim/[slug]                         # Displays data only packages for a counrty.
│   ├── esim-compatible
│   ├── faqs
│   ├── global                              # Displays data only global packages.
│   ├── help-center                         # Displays help center questions.
│   ├── help-center/[category]              # Displays help center questions to a specific category.
│   ├── help-center/[category]/[slug]       # Displays full detail of a specific help center question.
│   ├── international-calling
│   ├── international-esim                  # Display data voice global packages
│   ├── login
│   ├── partners
│   ├── partners/affiliate
│   ├── partners/reseller-api
│   ├── partners/reseller-api
│   ├── password-reset
│   ├── privacy-policy
│   ├── redeem                             # Displays eSIM usage details by ICCID or ID without requiring login.
│   ├── refill
│   ├── refund-policy
│   ├── regional                           # Displays supported regions for data only eSIMs along with starting prices.
│   ├── regional/[slug]                    # Displays data only packages for a region.
│   ├── register
│   ├── sim-buy-thank-you                  # Sending GTM event of latest purchases data.
│   ├── terms
│   ├── virtual-number
│
├── components
│   ├── animations                         # UI components for motion effects, transitions, and interactive reveals.
│   ├── features                           # Organizes UI components into subfolders for each core feature
│       ├── auth
│       ├── blog
│       ├── cart
│       ├── checkout
│       ├── packages
│       ├── sims
│       ├── support
│   ├── layout                             # Contains shared layout components (e.g. Navbar, Footer, MobileNav).
│   ├── my-ui                              # Provide  custom, reusable UI components (e.g., buttons, cards, modals)
│   ├── pages                              # Contains fully client-side page components that represent complete page.
│   ├── ui                                 # Provides basic UI primitives from the shadcn/ui library.
├── helpers                                # Houses utility functions for shared, reusable logic across the application.
├── hooks                                  # Custom React hooks for reusable logic.
├── lib                                    # Shared libraries and configs for API setup, Firebase, validation schemas, and seo.
├── providers                              # Context providers for authentication, promo codes, data fetching, state management, and theming.
├── redux                                  # Redux store and slices for global state management.
│   ├── slices
├── services                               # Feature-based modules for API calls.
│   ├── auth
│   ├── blogs
│   ├── misc
│   ├── packages
│   ├── purchase
│   ├── support
│   ├── user
│
├── types                                 # Contains TypeScript types and interfaces organized by feature for consistent, modular typing.
│   ├── auth
│   ├── blogs
│   ├── misc
│   ├── packages
│   ├── purchase
│   ├── support
│   ├── user
├── _assets/                             # Houses static assets (images, SVGs, icons) for optimized importing and usage in the app.
│   ├── flags/
│   ├── images/
│   ├── svgs/
│
└── middleware.ts

```

### Config Files

- `.env.local` — Stores environment variables (API keys, secrets)
- `next.config.mjs` — Next.js configuration
- `tailwind.config.ts` — Tailwind CSS configuration
- `tsconfig.json` — TypeScript compiler settings
- `.eslintrc.json` — Linting rules
- `.prettierrc` — Prettier formatting configuration
- `postcss.config.mjs` — PostCSS plugins setup

## Environment Variables

```
NEXT_PUBLIC_BASE_API	                    # Base URL for all frontend API requests (landing data endpoint)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY	            # Google reCAPTCHA site key to protect your forms and API endpoints
REVALIDATE_TIME	                            # Cache time in seconds before automatic revalidation
REVALIDATE_SECRET	                        # Secret token used by on-demand revalidation API endpoint
NEXT_PUBLIC_ENV	                            # environment flag (e.g. development, production)
NEXT_PUBLIC_FIREBASE_*	                    # Firebase project configuration (e.g. API key, auth domain, project ID, storage bucket)

```

## Future Todos

- **Affiliate Portal**  
  Build a dedicated partner dashboard where affiliates can sign up, track referrals, view performance metrics, and manage payouts.

- **Localization**  
  Introduce full internationalization support for multiple languages.
