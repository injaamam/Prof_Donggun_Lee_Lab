# ICL — A field journal for intelligent control

## Direction

A research publication brought to the web: warm paper, charcoal ink, precise red annotations, generous margins, and technical figures. The identity connects mathematical rigor to movement through a bespoke trajectory illustration, rather than stock technology imagery.

Three approaches were considered: a conventional university directory; a dark, cinematic robotics showcase; and an editorial research journal. The journal direction best balances academic credibility, long-form readability, a small team's personal identity, and visual distinction.

References explored: [MIT CSAIL](https://www.csail.mit.edu/) for research-first navigation and [ETH Robotic Systems Lab](https://rsl.ethz.ch/) for institutional clarity. These informed the hierarchy, rather than supplying a template.

## Visual system

- Display: Instrument Serif, with selective italic emphasis. Georgia is the fallback.
- Body: DM Sans; system sans-serif fallback.
- Annotations: DM Mono; monospace fallback. Small annotations supplement the primary content.
- Paper `#f8f7f3`, ink `#272a26`, muted text `#676a60`, red `#b83229`, rules `#d9d9cf`.
- Layout: maximum 1280px content width; 56px desktop and 20px mobile margins. Asymmetric side labels introduce long-form chapters. Paired research features and a three-column portrait grid collapse naturally on small screens.
- Spacing: 8px foundation with larger 24, 32, 48, and 64px editorial intervals. Fine rules establish sections without containers around every element.
- Components: square buttons, underlined text links, unboxed publication entries, numbered chapters, image captions, an abbreviated ICL wordmark, and an institutional utility bar.
- Motion: the trajectory draws once; images subtly enlarge on interaction. Reduced-motion settings disable these effects.

## Page structure

1. Home: research statement and vector control illustration → approach → two research directions → selected publications → four experiments → recruitment invitation.
2. Research: editorial introduction → anchored chapter navigation → overview figure → safe autonomy chapter → real-time control chapter. Existing research explanations, figures, paper links, and experiments remain available.
3. Team: editorial introduction → investigator portrait, affiliation, and education → doctoral researchers → alumni → recruitment invitation.
4. Publications: introduction → labeled search and live result count → year filters → chronological publication groups, with authors, venues, and original links. Includes an empty state with filter reset.
5. Join Us: invitation → current Ph.D. recruiting notice → graduate application instructions → postdoctoral inquiry instructions. Original requirements and contact links remain available.
6. Not found: a matching editorial recovery page with a direct route home.

## Accessibility and behavior

One primary heading per page; semantic landmarks; skip link; current-page navigation; keyboard focus indicators; an accessible mobile menu with Escape dismissal; labeled search; pressed states on year filters; live result count; informative image alternatives; reduced motion support. Videos load their third-party player only after activation. Fonts load with swap and retain local fallbacks.

No new runtime dependencies. Existing React/Vite architecture and route URLs are preserved.
