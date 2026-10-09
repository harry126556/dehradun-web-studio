# Peak Web Studio — Dehradun

Responsive Next.js portfolio for a freelance web designer targeting barbershops, salons, cafes, gyms and new local businesses in Dehradun and nearby Uttarakhand cities.

## Before publishing
1. Open `app/page.tsx`.
2. Replace `YOURNUMBER` in the WhatsApp URL with your number including country code, without +, spaces or dashes (example format: `919876543210`).
3. Update the studio name and copy to suit your brand. The portfolio cards are demo concepts, not real client projects.

## Run locally
Install Node.js 20 or later:
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy with Cloudflare Pages + GitHub
- Framework preset: Next.js (Static HTML Export), or None if unavailable
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: leave blank

Connect this repository to Cloudflare Pages. Future pushes to the connected branch can trigger redeployments. This project uses static export and does not require a backend or database.
