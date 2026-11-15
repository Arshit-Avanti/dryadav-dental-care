# Skill Usage Guide — Dr Yadav Dental Care Point

This guide defines the operational workflow and explicit trigger scenarios for each of the 14 installed skills during the design, development, content curation, and testing lifecycle of the **Dr Yadav Dental Care Point** website.

---

## 🧭 Skill Activation by Project Phase

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. CONCEPT & DESIGN PHASE                                                   │
│    • ui-ux-pro-max            • frontend-design                             │
│    • local-clinic-website-conversion                                        │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
┌──────────────────────────────────────▼──────────────────────────────────────┐
│ 2. CONTENT & CLINICAL INTEGRITY PHASE                                       │
│    • clinic-content-integrity                                               │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
┌──────────────────────────────────────▼──────────────────────────────────────┐
│ 3. FRONTEND ENGINEERING & ARCHITECTURE PHASE                                │
│    • react-best-practices     • composition-patterns                        │
│    • web-design-guidelines                                                  │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
┌──────────────────────────────────────▼──────────────────────────────────────┐
│ 4. LOCAL SEO & SEARCH VISIBILITY PHASE                                      │
│    • seo                      • core-web-vitals                             │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
┌──────────────────────────────────────▼──────────────────────────────────────┐
│ 5. ACCESSIBILITY, QUALITY AUDITING & TESTING PHASE                          │
│    • accessibility            • performance                                 │
│    • web-quality-audit        • best-practices                              │
│    • playwright-cli                                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Individual Skill Operational Reference

### 1. `ui-ux-pro-max`
- **When to Use:**
  - Selecting dental clinic color palettes (e.g., medical teal, calming cerulean, hygienic mint, warm ivory, clean dental white).
  - Choosing accessible typography pairings (e.g., Plus Jakarta Sans + Inter, Outfit + Source Sans 3).
  - Looking up responsive UI patterns, hero section layouts, treatment comparison tables, or pricing bento grids.
- **How to Invoke:**
  - Run the local search script from PowerShell:
    ```powershell
    python .\.agents\skills\ui-ux-pro-max\scripts\search.py "minimalism" -d style
    python .\.agents\skills\ui-ux-pro-max\scripts\search.py "healthcare" -d landing
    python .\.agents\skills\ui-ux-pro-max\scripts\search.py "Inter" -d typography
    ```
- **Goal:** Establish a cohesive, clean, medical-grade aesthetic without manual guesswork.

---

### 2. `frontend-design`
- **When to Use:**
  - Crafting the hero section and overall visual identity of Dr Yadav Dental Care Point.
  - Ensuring the design avoids cliché, templated AI tropes (such as generic SaaS card grids, low-contrast washed-out cards, or arbitrary floating shapes).
  - Designing an orchestrator-level visual hierarchy that conveys reassurance, high surgical competence, and painless care.
- **Key Questions to Ask:**
  - *Does this interface look like a real, top-tier aesthetic dental practice, or does it look like a cookie-cutter template?*
  - *Is the typography doing real work with distinct hierarchy and line heights?*

---

### 3. `clinic-content-integrity` *(Custom Workspace Skill)*
- **When to Use:**
  - Writing or reviewing doctor biographies, treatment descriptions, patient FAQs, or clinic contact cards.
  - Adding patient reviews, ratings, or trust badges.
- **Mandatory Guardrails:**
  - **Zero Fabrication:** Never invent degrees, fellowships, or surgical experience for Dr. Jagesh Yadav. Only use verified credentials (*BDS, MIDA, 12+ years clinical practice*).
  - **No False Guarantees:** Never write "100% painless guarantee" or "permanent zero-risk treatments". Frame procedures ethically (e.g., *"computerized micro-anesthesia for virtually painless injections"*).
  - **Verified Clinic Details:**
    - Address: *Opposite Sunrise Public School, 18, MM Road, DLF Ankur Vihar, Ghaziabad, UP 201102*
    - Emergency Hotline: `+91 70655 77070`
  - **Missing Data:** Always use clear editable placeholders (e.g., `[PLACEHOLDER: Clinic Registration Number]`) rather than hallucinating details.

---

### 4. `local-clinic-website-conversion` *(Custom Workspace Skill)*
- **When to Use:**
  - Designing appointment booking CTAs, the mobile header, and the floating bottom HUD.
  - Structuring procedure cards to guide patients suffering from acute toothache or seeking cosmetic smile makeovers.
- **Core Features to Implement:**
  - **Persistent Mobile HUD:** Fixed bottom bar on mobile viewports with 1-tap `Call Clinic`, `WhatsApp Consult`, and `Book Visit`.
  - **Pre-filled WhatsApp Inquiries:** Context-aware messages (e.g., *"Hello Dr. Yadav Dental Care, I want to inquire about Root Canal Treatment / Tooth Pain"*).
  - **Live Opening Hours Indicator:** Visual badge showing whether the clinic is currently open or opening soon.
  - **Interactive Google Maps Navigation:** Deep link with GPS coordinates (`28.7380908, 77.2631051`) and recognizable landmarks (*Opposite Sunrise Public School*).

---

### 5. `react-best-practices`
- **When to Use:**
  - Implementing React 19 / Vite components, custom hooks, and state management.
  - Optimizing render cycles for interactive dental widgets (e.g., interactive smile before/after sliders, procedure cost estimators, or appointment dialogs).
