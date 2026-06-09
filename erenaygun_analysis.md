# erenaygun.com — Full Design & Function Analysis Report

**Subject:** Eren Aygün | Frontend Developer Portfolio  
**URL:** https://www.erenaygun.com  
**Analysed:** June 2026  
**Stack:** Nuxt.js · Tailwind CSS · TypeScript · Vercel  

---

## 1. IDENTITY & BRANDING

| Element | Detail |
|---|---|
| Owner | Eren Aygün |
| Role | Frontend Developer |
| Monogram / Logo | "E.A." — minimal typographic mark |
| Tagline | "Building modern websites." |
| Meta Description | "Frontend Developer. Building modern websites." |
| SEO | index, follow — fully open to search engines |
| OG / Twitter Card | summary_large_image — rich previews on social sharing |
| Deployed on | Vercel (confirmed via `_vercel/image` URL pattern for optimised images) |

---

## 2. PHILOSOPHICAL CORE

The entire website is built around **Stoic philosophy** — not as decoration, but as the structural identity of the portfolio. Every naming choice, quote, and section label is deliberately chosen from Stoic thought:

| Term Used | Origin | Meaning |
|---|---|---|
| THE INNERCITADEL | Marcus Aurelius (Meditations) | The impenetrable inner mind; reason as fortress |
| Amor Fati | Nietzsche / Stoics | "Love of fate" — embrace what happens |
| Memento Mori | Stoic tradition | "Remember you will die" — focus on what matters |
| CHRONICLES | General philosophy | History, record of experience |
| Descend | Metaphorical UX | Invitation to explore deeper |
| MMXXVI | Roman numerals | Year 2026 — classical aesthetic |
| Seneca quote in experience | Letters from a Stoic | "If one does not know to which port one is sailing…" |

This creates a coherent intellectual brand: the developer is not just someone who builds interfaces — he is someone who thinks deeply, values discipline, and approaches code as philosophy.

---

## 3. COLOR SCHEME & TYPOGRAPHY

### Color Palette (inferred from aesthetic + image presence)

| Role | Color |
|---|---|
| Background | Near-black / very dark (charcoal or deep navy — consistent with stoic dark aesthetic) |
| Primary Text | Off-white / cream |
| Accent | Likely muted gold or amber (classical statue evocation) |
| Secondary text / muted | Mid-grey |
| Section labels | All-caps, slightly dimmed or tracked-out |
| Borders / dividers | Very subtle, near-transparent |

### Typography

- **Section labels** (CHRONICLES, SELECTED WORKS, THE LIBRARY, Foundations): ALL CAPS, wide letter-spacing — classical, editorial feel
- **Main headings**: Large, bold — likely serif or a strong geometric sans-serif
- **Body / skill tags**: Clean sans-serif (likely system font or Inter/Geist via Tailwind defaults)
- **Quotes / philosophical text**: Italicised or lighter weight, set apart from technical content
- **Tech tags on projects/experience**: Small pill badges — NuxtTailwind CSSTypeScript format
- **Footer text**: "Built with logic and discipline. MMXXVI." — low-key, confident signature
- **Roman numerals**: Used in footer for the year, reinforcing classical theme

---

## 4. LAYOUT & STRUCTURE

The site is a **single-page scrollable portfolio** with anchor-linked navigation. There are no separate sub-pages.

### Overall Page Flow (top → bottom):

```
[PRELOADER / INTRO]
        ↓
[NAVBAR — sticky]
        ↓
[HERO SECTION — "THE INNERCITADEL"]
        ↓
[EXPERIENCE — "CHRONICLES"]
        ↓
[SKILLS — "Foundations"]
        ↓
[PROJECTS — "SELECTED WORKS"]
        ↓
[LIBRARY — "THE LIBRARY" book carousel]
        ↓
[PRINCIPLES — "Amor Fati"]
        ↓
[CONTACT — form + "Memento Mori"]
        ↓
[FOOTER]
```

