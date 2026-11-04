# Intelligent Controls Lab

A responsive React MVP of the NC State Intelligent Controls Lab website, built with Vite and plain CSS.

```sh
npm install
npm run dev
```

Build for production with `npm run build`; preview the build with `npm run preview`.

## Structure

- `src/pages/` — Home, Research, Team, Publications, Join Us, and Not Found pages
- `src/components/` — shared layout, navigation, page headings, publications, and video previews
- `src/data/` — publication records and research video metadata
- `src/styles.css` — shared responsive styling
- `public/images/` — original lab photographs and video thumbnails

Publications can be searched and filtered by year. Video previews load YouTube embeds on demand. Admission and email links point to their actual destinations.

Content and original photographs were migrated from https://sites.google.com/ncsu.edu/icl on November 4, 2026. Publication status reflects the live source at migration time.

For production hosting, configure the server to serve `index.html` for application routes (`/research`, `/team`, `/publications`, `/join-us`). Vite handles this automatically during development and preview. No backend or extra runtime packages are required.
