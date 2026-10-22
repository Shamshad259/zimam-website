# PROJECT BRIEF — ZIMAM ELECTRICAL COMPANY CORPORATE WEBSITE

Build a premium, fully responsive, bilingual (English + Arabic) corporate website for
ZIMAM Electrical Company (ZELCOSA) — شركة زمام للكهرباء — an MEP, ELV/Telecom and
Civil contracting company based in Riyadh, Saudi Arabia.

The attached company profile and logo are the source of truth. Use the content in this
brief exactly. Do NOT invent statistics, years of experience, certifications, ISO
numbers, testimonials, team member names or project details that are not provided here.

====================================================================

## 1. ATTACHMENTS — HOW TO USE THEM

====================================================================

- Zimam logo: use in header, footer, favicon and social share image. Never redraw,
  recolor or distort it. Derive the entire color theme from it.
- Client logos (11 files): use exactly as uploaded on the Clients section/page.
  Never regenerate, redraw or approximate any client logo.
- Company profile PDF: reference for tone, layout ideas and content. Do not copy its
  stock photos of people.

====================================================================

## 2. BRAND & DESIGN SYSTEM

====================================================================

Personality: engineering precision, trust, scale, Saudi Vision 2030. Corporate and
technical, not playful. Think high-end engineering firm, not a generic template.

Colors (match to logo):

- Primary dark navy: #0A0A4F (backgrounds, headings)
- Royal blue: #00008B (accents, links, gradients)
- Signal red: #E30613 (CTAs, highlights, thin accent lines, icons)
- White #FFFFFF and light grey #F2F3F8 for section backgrounds
- Dark text #1A1A2E, muted text #5A5F7A

Typography:

- Headings: Montserrat (700/800), uppercase for major section titles
- Body: Inter (400/500/600)
- Arabic: IBM Plex Sans Arabic for all Arabic text

Visual language (taken from the company profile):

- Diagonal/angled navy shapes cutting across images
- Thin red horizontal accent lines with a small dashed ending ( ———— — — )
- Section labels in two lines: small light uppercase word above a bold large word
  (e.g. "OUR KEY" / "SERVICES", "WELCOME TO" / "OUR COMPANY")
- Vertical image strips split into 3 panels for division banners
- Red hexagon check icons for service lists
- Large faint "ZIMAM" watermark text in dark sections
- Subtle motion: fade/slide-in on scroll, gentle hover lift on cards. Respect
  prefers-reduced-motion.

====================================================================

## 3. IMAGES — STRICT RULES

====================================================================

AI-generated / stock images ARE allowed for atmosphere only:

- Home hero: Riyadh skyline (Kingdom Centre) at dusk with modern infrastructure
- Electrical: LV switchgear room, cable trays, transformer, substation
- ELV & Telecom: structured cabling racks, fiber optics, CCTV, telecom tower
- Mechanical: HVAC ductwork, chillers, red fire-fighting pipework
- Civil: construction site, concrete works, cranes at sunset
- About / Contact: Riyadh cityscape, engineers in PPE on a Saudi site
  People shown should look like a Saudi/Gulf workforce in proper PPE (helmets,
  hi-vis vests). No generic Western office stock photos.

Real photos ONLY in Projects (and in the Gallery if it comes back, see §5.10):

- Never generate or label an AI image as a Zimam project or site photo.
- Until real photos are uploaded, use clearly neutral placeholders in Projects
  and leave a code comment "REPLACE WITH REAL SITE PHOTO".

All images: lazy-loaded, compressed (WebP), descriptive alt text in both languages.

====================================================================

## 4. GLOBAL LAYOUT

====================================================================

Top bar (desktop only, navy): phone +966 56 000 0320 (tel:+966560000320) |
info@zelcosa.com | Riyadh, KSA | language switch EN / العربية
(The landline +966 11 463 4427 appears in the footer and on the Contact page only.)

Contact details live in src/data/site.ts only (phones, WhatsApp number, address).
Full address: Floor 2, RHGA7630, King Abdulaziz Rd, Al Murooj, Riyadh 12282,
Kingdom of Saudi Arabia (Contact page and footer). Never hardcode them elsewhere.

Header (sticky, white, shadow on scroll):

- Logo left (right in Arabic)
- Nav: Home, About, Services (dropdown: Electrical, ELV & Telecom, Mechanical,
  Civil), Projects, Clients, Quality & HSE, Contact
  (Gallery removed for now — data and photos kept for later.)
