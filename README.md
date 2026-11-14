# Natha Karthikeya – Developer Portfolio

React + Vite + TypeScript + Tailwind CSS + Framer Motion + Lucide.

## Run locally
```bash
npm install
cp .env.example .env     # then edit the Formspree endpoint
npm run dev              # http://localhost:5173
npm run build            # type-check + production build into dist/
npm run preview
```
Requires Node 18+.

## Contact form (Formspree)
1. Sign up at https://formspree.io and create a form using nathakarthikeya28@gmail.com.
2. Copy the endpoint (`https://formspree.io/f/xxxxxxx`).
3. Put it in `.env` as `VITE_FORMSPREE_ENDPOINT=...` (restart `npm run dev`).
4. Send a test message and confirm Formspree's verification email / inbox delivery.

Until configured, the Send button is disabled and the page shows a notice with an email fallback. It never pretends a message was sent.

## Project GitHub buttons
In `src/data.ts`, add `repo: 'https://github.com/karthikeya283/<repo>'` to a project. The button only renders when `repo` is set.

## Deploy on Vercel
1. Push to GitHub (below).
2. At https://vercel.com/new import the repo. Framework preset: **Vite** (build `npm run build`, output `dist`).
3. Settings → Environment Variables → add `VITE_FORMSPREE_ENDPOINT`, then deploy/redeploy.

## Connect to your GitHub repo
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/karthikeya283/portfolio.git
git push -u origin main
```
(Create the empty `portfolio` repo on GitHub first.)

## Structure
`public/` resume.pdf, profile.jpg · `src/components/` sections · `src/pages/Home.tsx` · `src/data.ts` all content.