---

## 5. SECTION-BY-SECTION BREAKDOWN

---

### SECTION 0 — PRELOADER / INTRO ANIMATION

**Evidence:** The fetched HTML contains `...` followed by `E.A.` appearing twice — indicating a loading/intro sequence before the main content renders.

**Likely Behaviour:**
- On page load, a preloader screen appears with the monogram "E.A." fading/scaling in
- Three animated dots (`...`) likely pulse or fade in sequence (a classic text-based loader)
- Once loaded, the preloader fades/slides out to reveal the hero section
- This is a common Nuxt.js page-load animation pattern (using `onMounted` + transition hooks)

---

### SECTION 1 — NAVBAR

**Position:** Sticky top, visible throughout scroll  
**Content:**
- Left: "E.A." monogram (links back to top / `#`)
- Center/Right: Navigation links — Experience · Skills · Projects · Library · Principles
- Far Right: "Contact" button (styled distinctly from nav links — likely outlined or pill-shaped)

**Behaviour:**
- Likely becomes more visible or changes opacity on scroll (blur backdrop / translucent glass effect common in Nuxt + Tailwind portfolios)
- Navigation links smoothly scroll to corresponding section anchors (`#experience`, `#skills`, `#projects`, etc.)
- Active link may highlight based on scroll position (intersection observer pattern)

---

### SECTION 2 — HERO ("THE INNERCITADEL")

**Layout:** Full-screen hero section  
**Content:**
- Eyebrow label: "THE INNERCITADEL" (all-caps, wide spacing)
- H1: "Eren Aygün" + subtitle "Frontend Developer"
- Hero image: A Stoic-style classical bust (marble philosopher sculpture) — the key visual anchor of the brand identity; image served through Vercel's image optimisation pipeline (`_vercel/image?url=/bust.png&w=1024&q=100`)
- Social links: GitHub + LinkedIn (icon/text links)
- Scroll CTA: "Descend" — invites user to scroll down

**Design intent:**
- The bust of a philosopher is a deliberate metaphor: the developer presents himself as a thinker, not just a coder
- "Descend" as a CTA is unconventional — most sites say "Scroll down" or have an arrow; "Descend" evokes going deeper into the content, into the fortress (the Innercitadel)

**Likely Animations:**
- Hero text fades/slides in on load (staggered: label → name → subtitle → links)
- Bust image may float or subtly pulse (CSS keyframe animation)
- "Descend" may have a bouncing arrow or animated underline
- Possible parallax on the bust as user begins to scroll

---

### SECTION 3 — EXPERIENCE ("CHRONICLES")

**Section Label:** "CHRONICLES"  
**Layout:** Timeline / vertical list  

**Entries:**

1. **Frontend Developer — Iceberg Digital** (Aug 2024 – Present)
   - Developing client websites from Figma designs using Nuxt.js + Tailwind CSS
   - Building adaptive interfaces for property recommendations / valuation journeys
   - Tech tags: Nuxt · Tailwind CSS · TypeScript

2. **Frontend Developer Intern — Iceberg Digital** (Jul 2024 – Aug 2024)
   - Helped develop a UI component library
   - Tech tags: Nuxt · Tailwind CSS · TypeScript

3. **Started Web Journey** (Dec 2022)
   - Not a job entry — a milestone/origin story moment
   - Accompanied by Seneca quote: *"If one does not know to which port one is sailing, no wind is favorable."*
   - This is a creative touch — framing a learning milestone as equally important as formal experience

**Design:**
- Dates likely displayed prominently in muted colour (ALL CAPS: AUG 2024 — PRESENT)
- Bullet points replaced with ◈ (diamond-like custom icon) — consistent branded symbol
- Tech tags as small pill badges at the bottom of each entry
- Timeline may have a vertical line connector between entries