- Red "Request a Quote" button
- Mobile: hamburger with full-screen slide-in menu

Floating WhatsApp button (bottom corner, all pages):
link https://wa.me/966560000320 with prefilled text
"Hello Zimam Electrical, I would like to enquire about a project."

WhatsApp placement rule: WhatsApp appears ONLY in (1) the floating button, (2) the
footer contact list and (3) the Contact page "Contact information" card. No other
WhatsApp buttons or links anywhere (CTA bands use "Call us" instead).

Footer (navy, with faint ZIMAM watermark):

- Column 1: logo, one-line description, CR and VAT numbers
- Column 2: Quick links
- Column 3: Our divisions
- Column 4: Contact details + WhatsApp + map link
- Bottom bar: © 2026 ZIMAM Electrical Company. All rights reserved.
  | CR: 7053132879 | VAT: 31451320040003

Pre-footer CTA band on every page except Contact and the four division pages
(division pages have their own CTA band instead, so never show two back-to-back):
"Have a project in mind?" / "Tell us your requirements and our engineering team will
get back to you with a clear proposal." Buttons: Request a Quote, Call us
(tel: link to +966 56 000 0320, outline style, phone icon).

====================================================================

## 5. PAGES & CONTENT

====================================================================

---

### 5.1 HOME

---

1. Hero (full-height, skyline image, diagonal navy overlay)
   - Small label: "Riyadh • Kingdom of Saudi Arabia"
   - H1: "Engineering Excellence in Modern Infrastructure"
   - Sub: "Electrical, Mechanical, Plumbing, ELV, Telecom and Civil contracting
     across Saudi Arabia — delivered safely, on time and to the highest industry
     standards."
   - Buttons: "Request a Quote" (red), "Our Services" (outline white)
   - Bottom strip: Electrical | Mechanical | Telecom | Civil Works

2. Welcome / About intro (image + text)
   - "WELCOME TO" / "OUR COMPANY"
   - "ZIMAM Electrical Company (ZELCOSA) is a professional MEP contracting company
     providing Electrical, Mechanical, Plumbing, ELV, Telecom and Civil solutions
     across Saudi Arabia."
   - "We specialize in delivering high-quality, safe and cost-effective services for
     infrastructure, industrial, commercial and residential projects. With a skilled
     workforce and commitment to excellence, we ensure every project is completed
     efficiently, on time and in accordance with the highest industry standards while
     supporting the goals of Saudi Vision 2030."
   - Button: "About Us"

3. Our Divisions — 4 large image cards (Division 01–04) with number, title,
   one-line description, and "Explore" link:
   - 01 Electrical Division — Complete power distribution and electrical
     infrastructure, from EHV cabling to testing and commissioning.
   - 02 ELV & Telecom Division — Low-current, network, security and communication
     systems for modern and smart buildings.
   - 03 Mechanical Division — HVAC, fire fighting and plumbing systems delivered to
     international standards.
   - 04 Civil Division — Construction, finishing and infrastructure support works.

4. Sectors we serve (icon row): Infrastructure, Industrial, Commercial,
   Residential, Utilities, Data Centers & Critical Facilities, Hospitality

5. Featured projects — 4 cards from the Projects list (STC Data Center, Haram
   Makkah, Raffles Hotel Diriyah, SEVEN Riyadh) + "View All Projects"

6. Why choose Zimam — 6 numbered items:
   01 Multi-Discipline Under One Roof — Electrical, mechanical, ELV, telecom and
   civil works managed by one accountable team.
   02 Safety First — Strict safety protocols, ongoing training and regular site
   inspections on every project.
   03 Quality Driven — Rigorous quality control, attention to detail and the best
   materials and practices.
   04 Skilled Workforce — Experienced engineers, supervisors, foremen and
   technicians across every discipline.
   05 Riyadh-Based, Kingdom-Wide — Locally established with projects across Riyadh,
   Makkah, Diriyah and beyond.
   06 Vision 2030 Partner — Committed to empowering local talent and supporting the
   Kingdom's development.

7. Clients strip — "TRUSTED BY" / "LEADING CLIENTS & CONTRACTORS": infinite
   auto-scrolling logo marquee (pause on hover), logos greyscale → full color on
   hover. Button: "View All Clients".

8. Chairman quote band (navy, large quote mark) — short excerpt of the Chairman
   message with link to About.

---

### 5.2 ABOUT

---

