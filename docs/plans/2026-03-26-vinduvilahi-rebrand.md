# Vindu Vilahi Rebrand Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebrand the entire codebase from "leeztruestyles" to "Vindu Vilahi", replacing all text references, brand colours (pink → navy/gold), and logo assets.

**Architecture:** Pure search-and-replace across ~20 source files, a colour-token swap in Tailwind + CSS, and a logo asset swap in `public/`. No logic changes. No TDD cycle needed — verify by running the existing test suite after each group of changes and doing a final grep to confirm zero remaining "leeztruestyles" references.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS, TypeScript. Tests via Vitest/Jest (`npm test`).

**Brand Colours:**
| Token | Hex |
|---|---|
| Primary navy | `#0C3049` |
| Primary navy light (hover) | `#1A4A6B` |
| Accent gold | `#F5C225` |
| Accent muted (blue-grey) | `#8FA8BE` |

**Email placeholders:**
- `leeztruestyles44@gmail.com` → `vinduvilahi@gmail.com`
- `info@leeztruestyles.com` → `info@vinduvilahi.com`
- `support@leeztruestyles.com` → `support@vinduvilahi.com`
- `returns@leeztruestyles.com` → `returns@vinduvilahi.com`
- `pos@leeztruestyles.com` → `pos@vinduvilahi.com`

**GitHub Repo:** `https://github.com/DennisBundi/Vinduvilahi.git`

---

### Task 1: Copy Logo Assets

**Files:**
- Create: `public/images/vinduvilahi-logo-square.png` (copy from Downloads)
- Create: `public/images/vinduvilahi-logo-white.png` (copy from Downloads)
- Create: `public/images/vinduvilahi-logo-gold.png` (copy from Downloads)
- Delete: `public/images/leeztruelogo.jpeg`

**Step 1: Copy the three logo PNGs from Downloads into public/images**

```bash
cp "/c/Users/user/Downloads/Vindu Vilahi Final_2 Blue Square copy.png" \
   "/c/Users/user/Projects/VinduVilahi/public/images/vinduvilahi-logo-square.png"

cp "/c/Users/user/Downloads/Vindu Vilahi Final_1 White copy.png" \
   "/c/Users/user/Projects/VinduVilahi/public/images/vinduvilahi-logo-white.png"

cp "/c/Users/user/Downloads/Vindu Vilahi Final_1 Yellow copy.png" \
   "/c/Users/user/Projects/VinduVilahi/public/images/vinduvilahi-logo-gold.png"
```

**Step 2: Remove the old logo**

```bash
rm /c/Users/user/Projects/VinduVilahi/public/images/leeztruelogo.jpeg
```

**Step 3: Verify files exist**

```bash
ls /c/Users/user/Projects/VinduVilahi/public/images/
```

Expected: `vinduvilahi-logo-square.png`, `vinduvilahi-logo-white.png`, `vinduvilahi-logo-gold.png`, `hero-fashion.jpg`

**Step 4: Commit**

```bash
git add public/images/
git commit -m "feat(rebrand): add Vindu Vilahi logo assets, remove old logo"
```

---

### Task 2: Update Tailwind Brand Colours

**Files:**
- Modify: `tailwind.config.ts`

**Step 1: Replace colour tokens**

Replace the entire `colors` block in `tailwind.config.ts`:

```ts
colors: {
  background: "var(--background)",
  foreground: "var(--foreground)",
  primary: {
    DEFAULT: "#0C3049",
    dark: "#071e2e",
    light: "#1A4A6B",
  },
  secondary: {
    DEFAULT: "#F5C225",
    dark: "#d4a61e",
    light: "#f8d96b",
  },
  accent: {
    DEFAULT: "#8FA8BE",
    muted: "#6b8ca4",
  },
},
```

**Step 2: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat(rebrand): update Tailwind colour tokens to Vindu Vilahi navy/gold"
```

---

### Task 3: Update globals.css Scrollbar Colours

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Replace scrollbar thumb colours**

Change lines 90–96 and 103–108 (scrollbar thumb colours):

```css
/* Custom scrollbar */
::-webkit-scrollbar-thumb {
  background: #0C3049;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1A4A6B;
}

/* Dark mode scrollbar */
.dark ::-webkit-scrollbar-thumb {
  background: #F5C225;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #d4a61e;
}
```

**Step 2: Update admin-layout dark select colour**

Change the `#1a0020` admin panel background to match the new dark navy:

```css
.admin-layout select {
  background-color: #071e2e;
  color: #ffffff;
}

.admin-layout select option {
  background-color: #071e2e;
  color: #ffffff;
}
```

**Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(rebrand): update CSS scrollbar and admin colours to navy/gold"
```

---

### Task 4: Update layout.tsx Metadata

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Update title, appleWebApp title, theme colour, and storage key**

- Line 13: `title: "Vindu Vilahi - Unmatched Quality"`
- Line 19: `title: "Vindu Vilahi"`
- Line 40: `themeColor: "#0C3049"`
- Line 51: `storageKey="vinduvilahi-theme"`

Full updated metadata block:

```tsx
export const metadata: Metadata = {
  title: "Vindu Vilahi - Unmatched Quality",
  description: "Premium fashion marketplace in Kenya",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Vindu Vilahi",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0C3049",
};
```

Update ThemeProvider storageKey:
```tsx
<ThemeProvider attribute="class" defaultTheme="light" storageKey="vinduvilahi-theme" enableSystem={false}>
```

**Step 2: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(rebrand): update layout metadata to Vindu Vilahi"
```

---

### Task 5: Update PWA Manifest

**Files:**
- Modify: `public/manifest.json`

**Step 1: Replace name, short_name, and theme_color**

```json
{
  "name": "Vindu Vilahi - Unmatched Quality",
  "short_name": "Vindu Vilahi",
  "description": "Premium fashion marketplace in Kenya",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0C3049",
  "theme_color": "#0C3049",
  "orientation": "portrait-primary",
  "scope": "/",
  "icons": [
    { "src": "/icons/icon-72x72.png", "sizes": "72x72", "type": "image/png", "purpose": "maskable any" },
    { "src": "/icons/icon-96x96.png", "sizes": "96x96", "type": "image/png", "purpose": "maskable any" },
    { "src": "/icons/icon-128x128.png", "sizes": "128x128", "type": "image/png", "purpose": "maskable any" },
    { "src": "/icons/icon-144x144.png", "sizes": "144x144", "type": "image/png", "purpose": "maskable any" },
    { "src": "/icons/icon-152x152.png", "sizes": "152x152", "type": "image/png", "purpose": "maskable any" },
    { "src": "/icons/icon-192x192.png", "sizes": "192x192", "type": "image/png", "purpose": "maskable any" },
    { "src": "/icons/icon-384x384.png", "sizes": "384x384", "type": "image/png", "purpose": "maskable any" },
    { "src": "/icons/icon-512x512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable any" }
  ]
}
```

**Step 2: Commit**

```bash
git add public/manifest.json
git commit -m "feat(rebrand): update PWA manifest to Vindu Vilahi"
```

---

### Task 6: Update package.json and next.config.js

**Files:**
- Modify: `package.json`
- Modify: `next.config.js`

**Step 1: Update package.json name field**

Change:
```json
"name": "leeztruestyles-marketplace"
```
To:
```json
"name": "vinduvilahi-marketplace"
```

**Step 2: Update next.config.js Sentry org and project**

Find the Sentry config block (org/project fields) and change:
- `org: "leeztruestyles"` → `org: "vinduvilahi"`
- `project: "leeztruestyles"` → `project: "vinduvilahi"`

**Step 3: Commit**

```bash
git add package.json next.config.js
git commit -m "feat(rebrand): update package name and Sentry project to vinduvilahi"
```

---

### Task 7: Update sitemap.ts and robots.ts

**Files:**
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/robots.ts`

**Step 1: Replace leeztruestyles domain references**

In both files, replace any occurrence of `leeztruestyles.com` with `vinduvilahi.com`.

**Step 2: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts
git commit -m "feat(rebrand): update sitemap and robots domain to vinduvilahi.com"
```

---

### Task 8: Update Content Pages

**Files:**
- Modify: `src/app/(marketplace)/contact/page.tsx`
- Modify: `src/app/(marketplace)/privacy/page.tsx`
- Modify: `src/app/(marketplace)/terms/page.tsx`
- Modify: `src/app/(marketplace)/returns/page.tsx`
- Modify: `src/app/(marketplace)/products/[id]/page.tsx`

**Step 1: Read each file and replace all "leeztruestyles" references**

For each file apply these replacements:
- `Leeztruestyles` → `Vindu Vilahi`
- `leeztruestyles` → `vinduvilahi` (in domains/slugs)
- `leeztruestyles44@gmail.com` → `vinduvilahi@gmail.com`
- `info@leeztruestyles.com` → `info@vinduvilahi.com`
- `support@leeztruestyles.com` → `support@vinduvilahi.com`
- `returns@leeztruestyles.com` → `returns@vinduvilahi.com`

**Step 2: Commit**

```bash
git add src/app/\(marketplace\)/
git commit -m "feat(rebrand): update content pages to Vindu Vilahi brand and emails"
```

