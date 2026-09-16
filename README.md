# The Guardians Brotherhood, Inc. - The Original (TGBI-TO) Web Portal

Official mobile-responsive web portal for **The Guardians Brotherhood Incorporated - The Original (TGBI-TO)**.

## Overview

This application serves as the central digital presence for TGBI-TO, reflecting the organization's historic roots (SEC Reg. No. 123899, Dec 10, 1984), its 7 Guiding Principles, Code of Ethics, and Membership details. All content is strictly synchronized with the official GitHub repository (`https://github.com/tgbi-to/repo`) to maintain authenticity and legal primacy.

## Features

- **Strict Adherence to Source:** Pulls organizational data (Creed, Prayer, History, Code of Ethics) directly from official documents.
- **Responsive Layout:** fully optimized for mobile devices (min 44px touch targets, mobile navigation bar, adaptive grids).
- **Modern Stack:** React 19, TypeScript, Vite, and Tailwind CSS.
- **Typography:** Uses *Cinzel* for display headings, *Crimson Pro* for official document serif text, and *Plus Jakarta Sans* for modern body text.
- **Official Branding:** Incorporates the verified emblem and color schemes.

## Project Structure

- `/src/data/tgbitoData.ts`: Centralized truth for all organizational text and links.
- `/src/components/`: Modular UI components representing each section of the portal.
  - `HeroSection.tsx`: Landing view with SEC registration badge.
  - `AboutSection.tsx`: Organizational identity and heritage.
  - `MissionVisionSection.tsx`: Official mission statement and 8 vision pillars.
  - `PrinciplesSection.tsx`: The 7 guiding principles.
  - `CodeOfEthicsSection.tsx`: The Code of Conduct.
  - `JoinUsSection.tsx`: Membership process and inquiry forms.
  - `MobileBottomBar.tsx`: Sticky navigation for mobile devices.
- `/public/assets/brand/`: Contains the official TGBI-TO emblem.

## Local Development

To run this project locally:

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Design Constraints

- Do not introduce unofficial data. Use only content approved from the central repository.
- Emojis used in the Principles section must match the official set.
- All structural changes must maintain strict mobile responsiveness.
- The Official Logo must remain untouched without unauthorized overlays or filters.

## Copyright

&copy; The Guardians Brotherhood, Inc. - The Original (TGBI-TO). All rights reserved.