- **Guidelines to Enforce:**
  - Avoid unnecessary `useEffect` triggers; derive state during render.
  - Use lazy loading for off-screen components and non-critical modal dialogs.
  - Minimize bundle size by importing specific icon exports rather than large barrel packages.

---

### 6. `composition-patterns`
- **When to Use:**
  - Building reusable UI component primitives: `<Card>`, `<Modal>`, `<Accordion>`, `<Tabs>`, `<TreatmentBentoGrid>`, `<ReviewCarousel>`.
- **Guidelines to Enforce:**
  - Use compound component patterns (`<TreatmentCard.Header>`, `<TreatmentCard.Body>`, `<TreatmentCard.CTA>`) instead of massive boolean prop explosions (`hasBadge`, `isHighlighted`, `withBorder`, `showButton`).
  - React 19 ref forwarding and context provider cleanups.

---

### 7. `web-design-guidelines`
- **When to Use:**
  - Auditing interactive UI elements for compliance with Web Interface Guidelines.
  - Verifying tactile button states, hover animations, focus rings, and mobile touch targets.
- **Checks:**
  - Minimum touch targets of 44x44px for all mobile buttons (critical for patients in distress on phones).
  - High visible contrast on active/focused states.
  - Natural easing curves on dropdowns and expandable FAQ accordions.

---

### 8. `seo`
- **When to Use:**
  - Configuring metadata, title tags, OpenGraph images, and structured data schemas.
- **Specific Implementations for Dr Yadav Dental Care:**
  - **Local Dentist Schema (`Dentist` JSON-LD):**
    ```json
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Dr Yadav Dental Care Point",
      "image": "https://dryadavdentalcare.com/assets/clinic-exterior.webp",
      "telephone": "+91-70655-77070",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Opposite Sunrise Public School, 18, MM Road, DLF Ankur Vihar",
        "addressLocality": "Ghaziabad",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201102",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.7380908,
        "longitude": 77.2631051
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Monday",
          "opens": "10:00",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Monday",
          "opens": "17:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "14:00"
        }
      ]
    }
    ```
  - Local ranking target keywords: *"Dentist in DLF Ankur Vihar"*, *"Dental Clinic near MM Road Ghaziabad"*, *"Root Canal Treatment Loni Border"*.

---

### 9. `accessibility`
- **When to Use:**
  - Ensuring the clinic website is fully usable by elderly patients or individuals with visual/motor impairments.
- **Mandatory Requirements:**
  - WCAG 2.2 Level AA compliance.
  - Color contrast ratio of ≥ 4.5:1 for standard text and ≥ 3.0:1 for large display headers.
  - Keyboard navigation for all booking modals, sliders, and navigation menus with clear `:focus-visible` outlines.
  - Proper ARIA landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`) and `aria-label` tags for icon-only buttons (e.g., WhatsApp, phone icons).

---

### 10. `performance`
- **When to Use:**
  - Optimizing asset delivery for mobile patients browsing on 3G/4G connections.
- **Actions:**
  - Convert clinic photography and treatment illustrations to `.webp` or `.avif`.
  - Lazy load below-the-fold images and embedded Google Maps iframes.
  - Self-host Google Fonts or preload critical font subsets to avoid render-blocking CSS.

---

### 11. `core-web-vitals`
- **When to Use:**
  - Auditing and optimizing LCP (Largest Contentful Paint), INP (Interaction to Next Paint), and CLS (Cumulative Layout Shift).
- **Actions:**
  - Reserve aspect ratios on clinic image containers to prevent layout shift (`CLS < 0.05`).
  - Preload the hero background/doctor portrait image to ensure `LCP < 2.0s`.
  - Optimize appointment modal opening time for instant responsiveness (`INP < 150ms`).

---

### 12. `web-quality-audit`
- **When to Use:**
  - Performing full-spectrum quality reviews prior to deployment or client demonstrations.
- **Actions:**
  - Run comprehensive Lighthouse audits covering Performance, Accessibility, Best Practices, and SEO.
  - Fix any flagged issues before releasing changes.

---

### 13. `best-practices`
- **When to Use:**
  - Reviewing HTML boilerplate, security attributes, and cross-browser resilience.
- **Actions:**
  - Ensure all external links (Google Maps, WhatsApp, Social links) have `rel="noopener noreferrer"`.
  - Ensure viewport meta tags prevent zoom disability.
  - Validate clean HTML structure with zero console errors.

---

### 14. `playwright-cli`
- **When to Use:**
  - Running automated visual tests and headless browser validation of the built site.
  - Testing mobile responsive layouts (375px iPhone, 768px iPad, 1440px Desktop).
  - Capturing automated screenshots of appointment modals, navigation drawers, and footer contact sections.
- **Example Usage:**
  ```bash
  playwright-cli open http://localhost:5173
  playwright-cli resize 390 844
  playwright-cli screenshot --path=screenshots/mobile-hero.png
  playwright-cli click "[data-testid='book-appointment-button']"
  playwright-cli screenshot --path=screenshots/appointment-modal.png
  playwright-cli close
  ```

---

## 📌 Summary Checklist for Development Turns

Before writing or modifying any code in upcoming tasks:
1. Consult **`frontend-design`** & **`ui-ux-pro-max`** for styling and layout decisions.
2. Cross-reference **`clinic-content-integrity`** for all copy and clinical representations.
3. Validate CTAs against **`local-clinic-website-conversion`**.
4. Apply **`react-best-practices`** and **`composition-patterns`** during implementation.
5. Audit with **`accessibility`**, **`seo`**, **`core-web-vitals`**, and **`playwright-cli`** upon completion.
