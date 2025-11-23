<<<<<<< HEAD
# personal_webpage
=======
# Shravan Portfolio

Single-page React (Vite) site deployed as static assets.

## Deployment

### Local build & preview
```bash
npm install
npm run build
npm run preview
```
The `preview`/`start` scripts serve the `dist` output so you can test the exact bundle that Vercel will host.

### Vercel configuration
- The project is ready for the free Vercel tier. `package.json` exposes `build`, `preview`, and `start` scripts that Vercel can detect automatically.
- `vercel.json` pins the framework to Vite, outputs `dist`, and rewrites every client-side route to `index.html` so deep links work without 404s.
- Static assets live in `/assest` and are bundled by Vite; no extra configuration is required.

### Environment variables
None are required today. If you introduce secrets later, add them under **Project Settings → Environment Variables** in Vercel and rebuild.

### Redeploying after code changes
```bash
git add -A
git commit -m "feat: describe the change"
git push origin main
```
Each push to the connected branch triggers a new deployment automatically. To force a rebuild without new commits, click **Deployments → Redeploy** in the Vercel dashboard.
>>>>>>> beb88e4 (chore: prepare Vercel deployment)
