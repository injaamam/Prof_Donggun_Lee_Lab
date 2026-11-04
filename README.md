# Intelligent Controls Lab

A simple React rebuild of https://sites.google.com/ncsu.edu/icl, using Vite and plain CSS.

```sh
npm install
npm run dev
```

Run `npm run build` for a production build and `npm run preview` to preview it.

- `src/pages/`: separate Home, Research, Team, Publications, and Join Us pages.
- `src/components/`: shared navigation, footer, headings, publications, embedded videos, and content rendering.
- `src/data/source-content.json`: original Research and Join Us text and links, extracted from the source pages without rewriting.
- `src/data/publications.json`: original publication records and links.
- `src/styles.css`: basic layouts, typography, and mobile styles.
- `public/images/`: original lab photos and images.

Content was copied from the original site on November 4, 2026. Production hosting should serve `index.html` for application routes; Vite handles this during development and preview.
