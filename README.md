# Developer Portfolio

Responsive React portfolio for an aspiring full-stack developer seeking internship / OJT opportunities. The application uses Vite, React Router, Tailwind CSS tooling, Framer Motion, and Lucide icons.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Build and preview

```bash
npm run build
npm run preview
```

The production bundle is written to `dist/`. Configure the deployment host to serve `index.html` for unknown paths so React Router project routes load on refresh.

## Content to configure before publishing

- Replace `[Your Name]`, `[LOCATION]`, biography, and education fields in `src/App.jsx`.
- Add verified profile URLs and email; remove placeholder states when configured.
- Add a current resume at `public/resume.pdf` and point the Resume links to it.
- Add verified application screenshots under `public/images/` and update the project data in `src/data/projects.js`.
- Confirm each feature and technology against the actual implementation. Project data is centralized in `src/data/projects.js`; skills and experience are in their corresponding `src/data/` files.
- Replace page title/description values and Open Graph image metadata in `index.html` when final identity and domain are known.

No contact form/backend or profile links are configured. Unverified details are shown as explicit placeholders and should be completed before deployment.