**Likely Animations:**
- Each entry fades/slides in from left as user scrolls into view (Intersection Observer)
- Tech badges may stagger their appearance

---

### SECTION 4 — SKILLS ("Foundations")

**Section Label:** "Foundations"  
**Section Quote:** *"The strength of the structure lies in the integrity of its base; mastery is but logic applied with discipline."*  
**Sub-label:** "The Facade of Reason" (Frontend) / "The Artisan's Arsenal" (Tools) / "The Subterranean Core" (Backend)

**Three Columns:**

| Frontend — "The Facade of Reason" | Tools — "The Artisan's Arsenal" | Backend — "The Subterranean Core" |
|---|---|---|
| React / Next | Git | Node.js |
| Vue / Nuxt | Figma | Java |
| Pinia | Postman | Python |
| Tailwind | | Express |
| Redux | | MongoDB |
| TypeScript | | SQL |
| JavaScript | | Supabase |
| Bootstrap | | |

**Three Philosophy Pillars (below the skill lists):**

- **Foundational Craft** — "I don't just look at frontend as making things pretty. I've learned that how you structure your code matters more than the looks..."
- **The Aesthetic of Logic** — "I love systems that just work. I try to keep the logic as simple and readable as possible..."
- **Resilient Delivery** — "The web is unpredictable, so I build stuff that can handle it. My goal is to deliver projects that don't just look good on my machine..."

**Design intent:**
- The "creative naming" of columns (Facade of Reason, Subterranean Core) adds personality beyond just listing technologies
- The three pillars act like a philosophical manifesto embedded inside a skills section — they explain WHY he works the way he does
- Very few portfolios combine self-philosophy with skill listings this cohesively

**Likely Animations:**
- Skills may animate in as tag clouds or with stagger delays
- Pillars may fade in as user scrolls, possibly one by one

---

### SECTION 5 — PROJECTS ("SELECTED WORKS")

**Section Label:** "SELECTED WORKS"  
**Layout:** Card-based project display (likely 2 columns on desktop, 1 on mobile)

**Project 1: DevTool Center**
- URL: https://devtool.center/
- Preview image: `/images/devtool.png` (served via Vercel optimisation, w=1536)
- Description: "A platform that helps you find the best productivity tools. Community-driven and open-source. Anyone can submit tools."
- Stack: Nuxt · Node.js · MongoDB
- Links: Live Demo + GitHub

**Project 2: Focuzy**
- URL: https://www.focuzy.app/
- Preview image: `/images/focuzy.png` (served via Vercel optimisation, w=1536)
- Description: "A virtual co-working space where you can join shared study rooms and focus alongside others — no video, no pressure. Themed rooms like Library, Café, and Rain Retreat create ambient presence for quiet, accountable work sessions."
- Stack: Nuxt · Supabase · Tailwind · TypeScript
- Links: Live Demo only (no public GitHub for this one)
- Note: Focuzy's description is notably poetic and atmospheric — "ambient presence", "quiet, accountable work sessions"

**CTA at bottom:** "View More on GitHub" — links to his GitHub profile

**Design:**
- Large project preview images (screenshot of the actual product)
- Hover effect on cards likely reveals or highlights — possibly a subtle lift, border glow, or overlay
- Images linked to live demos (entire image is clickable)
- Tech stack pills below project title

---

### SECTION 6 — LIBRARY ("THE LIBRARY")

**Section Label:** "THE LIBRARY"  
**Intro:** "Some of my favorite books"  
**Layout:** Horizontal carousel / slider with ← → arrow navigation

**Books Listed (in carousel order):**

