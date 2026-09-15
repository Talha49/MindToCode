# MindToCode — SEO & Site Restructure: Implementation Brief for Claude Code

Site: https://mind-to-code.vercel.app/ (Next.js, deployed on Vercel)
Goal: Split the single-page site into a dual-audience structure (students vs. founders) with proper SEO foundations, without losing the existing homepage's trust elements (100+ projects, Fiverr stats, testimonials).

Work through this in the order below. Each section is a discrete task — commit/test after each one before moving to the next.

---

## 1. Restructure homepage into a "split path" layout

- Keep existing hero, "Meet the Developer" section, and proof/testimonials section as-is — they work for both audiences.
- Directly under the hero, add a two-card section with clear CTAs:
  - Card 1: "Student or Researcher?" → links to `/academic-help`
  - Card 2: "Founder or Business?" → links to `/mvp-development`
- Do not remove the existing "Who I Can Help" section — just make sure its two sub-blocks (Academic Support / Business & Founders) link to the new pages instead of anchor-scrolling to `#services`.

## 2. Create new page: `/academic-help`

- New route: `app/academic-help/page.tsx` (or `pages/academic-help.tsx` depending on router used — check existing structure first)
- Content focus: capstone projects, university project support, coding assignment help, AI/ML student projects, code explanation & viva prep
- Reuse the existing "For Students" content block from the homepage as a starting point, expand with FAQ section
- Metadata (unique per page, do NOT duplicate homepage metadata):
  - `title`: "Capstone & University Project Help | MindToCode"
  - `description`: Written for search intent around student project help (draft, don't copy homepage description)
  - Open Graph + Twitter card tags, same pattern as homepage
- Add `FAQPage` schema (JSON-LD) with 4-5 real Q&As (e.g. "Can you help with my final year project?", "Do you write the code for me or teach me?", "What languages do you support?")

## 3. Create new page: `/mvp-development`

- New route: `app/mvp-development/page.tsx`
- Content focus: MVP development for startups, custom software, React/Next.js, bug fixing & maintenance
- Reuse "For Business & Founders" content block from homepage as a starting point, expand with process/timeline detail and FAQ
- Unique metadata (title/description distinct from homepage and from `/academic-help`)
- Add `FAQPage` schema (e.g. "How long does an MVP take?", "What's your tech stack?", "Do I own the code after delivery?")

## 4. Add structured data (JSON-LD) site-wide

- `Person` schema for Talha Ghauri on homepage (name, jobTitle, url, sameAs: GitHub + LinkedIn URLs already on site)
- `Organization` or `ProfessionalService` schema for MindToCode (name, url, description, email)
- `Service` schema on each of the two new landing pages describing the specific service offered
- Implement via Next.js `<script type="application/ld+json">` in each page's head, not a global blanket schema

## 5. Image fixes

- Every `<Image>` currently missing `alt` text needs descriptive alt attributes — this includes hero background, logo, developer photo, and all `R1.png`–`R10.png` client-result screenshots (describe what each result shows, not just "result image")
- Convert PNG assets (`P2.png`, `p1.png`, `R1–R10.png`) to WebP where feasible for faster load — check current file sizes first with `next/image` — this may already be handled by Next's image optimization, so verify what's actually being served
- Confirm `opengraph-image.png` still resolves correctly on both new pages (each page should have its own OG image ideally, or reuse the main one consistently)

## 6. Sitemap & robots

- Generate `sitemap.xml` (Next.js supports this via `app/sitemap.ts`) including: homepage, `/academic-help`, `/mvp-development`, and placeholder for future `/blog` routes
- Confirm `robots.txt` exists and allows crawling of all new pages
- After deploy: manually submit sitemap in Google Search Console and request indexing for both new URLs

## 7. Internal linking

- Footer currently has a "Services" list with anchor links (`#services`) — update these to point to the two new pages where relevant, or keep as a mixed list (anchor for on-page sections, real links for new pages)
- Add breadcrumb-style navigation once `/blog` exists (not needed yet for just 2 new pages)

## 8. Blog scaffolding (prep only — content comes later)

- Set up `app/blog/page.tsx` (index) and `app/blog/[slug]/page.tsx` (dynamic post route) using MDX or a simple markdown-based content source (check what's easiest given current stack — flag options to the user rather than assuming a CMS)
- No posts need to be written yet — just get the routing/rendering working so content can be dropped in

## 9. Domain (not code, but flag to user)

- Note: moving off `vercel.app` subdomain to a custom domain (e.g. `mindtocode.com`) is a DNS/hosting change, not a code change — flag this back to the user rather than attempting it, since it requires them to purchase the domain and configure it in Vercel's dashboard.

---

## Do NOT do in this pass
- Don't touch Google Analytics/Search Console setup — that's done directly in Google's dashboards, not in code
- Don't write blog post content yet — that's a separate content task
- Don't set up paid ad tracking pixels yet — wait until landing pages are live and stable