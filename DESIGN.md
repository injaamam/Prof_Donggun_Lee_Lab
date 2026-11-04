# Intelligent Controls Lab: website design

## Content priorities

The first screen must identify the lab, its university, research focus, principal investigator, methods, and applications. Use direct academic language. Headings must name the information that follows; avoid slogans, metaphors, and promotional statements.

Keep summaries short and provide the technical detail below them. Visitors should be able to identify relevant research areas, find papers, identify lab members, and locate application requirements without interpreting decorative copy.

## Visual system

- Display: Instrument Serif for factual page and section titles. Avoid italic slogan treatments.
- Body: DM Sans for explanations, factual summaries, and navigation.
- Annotations: DM Mono for secondary section labels and dates.
- Colors: paper `#f8f7f3`, ink `#272a26`, muted text `#676a60`, red `#b83229`, rules `#d9d9cf`.
- Layout: maximum 1280px content width; compact page introductions; asymmetric chapter layouts; paired research features; a three-column portrait grid; responsive mobile layouts.
- Components: square buttons, underlined links, unboxed publication entries, clearly labeled profiles, factual lab overview, research videos, and an institutional header.
- Accessibility: semantic landmarks, one primary heading per page, skip link, keyboard focus states, current-page navigation, mobile menu with Escape dismissal, labeled search, pressed filter states, live result count, image alternatives, and reduced-motion support.

## Page structure

1. Home: lab name and research focus; PI, affiliation, methods, applications, and recruitment notice; two research areas; recent publications; robot experiments; Ph.D. recruitment and postdoctoral inquiries. A factual overview replaces the large decorative trajectory diagram.
2. Research: two-area summary; chapter links; methods and applications; safe autonomy research; real-time control research. Bold topic labels, experimental videos, and full publication records support scanning and detailed reading.
3. Team: PI and affiliation in the introduction; investigator profile and education; Ph.D. students; alumni; opportunity link.
4. Publications: direct page title; scope and search instructions; searchable and year-filtered records with authors, venues, PDFs, and video links.
5. Join Us: current recruitment scope; Ph.D. application instructions and required materials; postdoctoral inquiry instructions and required materials.
6. Not found: explicit error heading and a link to the homepage.

## Content and implementation

Publication records retain their source titles, authors, venues, and links. Research explanations were edited for direct technical language. Recruiting details and application requirements come from the supplied site content. Do not invent achievements, funding, research results, or vacancies.

Videos load YouTube's privacy-enhanced player only on activation. Fonts load with swap and have local fallbacks. No new runtime dependencies were introduced. Existing React/Vite routes are preserved.
