# Intelligent Controls Lab

An information-first academic website for the Intelligent Controls Lab at NC State University, built with React, Vite, and plain CSS.

```sh
npm install
npm run dev
```

`npm run build` produces the production site in `dist/`. `npm run preview` serves the production build locally. Production hosting must serve `index.html` for application routes.

- `src/pages/`: Home, Research, Team, Publications, Join Us, and a recovery page.
- `src/components/`: shared navigation, footer, direct page headings, factual lab overview, publication entries, and click-to-load videos.
- `src/data/source-content.json`: research explanations, recruitment requirements, and source links. Research copy has been edited for direct technical language.
- `src/data/publications.json`: publication records and links, used by the searchable, year-filtered archive.
- `src/styles.css`: responsive visual system, interactions, and reduced-motion support.
- `public/images/`: lab portraits, research figures, and experiment stills.
- `DESIGN.md`: visual direction, typography, palette, layout, and page structure.

Source content was copied from https://sites.google.com/ncsu.edu/icl on November 4, 2026. Publication records and application requirements retain their source information. Google Fonts supplies Instrument Serif, DM Sans, and DM Mono, with local fallbacks. Video players connect to YouTube's privacy-enhanced domain only after the visitor chooses to play.
