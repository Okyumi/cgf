<div align="center">

# China – Gulf Forum 2026

**The first student-led platform in the GCC fostering business, cultural, and academic exchanges between China and the Gulf**

[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222?logo=githubpages&logoColor=white)](https://china-gulf-forum.org)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#-tech-stack)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#-tech-stack)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.2.3-7952B3?logo=bootstrap&logoColor=white)](#-tech-stack)
[![License](https://img.shields.io/badge/License-All_Rights_Reserved-912F2F)](#-license)

---

</div>

## 🏛 About

Established in **2019**, the **China-Gulf Forum (CGF)** is the first forum in the GCC dedicated to fostering business, cultural, and academic exchanges between China and the Gulf region. What started as a student initiative at **NYU Abu Dhabi** has grown into a global platform connecting policymakers, industry leaders, researchers, and students — with **1,100+ attendees**, **76+ speakers**, and coverage from **CCTV**, **WAM**, and **Al Jazeera**.

## 🌐 Live Site

> **[china-gulf-forum.org](https://china-gulf-forum.org)**

## 📂 Project Structure

```
cgf-e127114f/
├── index.html              # Home — hero carousel, legacy, impact stats
├── panel.html              # Panels — 4 thematic discussion panels
├── partners.html           # Team — member profiles with flip cards
├── about.html              # Events — past event recaps
├── speaker.html            # Speakers — upcoming announcements
├── agenda.html             # Agenda — forum schedule
├── contact.html            # Contact — form via Formspree
│
├── css/
│   ├── cgf2026.css         # 2026 Chinese elegance theme
│   ├── styles.css          # Legacy Bootstrap + custom styles
│   └── newflexbox.css      # Flexbox utilities
│
├── js/
│   └── scripts.js          # Counter animations & scroll observers
│
├── media/
│   ├── logo/
│   │   ├── cgf2026-banner.svg   # Main banner logo (maroon/trilingual)
│   │   └── cgfmain.png          # Logo variant
│   ├── photos/
│   │   ├── hero/                # Carousel images (img1–5.jpg)
│   │   ├── events/              # Event photos (cgf0–3.jpg)
│   │   └── recaps/              # Recap photos (use1–7.jpg)
│   ├── icons/
│   │   ├── instagram.svg
│   │   ├── linkedin.svg
│   │   ├── wechat.svg
│   │   └── mail.png
│   ├── agenda/                  # Agenda graphics
│   │   ├── mainagenda.png
│   │   ├── opening.png
│   │   ├── art.png
│   │   ├── climate.png
│   │   ├── emerging.png
│   │   └── technology.png
│   └── fonts/
│       ├── Bagnard.otf
│       └── BagnardSans.otf
│
├── CNAME                   # Custom domain: china-gulf-forum.org
└── .github/workflows/      # GitHub Pages deployment
```

## 🎨 Design

The 2026 design follows a **Chinese elegance** aesthetic:

| Role | Color | Hex |
|------|-------|-----|
| ![#912F2F](https://img.shields.io/badge/■-912F2F?style=flat-square&color=912F2F) Primary | Maroon | `#912F2F` |
| ![#EDE6D6](https://img.shields.io/badge/■-EDE6D6?style=flat-square&color=EDE6D6) Background | Cream | `#EDE6D6` |
| ![#C4A35A](https://img.shields.io/badge/■-C4A35A?style=flat-square&color=C4A35A) Accent | Gold | `#C4A35A` |
| ![#003366](https://img.shields.io/badge/■-003366?style=flat-square&color=003366) Secondary | Navy | `#003366` |

**Typography**
- **Headings:** Cormorant Garamond (serif)
- **Body:** Inter (sans-serif)
- **Chinese:** Noto Serif SC
- **Custom:** Bagnard / BagnardSans (OTF)

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup |
| CSS3 | Custom properties, animations, responsive design |
| Bootstrap 5.2.3 | Grid system, components (CDN) |
| JavaScript | Scroll-triggered counters, intersection observers |
| Google Fonts | Web typography (CDN) |
| GitHub Pages | Static hosting with automatic deploys |
| Formspree | Contact form backend |

## 📝 How to Update

1. **Clone** the repository
2. **Edit** HTML files directly — no build step needed
3. **Theme variables** are in `css/cgf2026.css` under `:root`
4. **Push to `main`** — GitHub Pages deploys automatically

### Quick Reference

| What to update | Where |
|----------------|-------|
| Panel content | `panel.html` — each `.panel-card` div |
| Team members | `partners.html` — each `.team-member` div |
| Impact numbers | `index.html` — `.impact-section` |
| Logo | `media/logo/cgf2026-banner.svg` |
| Color palette | `css/cgf2026.css` — CSS custom properties |
| Hero images | `media/photos/hero/` |
| Event recaps | `about.html` + `media/photos/recaps/` |

## 📜 License

This project is maintained by the **China-Gulf Forum** team at **NYU Abu Dhabi**. All rights reserved.

---

<div align="center">

*A student-led initiative fostering China-Gulf dialogue since 2019*

</div>
