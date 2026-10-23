# All Grace Schools — Domain Hosting Guide

This package contains everything needed to host **All Grace Schools** on your custom domain (`allgraceschools.com` or any web hosting) with **zero server dependencies** (no Node.js or SSR backend required).

---

## 📁 Package Contents

```text
hosting_package/
├── index.html              <-- Main homepage with self-contained styles, WhatsApp widget, and video tour
├── __l5e/                  <-- All 16 genuine school photos, official crest & logo
├── favicon.ico             <-- Browser tab icon
├── apple-touch-icon.png    <-- Mobile bookmark icon
├── robots.txt              <-- Search engine indexing rules
└── sitemap.xml             <-- SEO sitemap
```

---

## 🚀 How to Host on Your Domain

### Option 1: Standard cPanel / Shared Hosting (Hostinger, Namecheap, Bluehost, GoDaddy, Whogohost)
1. Log into your hosting **cPanel**.
2. Open **File Manager** and navigate to `public_html` (or your domain's document root).
3. Upload all contents of `hosting_package/`:
   - `index.html` must be placed directly inside `public_html/index.html`.
   - The `__l5e/` folder must be uploaded directly alongside `index.html`.
   - Upload `favicon.ico`, `apple-touch-icon.png`, `robots.txt`, and `sitemap.xml`.
4. Open your domain in any browser (`https://yourdomain.com`). The site is live immediately!

### Option 2: Apache or Nginx VPS
1. Copy the contents of `hosting_package/` into your web server root (e.g. `/var/www/html/`).
2. Ensure read permissions: `chmod -R 755 /var/www/html/`.
3. The site works out of the box with zero runtime configuration.

### Option 3: GitHub Pages / Cloudflare Pages / Netlify / Vercel
- Point the publish directory to `hosting_package` (or push the repository and let Cloudflare Pages/Vercel build it automatically).

---

## ✨ Verified Features Included

- **Floating WhatsApp Widget**:
  - Persistent bottom-right floating badge with live pulse indicator.
  - Interactive popup card with **Miss Ubongabasi J. Edet** (Admission Officer), published desk hours (*"Weekdays, 9 a.m. – 3 p.m."*), and alternative contacts for HR and Supervisor.
  - Direct 1-click launch to WhatsApp: `https://wa.me/2347089625023`.
- **Embedded Campus Video Tour**:
  - Embedded official YouTube presentation (`JKp9cOm5GUY`).
  - Accessible via the Hero action button, campus image badge, and dedicated Virtual Campus section.
  - Responsive popup modal with clean backdrop and escape/dismiss controls.
- **Genuine School Photography**:
  - 100% official photos of the 3-storey campus building, tartan uniform pupils, classroom writing, crèche playroom, awards ceremony, and proprietor.
- **Audited School Facts**:
  - All facts accurately reflect the school's 15 September 2014 founding date, gate addresses in Uyo, curriculum details, and admissions criteria.