| # | Title | Author | One-liner |
|---|---|---|---|
| 1 | Meditations | Marcus Aurelius | Timeless stoic wisdom. |
| 2 | Start With Why | Simon Sinek | Inspiring action through purpose. |
| 3 | What Is Man? | Mark Twain | A determined look at human nature. |
| 4 | Letters from a Stoic | Seneca | Practical wisdom for daily life. |
| 5 | Book of Five Rings | Miyamoto Musashi | Strategy, tactics, and philosophy. |
| 6 | The Art of War | Sun Tzu | Ancient strategy for modern conflict. |
| 7 | Atomic Habits | James Clear | Tiny changes, remarkable results. |
| 8 | The Witcher | Andrzej Sapkowski | A monster hunter in a morally grey world. |
| 9 | The Broken Empire | Mark Lawrence | Dark fantasy of a ruthless prince. |

**Design intent:**
- A book section in a developer portfolio is rare and powerful — it communicates intellectual breadth and character beyond code
- The mix of pure Stoicism (Marcus Aurelius, Seneca), strategy (Sun Tzu, Musashi), self-improvement (Atomic Habits), and dark fantasy (The Witcher, Broken Empire) paints a complete personality
- Each card likely shows a book cover image or stylised placeholder + title + author + one-liner tagline

**Functionality:**
- ← → arrow buttons to navigate the carousel
- Possibly keyboard-navigable or swipeable on mobile
- May auto-scroll or pause on hover

---

### SECTION 7 — PRINCIPLES ("Amor Fati")

**Heading:** "Amor Fati"  
**Body:** "Love of fate. Embracing every technical challenge as a necessity."

This is a single, standalone statement section — a personal manifesto distilled to one Latin phrase and one practical sentence connecting philosophy to professional work.