---

### Task 9: Update Navigation Components

**Files:**
- Modify: `src/components/navigation/Footer.tsx`
- Modify: `src/components/home/WaitlistModal.tsx`
- Modify: `src/components/loyalty/ReferralCard.tsx`

**Step 1: Read each file and replace all "leeztruestyles" references**

Apply same replacements as Task 8. Additionally in Footer.tsx, replace the old logo image path:
- `leeztruelogo.jpeg` → `vinduvilahi-logo-gold.png` (for light backgrounds) or `vinduvilahi-logo-white.png` (for dark/navy backgrounds)

**Step 2: Commit**

```bash
git add src/components/navigation/Footer.tsx \
        src/components/home/WaitlistModal.tsx \
        src/components/loyalty/ReferralCard.tsx
git commit -m "feat(rebrand): update navigation and marketing components to Vindu Vilahi"
```

---

### Task 10: Update POS Component

**Files:**
- Modify: `src/components/pos/POSCart.tsx`

**Step 1: Replace email references**

- `pos@leeztruestyles.com` → `pos@vinduvilahi.com`
- Any other brand text references

**Step 2: Commit**

```bash
git add src/components/pos/POSCart.tsx
git commit -m "feat(rebrand): update POS email to vinduvilahi"
```

---

### Task 11: Update Services

**Files:**
- Modify: `src/services/paymentService.ts`
- Modify: `src/services/darajaService.ts`

**Step 1: Replace domain and brand references in both files**

- `leeztruestyles.com` → `vinduvilahi.com`
- Any email references: apply email mapping from Task 8
- Any brand name text references

**Step 2: Commit**

```bash
git add src/services/paymentService.ts src/services/darajaService.ts
git commit -m "feat(rebrand): update payment services to vinduvilahi domain"
```

---

### Task 12: Update Auth Callback

**Files:**
- Modify: `src/app/auth/callback/route.ts`

**Step 1: Replace admin email list and any brand references**

- `leeztruestyles44@gmail.com` → `vinduvilahi@gmail.com`
- Any other email or brand name references

**Step 2: Commit**

```bash
git add src/app/auth/callback/route.ts
git commit -m "feat(rebrand): update admin email in auth callback to vinduvilahi"
```

---

### Task 13: Update .env.example

**Files:**
- Modify: `.env.example`

**Step 1: Replace all leeztruestyles references**

- Any URL like `https://leeztruestyles.com` → `https://vinduvilahi.com`
- Any email addresses → apply mapping from Task 8
- `SENTRY_ORG=leeztruestyles` → `SENTRY_ORG=vinduvilahi`
- `SENTRY_PROJECT=leeztruestyles` → `SENTRY_PROJECT=vinduvilahi`

**Step 2: Commit**

```bash
git add .env.example
git commit -m "feat(rebrand): update .env.example to vinduvilahi"
```

---

### Task 14: Update public/sw.js

**Files:**
- Modify: `public/sw.js`

**Step 1: Replace brand references in service worker**

Replace any `leeztruestyles` cache keys or references with `vinduvilahi`.

**Step 2: Commit**

```bash
git add public/sw.js
git commit -m "feat(rebrand): update service worker cache keys to vinduvilahi"
```

---

### Task 15: Verify Zero Remaining References

**Step 1: Grep for any remaining leeztruestyles in source files**

```bash
grep -ri "leeztruestyles" \
  src/ public/ \
  package.json next.config.js .env.example \
  --include="*.ts" --include="*.tsx" --include="*.js" \
  --include="*.json" --include="*.css" --include="*.md"
```

Expected output: no matches (empty)

**Step 2: If any matches remain, fix them and commit**

**Step 3: Run existing tests**

```bash
npm test
```

Expected: all tests pass (or same failures as before rebrand — do not introduce new failures)

**Step 4: Note for manual follow-up**

> PWA icon PNGs (`public/icons/`) still use the old pink-brand artwork. These need to be regenerated from `vinduvilahi-logo-square.png` at sizes 72, 96, 128, 144, 152, 192, 384, 512px. Use https://www.pwabuilder.com/imageGenerator or ImageMagick. The manifest.json already points to the correct paths — only the image content needs updating.

> `.env.local` contains live secrets — update `SENTRY_ORG`, `SENTRY_PROJECT`, admin emails, and site URLs manually.

---

### Task 16: Final Commit and Push

**Step 1: Verify git status is clean**

```bash
git status
```

Expected: nothing to commit

**Step 2: Push to GitHub**

```bash
git remote set-url origin https://github.com/DennisBundi/Vinduvilahi.git
git push origin main
```
