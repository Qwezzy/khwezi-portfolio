# khwezi.online — Portfolio

Personal portfolio for Khwezi Flatela / Khemo IT Solutions.

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

The project is pre-configured for both Netlify and Vercel.

### Vercel

`vercel.json` already specifies framework, build command, and output directory. Connect the repo on Vercel — no further config needed.

### Netlify

`netlify.toml` already specifies build command, publish directory, and Node 20. Connect the repo on Netlify — no further config needed.

## Pointing khwezi.online to your deployment

After deploying, add `khwezi.online` (and `www.khwezi.online`) as a custom domain in your hosting dashboard. The host will give you the exact records, but typically:

**Vercel**

| Type  | Host  | Value                  |
| ----- | ----- | ---------------------- |
| A     | `@`   | `76.76.21.21`          |
| CNAME | `www` | `cname.vercel-dns.com` |

**Netlify**

| Type  | Host  | Value                                |
| ----- | ----- | ------------------------------------ |
| A     | `@`   | (Netlify load balancer IP, in dashboard) |
| CNAME | `www` | `<your-site>.netlify.app`            |

Update DNS at your registrar (where khwezi.online is registered). Propagation usually takes minutes to a few hours.

## Editing content

All copy lives in `src/App.jsx`. The data arrays at the top of the component (`projects`, `services`, `capabilities`, `experience`, `stats`, `trustClients`) are the most common things you'll touch.

Custom CSS — design tokens, animations, button styles — lives in `src/index.css`.

SEO meta tags are in `index.html`.
