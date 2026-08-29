# khwezi.online — Personal practice

Portfolio site for Khwezi Flatela. Work is contracted through Flatela (Pty) Ltd.

## Stack

- **Vite 5** — build tool
- **React 18** — UI framework
- **Tailwind CSS 3** — utility styling
- **Lucide React** — icons
- **Instrument Serif + Manrope** — Google Fonts

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
npm run preview
```

The static site builds to `dist/`.

## Deployment

Configured for Netlify and Vercel. Connect the repo and point `khwezi.online` at the host.

## Editing content

All copy lives in `src/App.jsx`. Data arrays at the top (`projects`, `services`, `capabilities`, `experience`, `stats`, `trustClients`) are the usual edits.

Custom CSS lives in `src/index.css`.
SEO meta tags are in `index.html`.
The public CV is `public/cv.html`.
