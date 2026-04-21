# Yohji Min — Portfolio

Personal portfolio website for **Yohji Min** — AI Product Manager at Microsoft AI and undergraduate at Northwestern University studying Computer Science and Radio/Television/Film.

Live sections:

- **Home** — hero intro and social links
- **About** — personal story and academic foundation
- **Career** — internship timeline (Microsoft AI, ByteDance, Starward, Ylab, and more)
- **Projects** — selected case studies (Axiom, Amico, Agora, HavenLink)
- **Content** — writing published on LinkedIn
- **Contact** — mailto-based contact form (no backend, no exposed email)

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS 4
- `motion` (Framer Motion) for animations
- `react-router-dom` for client-side routes
- `lucide-react` for icons

## Run locally

```bash
npm install
npm run dev
```

The dev server starts on `http://localhost:3000`.

## Build

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # tsc --noEmit type check
```

## Project structure

```
public/
  favicon.svg             # site favicon
  resume.pdf              # downloadable resume
  images/                 # hero portrait etc.
  logos/                  # school + company logos
  projects/               # project thumbnails and preview clips
  blog/                   # article cover images
src/
  App.tsx                 # routes
  main.tsx                # entry
  index.css               # Tailwind theme + globals
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Experience.tsx
    Projects.tsx
    Blog.tsx
    Contact.tsx
    ScrollToTop.tsx
```

## Credits

- Photography on `/projects/havenlink.jpg` by Thomas Kolnowski on [Unsplash](https://unsplash.com/photos/white-and-gray-google-home-on-brown-table-ljG19qhTzZQ).
- All other imagery is either original work by Yohji Min or licensed assets produced during the relevant internship programs.