- Page banner: "About Zimam"
- Company overview (same text as Home welcome section, full version)
- MESSAGE FROM OUR CHAIRMAN (navy section, quote styling):
  "Our vision is to be a leading contracting company in Saudi Arabia, recognized for
  excellence, innovation and sustainability in delivering infrastructure and
  development projects. We aspire to contribute significantly to the Kingdom's
  Vision 2030 by driving progress, empowering local talent and adopting advanced
  technologies. Through our unwavering commitment to quality and safety, we aim to
  set new industry benchmarks and become a trusted partner in shaping a brighter
  future for Saudi Arabia."
  — Chairman, ZIMAM Electrical Company
- Vision & Mission (two cards):
  Vision: To be a leading contracting company in Saudi Arabia, recognized for
  excellence, innovation and sustainability.
  Mission: To deliver reliable, high-quality and cost-effective Electrical,
  Mechanical, Plumbing, HVAC, Fire Fighting, ELV, Telecom and Civil solutions for
  infrastructure, industrial, commercial and residential projects — committed to
  quality, safety, efficiency and customer satisfaction, and contributing to the
  goals of Saudi Vision 2030.
- Core values (4 icon cards): Safety, Quality, Integrity, Commitment
- Company registration block: CR 7053132879 | VAT 31451320040003 | Riyadh, KSA

---

### 5.3 SERVICES OVERVIEW

---

Intro text + 4 division cards linking to each division page.

Each division page uses the same template:

1. Banner with 3-panel vertical image strip, "DIVISION - 0X" label and title
2. Description paragraph
3. "OUR KEY" / "SERVICES" — two-column list with red hexagon check icons and arrows
4. Related projects (from Projects data, filtered by division)
5. CTA band: "Discuss your [division] requirements" with Request a Quote and
   Call us buttons. This replaces the global pre-footer CTA band on these pages.

---

### 5.4 DIVISION 01 — ELECTRICAL (/services/electrical)

---

Description: "Our Electrical Division delivers complete power distribution and
electrical infrastructure solutions for industrial, commercial, residential and
utility projects. We specialize in the installation, testing, commissioning and
maintenance of electrical systems, ensuring safe, reliable and efficient power
delivery."
Services:

- EHV, HV and LV Cable Installation
- Electrical Panels and Switchgear Installation
- Busbar Installation
- Transformer Installation
- Small Power Installation
- Internal and External Lighting Installation
- Street Lighting Installation
- Cable Glanding and Termination
- Control and Instrumentation Cabling
- Earthing and Lightning Protection Systems
- Testing, Commissioning and Maintenance

---

### 5.5 DIVISION 02 — ELV & TELECOM (/services/elv-telecom)

---

Title: "ELV, Network & Telecom Systems Division"
Description: "Our ELV & Network Systems Division provides advanced low-current and
communication infrastructure solutions for commercial, industrial, residential and
critical facilities. We deliver reliable, secure and future-ready systems that
support modern business operations and smart building requirements."
Services:

- Structured Cabling and Network Solutions
- Data and Fiber Optic Cabling Systems
- Telecom Tower Installation Works
- CCTV and Surveillance Systems
- Access Control Systems
- Security and Monitoring Solutions
- Public Address (PA) Systems
- Intercom Systems
- SMATV and IPTV Systems
- Telephone and Communication Systems
- Testing, Commissioning and Maintenance

---

### 5.6 DIVISION 03 — MECHANICAL (/services/mechanical)

---

Description: "Our Mechanical Division provides comprehensive solutions for HVAC,
Fire Fighting and Plumbing systems for commercial, industrial, residential and
infrastructure projects. We deliver complete design support, installation, testing,
commissioning and maintenance services in compliance with international standards
and project specifications."
Group the services under 3 sub-headings:
HVAC

- Heating, Ventilation and Air Conditioning (HVAC) Systems
- Chilled Water and DX Air Conditioning Systems
- Ventilation and Exhaust Systems
  Fire Fighting
- Fire Pumps, Sprinkler and Hydrant Systems
- Fire Suppression Systems
  Plumbing
- Plumbing and Drainage Systems
- Water Supply and Distribution Networks
- Sewage and Stormwater Systems
  Plus: Testing, Commissioning and Maintenance Services

---

### 5.7 DIVISION 04 — CIVIL (/services/civil)

---