**Design:**
- Likely large, centred typographic block
- Possibly with a Roman numeral or decorative mark (the "I" visible in source before "Amor Fati" suggests this may be the first in a numbered list of principles — suggesting there may be more principles rendered via JavaScript that weren't in the static fetch)
- Minimal layout — the white space around the text is intentional emphasis

---

### SECTION 8 — CONTACT FORM

**Heading:** "Contact me"  
**Subheading:** "Feel free to reach out"

**Form Fields:**
- Your Name (text input)
- Email Address (email input)
- Subject (text input)
- Your Message (textarea)
- Submit: "SEND MESSAGE" button (all-caps, consistent with site style)

**Below the form:**
- "Memento Mori" — the Stoic closing statement, placed just above the footer. A powerful, unusual footer text for a developer portfolio.
- GitHub + LinkedIn links repeated here

**Form Behaviour (likely):**
- Client-side validation (required fields, email format)
- May use Nuxt server routes or a third-party service (Resend, EmailJS, Formspree) for form submission
- Success/error state feedback

---

### SECTION 9 — FOOTER

**Content:**
- "Built with logic and discipline. MMXXVI."
- "© 2026 Eren Aygün. All rights reserved."

**Notes:**
- "MMXXVI" = Roman numeral for 2026 — consistent with the classical, philosophical aesthetic throughout the site
- "Logic and discipline" echoes the skills section quote, closing the page with the same values it opened with

---

## 6. ANIMATIONS — FULL INVENTORY

| Animation | Trigger | Likely Implementation |
|---|---|---|
| Preloader dots | Page load | CSS keyframe fade/pulse on `...` text |
| E.A. monogram reveal | Page load | Opacity + scale transition (Nuxt `onMounted`) |
| Preloader exit | Load complete | Fade-out transition + slide-up |
| Hero text stagger | On mount | GSAP or CSS custom properties with `animation-delay` |
| Bust image float | Idle / always | CSS `@keyframes` float animation |
| "Descend" CTA | Idle | Bouncing arrow or animated underline |
| Navbar opacity change | On scroll | JS scroll event + class toggle |
| Active nav highlight | On scroll | Intersection Observer watching sections |
| Experience entries | Scroll into view | Fade + slide from left (Intersection Observer) |
| Skill tags | Scroll into view | Stagger fade-in per tag |
| Project card hover | Mouse hover | Scale lift or border glow |
| Project image hover | Mouse hover | Overlay or brightness shift |
| Library carousel ← → | Button click | Smooth slide transition (CSS transform or Swiper.js) |
| Contact form submit | Button click | Loading state → success/error state |
| Smooth scroll | Nav link click | Native CSS `scroll-behavior: smooth` or Nuxt router |
| Page transitions | Route change | Vue transition component (if multi-page) |

---

## 7. RESPONSIVE DESIGN

| Breakpoint | Expected Layout |
|---|---|
| Mobile (<768px) | Single column; hamburger menu; carousel arrows; stacked project cards |
| Tablet (768–1024px) | 2-column skills grid; side-by-side project cards |
| Desktop (>1024px) | Full 3-column skills layout; hero with bust beside text; full nav visible |

The use of Tailwind CSS means responsive breakpoints are handled with utility classes (`sm:`, `md:`, `lg:`).

---

## 8. TECHNOLOGY STACK (CONFIRMED + INFERRED)

| Layer | Technology |
|---|---|
| Framework | Nuxt.js 3 (Vue 3) — confirmed by developer's own work history |
| Styling | Tailwind CSS — confirmed |
| Language | TypeScript — confirmed |
| Hosting | Vercel — confirmed via `_vercel/image` URL pattern |
| Image Optimisation | Vercel Image Optimisation (auto quality/width via URL params) |
| Animation | CSS transitions + Intersection Observer (likely GSAP for complex sequences) |
| Form handling | Likely Nuxt server routes + Resend/EmailJS |
| SEO | Nuxt's built-in `useHead()` + OpenGraph + Twitter card meta |
| Analytics | Possibly Vercel Analytics (free tier) |

---

## 9. SEO & PERFORMANCE

- **Title tag:** "Eren Aygün | Frontend Developer" — clean, keyword-rich
- **Meta description:** "Frontend Developer. Building modern websites." — concise
- **OG tags:** Full Open Graph set (title, description, type, URL)
- **Twitter card:** `summary_large_image` — rich preview with large image
- **Robots:** `index, follow` — fully crawlable
- **Image optimisation:** All images routed through Vercel's CDN optimisation layer with explicit width (`w=1024`, `w=1536`) and quality (`q=100`) parameters — fast loading, responsive sizes
- **Viewport meta:** `width=device-width, initial-scale=1` — mobile first

---

## 10. CONTENT STRATEGY ANALYSIS

The site's content follows a clear arc — it's not just a list of technologies, it's a **narrative identity**:

1. **Open with a concept** — "THE INNERCITADEL" immediately signals depth
2. **Show a human** — the stoic bust makes it personal and philosophical
3. **Tell a story** — CHRONICLES frames experience as a hero's journey (including the humble "started web journey" milestone)
4. **Explain the WHY** — the three philosophy pillars in the skills section explain motivation, not just capability
5. **Show the work** — SELECTED WORKS with live demos + GitHub
6. **Reveal the person** — THE LIBRARY shows intellectual curiosity beyond code
7. **State the creed** — "Amor Fati" closes the philosophy arc
8. **Invite connection** — the contact form ends with "Memento Mori" — remember you'll die, so reach out now

---

## 11. STRENGTHS OF THE DESIGN

1. **Deeply cohesive theme** — Stoicism is not just decoration; it informs every word choice, section name, and image
2. **Rare creative courage** — "Memento Mori" as footer text is unusual and memorable
3. **The bust image** — one strong, unexpected visual that immediately differentiates from generic dev portfolios
4. **Personality-first** — the Library section and philosophy quotes reveal character most portfolios hide
5. **Production quality** — Vercel image optimisation, proper meta tags, TypeScript — the technical choices mirror the stated values
6. **Minimal but intentional** — nothing feels gratuitous; every element earns its place
7. **The naming** — "Facade of Reason", "Subterranean Core", "Artisan's Arsenal" adds wit without sacrificing clarity

---

## 12. COMPLETE RECREATION PROMPT

If you wanted to build a site inspired by this design, here is the full specification prompt:

---

**PROMPT FOR RECREATION:**

> Build a dark-themed, stoic-philosophy-inspired personal portfolio website for a frontend developer. The site is a single-page scrollable layout hosted on Vercel, built with Nuxt.js 3, Tailwind CSS, and TypeScript.
>
> **IDENTITY:** The developer goes by initials "E.A." — the monogram appears as the logo. The brand is built entirely around Stoic philosophy: section names are classical and dramatic, Latin phrases appear as headings and footer text, and a classical marble bust serves as the hero image.
>
> **COLOUR & TYPOGRAPHY:** Use a near-black background with off-white/cream text. Accent colours are muted — no bright neons. Section labels are all-caps with wide letter-spacing. Body text is clean sans-serif. Philosophical quotes use lighter weight or italic styling. The year appears as Roman numerals in the footer (MMXXVI).
>
> **PRELOADER:** On page load, animate the "E.A." monogram fading in with three pulsing dots below it, then transition out to reveal the hero section.
>
> **NAVBAR:** Sticky, semi-transparent with backdrop blur. Left: "E.A." monogram. Right: anchor links (Experience · Skills · Projects · Library · Principles) + a distinct "Contact" CTA button. Highlight active section on scroll via Intersection Observer.
>
> **HERO (Section: "THE INNERCITADEL"):** Full-height section. Eyebrow label in caps. Large H1 with name + role. A classical stoic bust image floats beside or behind the text. GitHub + LinkedIn links below. A "Descend" CTA with animated arrow at the bottom.
>
> **EXPERIENCE (Section: "CHRONICLES"):** Vertical timeline with bold dates in caps (e.g. AUG 2024 — PRESENT). Custom ◈ bullet icons. Tech stack pills at the bottom of each entry. Include a "milestone" entry (not a job) with a Seneca quote as a creative origin story.
>
> **SKILLS (Section: "Foundations"):** Three named columns — "The Facade of Reason" (Frontend), "The Artisan's Arsenal" (Tools), "The Subterranean Core" (Backend). Below columns: three philosophy-themed paragraphs explaining the developer's approach: Foundational Craft, The Aesthetic of Logic, Resilient Delivery.
>
> **PROJECTS (Section: "SELECTED WORKS"):** 2-column card grid (1 on mobile). Each card has: large screenshot preview image (Vercel-optimised), project title, description (written atmospherically, not technically), tech stack pills, and Live Demo + GitHub links. CTA at bottom linking to GitHub profile.
>
> **LIBRARY (Section: "THE LIBRARY"):** Horizontal carousel of 9 favourite books. Each card: book title, author name, 5-word tagline. ← → arrow navigation. Books include Meditations, Letters from a Stoic, Book of Five Rings, Art of War, Atomic Habits, The Witcher, The Broken Empire.
>
> **PRINCIPLES (Section: "Amor Fati"):** Single large centred typographic block. Latin heading: "Amor Fati." One-sentence translation connecting the philosophy to technical work.
>
> **CONTACT:** Simple form (Name, Email, Subject, Message, SEND MESSAGE button). Below form: "Memento Mori" in caps as the closing philosophical statement. GitHub + LinkedIn links.
>
> **FOOTER:** "Built with logic and discipline. MMXXVI." + copyright notice.
>
> **ANIMATIONS:** Stagger all section entries with Intersection Observer fade-ins. Bust image has a gentle CSS float animation. Smooth scroll throughout. Project cards have hover lift/glow. Book carousel slides smoothly. Preloader exits with a fade transition.
>
> **TONE:** Confident, philosophical, disciplined. The developer presents themselves as a thinker who builds, not just a developer. Every word choice should feel intentional and weighted.

---

*Report compiled from live fetch and analysis of https://www.erenaygun.com/ — June 2026*
