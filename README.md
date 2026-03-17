# China-Gulf Forum (CGF) Website

Official website for the **China-Gulf Forum (CGF)** — a student-led platform fostering China-Gulf dialogue since 2019.

**Live site:** [china-gulf-forum.org](https://china-gulf-forum.org)

## About CGF

Established in 2019, the China-Gulf Forum is the first forum in the GCC dedicated to fostering business, cultural, and academic exchanges between China and the Gulf region. What started as a student initiative at NYU Abu Dhabi has grown into a global platform connecting policymakers, industry leaders, and researchers.

## Website Structure

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with legacy, CGF 2026 overview, and impact statistics |
| Panels | `panel.html` | Four thematic panels: Business & Finance, International Relations, Technology & Innovation, Arts & Culture |
| Team | `partners.html` | Team member profiles with interactive flip cards |
| Previous Events | `about.html` | Event recaps and past activities |
| Speakers | `speaker.html` | Speaker announcements |
| Agenda | `agenda.html` | Forum agenda and schedule |
| Contact | `contact.html` | Contact form (via Formspree) |

## Tech Stack

- **HTML5** / **CSS3** / **JavaScript** — static site, no build tools required
- **Bootstrap 5.2.3** — responsive grid and components (loaded via CDN)
- **Google Fonts** — Cormorant Garamond (headings), Inter (body), Noto Serif SC (Chinese text)
- **Custom CSS** — `css/cgf2026.css` for the 2026 Chinese elegance theme
- **GitHub Pages** — deployed automatically via `.github/workflows/static.yml`
- **Custom Domain** — `china-gulf-forum.org` (configured via `CNAME` file)

## Design

The 2026 design follows a **Chinese elegance** aesthetic with:

- Restrained maroon (`#912F2F`) / cream (`#EDE6D6`) / gold (`#C4A35A`) palette
- Refined serif typography for headings, clean sans-serif for body text
- Generous whitespace and subtle shadows
- Animated impact statistics with scroll-triggered counters
- Responsive design with mobile hamburger navigation

## How to Update

1. Clone the repository
2. Edit HTML files directly — no build step needed
3. CSS theme variables are in `css/cgf2026.css` under `:root`
4. Commit and push to `main` — GitHub Pages deploys automatically

### Updating Content

- **Panel content** — Edit `panel.html`, each panel is a `.panel-card` div
- **Team members** — Edit `partners.html`, each member is a `.team-member` div
- **Impact numbers** — Edit the `.impact-section` in `index.html`
- **Logo** — Replace `cgf2026-logo.svg`

## License

This project is maintained by the China-Gulf Forum team at NYU Abu Dhabi.