Description: "Our Civil Division specializes in construction, finishing and
infrastructure support works, delivering high-quality workmanship and efficient
project execution. With experienced engineers, supervisors and skilled workers, we
ensure projects are completed safely, on schedule and to the highest quality
standards."
Group under 2 sub-headings:
Construction & Infrastructure

- Site Preparation and Excavation Works
- Earthworks and Backfilling
- Concrete and Foundation Works
- Masonry and Brickwork
- Block Work Construction
- Road and Pavement Works
  Finishing & Maintenance
- Plastering and Rendering Works
- Gypsum Partition and Ceiling Works
- Floor and Wall Tile Installation
- Marble and Granite Works
- Interior and Exterior Painting Works
- Waterproofing Applications
- General Building Maintenance and Renovation

---

### 5.8 PROJECTS (/projects)

---

Filter tabs: All | Electrical | Mechanical | MEP | Civil
Store projects in one data file so they are easy to edit. Each card: image
placeholder (real photo later), title, location, scope tags, short description.

1. STC Data Center — Al Rawabi, Riyadh
   Scope: Electrical installation works. Tags: Electrical, Data Center
2. Haram Makkah Projects — Makkah
   Scope: Electrical and HVAC installation works. Tags: Electrical, Mechanical
3. Raffles Hotel — Diriyah
   Scope: Electrical and plumbing installation works. Tags: Electrical, Plumbing,
   Hospitality
4. SEVEN (Saudi Entertainment Ventures) — Riyadh
   Scope: Cable installation, panel erection, testing and commissioning works.
   Tags: Electrical, Entertainment
5. Private Villa Projects — Riyadh
   Scope: Executed in collaboration with Gulf Speaking Contracting Company.
   Tags: MEP, Residential
6. Warehouse Projects
   Scope: Executed for Nexify Logistics. Tags: MEP, Industrial
7. KidZone School Renovation — Ar Rabi District, Riyadh
   Scope: Complete MEP (Mechanical, Electrical and Plumbing) works.
   Tags: MEP, Education

Clicking a card opens a modal/detail view with a photo carousel.

---

### 5.9 CLIENTS (/clients)

---

"OUR MAJOR" / "CLIENTS, CONTRACTORS & PARTNERS"
Short intro: "We are proud to work with leading developers, contractors and
organizations across the Kingdom."
Responsive logo grid (white cards, light border, logos centered, greyscale → color
on hover, client name under each logo as caption):

1. SEVEN — Saudi Entertainment Ventures
2. Elite Infrastructure & Technology
3. HAPCO
4. Kidzink
5. NHC — Noura Hamdan Al Subaie General Contracting Co.
6. Multicoat
7. Shapoorji Pallonji
8. Concrete Plus
9. DMCC — Doha Modern Contracting Company
10. ACME Network Services (Telecommunication & Energy)
11. Al Azaem
    Use the uploaded logo files only. Keep logos in their original aspect ratio with
    consistent max height.

---

### 5.10 GALLERY — REMOVED

---

Gallery removed for now — data and photos kept for later.
Do not build the page or link to it. `src/data/gallery.ts`, the gallery components
and the photos in `public/images/profile/site/` are kept so it can be restored.

---

### 5.11 QUALITY & HSE (/quality-hse)

---

Hero: "Built on Safety, Quality and Accountability"
Center visual: circular "QUALITY POLICIES" wheel with 4 segments (as in profile),
each linking to a card below.

Safety First Policy:
"Our company is committed to maintaining a 'Safety First' policy to ensure the
well-being of all employees, subcontractors and clients. We prioritize safety by
adhering to strict safety protocols, providing ongoing training and conducting
regular safety inspections. Every individual on site is responsible for following
safety guidelines and reporting potential hazards. By fostering a culture of safety,
we aim to prevent accidents, protect health and promote a safe working environment
for everyone involved. Safety is not just a priority; it's a core value in every
aspect of our operations."

Quality Policy:
"Our Quality Policy is centered on delivering the highest standards of excellence in
every project we undertake. We are committed to ensuring that all work is completed
to meet or exceed customer expectations, industry regulations and safety
requirements. By maintaining a culture of continuous improvement, we focus on
rigorous quality control, attention to detail and the use of the best materials and
practices. Our goal is to achieve consistent, reliable results that not only satisfy
our clients but also enhance the reputation and long-term success of our company.
Quality is at the heart of everything we do."

HR Policy:
"Our HR policy is designed to foster a positive, respectful and inclusive work
environment where all employees are valued and supported. We focus on fair
recruitment, equal opportunity and employee development, ensuring a culture of
continuous growth and professional advancement. Our policy emphasizes clear
communication, work-life balance and the well-being of our team members. We are
committed to providing a safe, respectful and motivating workplace where everyone can
thrive and contribute to the company's success."

Technical Team Development:
"Our Technical Training program is designed to equip employees with the skills and
knowledge necessary to excel in their roles and meet industry standards. We provide
hands-on training, workshops and access to the latest technologies, ensuring that
our team is always up to date with the best practices and innovations in the field.
Continuous learning is encouraged, with opportunities for employees to enhance their
technical expertise, improve job performance and advance in their careers. By
investing in technical training, we ensure high-quality results, safety and
operational efficiency across all projects."

Add an empty "Certifications" section with placeholder cards and a code comment
"ADD CERTIFICATES HERE" — do not invent certificate names.

---

### 5.12 CONTACT (/contact)

---

Page banner "Contact Us", then two columns on desktop (single column on mobile:
form first, then contact information, then map). Both columns sit in cards with a
soft shadow and rounded corners (rounded-xl), aligned to the same top edge.

Left (~60%) — "Send us a message" card (Request a Quote form):
Fields in a 2-column grid: Full name* | Company, Email* | Phone* (Saudi format),
Service required | Project type, Project location (full width), Message*
(full-width textarea, ~6 rows).
- Service required (dropdown): Electrical, ELV & Telecom, Mechanical – HVAC,
  Mechanical – Fire Fighting, Mechanical – Plumbing, Civil, Multiple / Full MEP
- Project type (dropdown): Commercial, Industrial, Residential, Infrastructure,
  Government, Other
- Inputs: 1px grey border, white background, rounded-lg, ~48px high, placeholder
  text, navy border + ring on focus, red border + small error text when invalid.
- Validation with clear error messages, success state, spam honeypot field,
  red "Send Request" button with send icon and loading state.
- Submissions are emailed to info@zelcosa.com via Web3Forms
  (NEXT_PUBLIC_WEB3FORMS_KEY in .env.local).

Right (~40%) — two stacked cards:
a) "Contact information": icon + text rows (clickable): +966 11 463 4427,
   +966 50 308 1416 and +966 56 000 0320 (tel: links, with a WhatsApp link each),
   info@zelcosa.com (mailto:), the full address (Floor 2, RHGA7630, King Abdulaziz
   Rd, Al Murooj, Riyadh 12282, Kingdom of Saudi Arabia) and
   Sunday – Thursday, 8:00 AM – 6:00 PM.
b) "Find us": Google Map embed (~320px tall, rounded) zoomed to street level.
   The embed URL lives in src/data/site.ts as `mapEmbedUrl`.

Not on this page: the "Download Company Profile (PDF)" button (removed), a
full-width map section, or CR/VAT numbers (those stay in the footer only).

====================================================================

## 6. BILINGUAL — ENGLISH & ARABIC

====================================================================

- Language switch in header; routes /en/... and /ar/... (English default).
- Arabic must use full RTL: mirrored layout, navigation, icons/arrows,
  diagonal shapes and carousels.
- All text must live in translation files (en / ar) — no hardcoded strings in
  components.
- Write professional Modern Standard Arabic suitable for a corporate engineering
  company (not literal machine translation). Company name in Arabic:
  شركة زمام للكهرباء
- Keep phone numbers, CR, VAT and email in Latin digits in both languages.
- Remember the selected language.

====================================================================

## 7. SEO & TECHNICAL

====================================================================

- Server-rendered pages so all content is visible to search engines.
- Unique title + meta description per page and per language, e.g.
  Home: "ZIMAM Electrical Company | MEP, ELV & Civil Contractor in Riyadh"
- Open Graph and Twitter tags with a branded share image.
- hreflang tags for en/ar, sitemap.xml, robots.txt, canonical URLs.
- JSON-LD structured data: Organization + LocalBusiness (GeneralContractor) with
  address, phones, email, logo.
- One H1 per page, semantic HTML, accessible color contrast, keyboard navigation,
  focus states, aria labels.
- Fast loading: optimized images, lazy loading, minimal layout shift.
- Custom 404 page in brand style.
- Keep services, projects and clients in separate editable data files.

====================================================================

## 8. BUILD ORDER

====================================================================

Start with: design system, header, footer, WhatsApp button, and the complete Home
page in English. Then build the remaining pages, then add Arabic/RTL. Show me the Home
page first for approval before continuing.
