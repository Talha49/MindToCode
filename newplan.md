# MindToCode — Phase 2: Homepage Fix + Verification

Phase 1 (splitting into `/academic-help` and `/mvp-development`) is done and looks solid — unique metadata, alt text, FAQs all in place. This phase fixes the one thing that didn't carry over: the homepage.

---

## 1. Update the homepage (`app/page.tsx`) to match the new site structure

Right now the homepage still has the OLD nav (`Services / How it Works / Why Us` anchor links) and no clear path into the two new pages. Fix:

- Replace the nav with the same one used on `/academic-help` and `/mvp-development`: **Academic Help | MVP Dev | Blog | About**
- Directly below the hero section, add a two-card "choose your path" block:
  - Card 1: "Student or Researcher?" — short 1-line description, button linking to `/academic-help`
  - Card 2: "Founder or Business?" — short 1-line description, button linking to `/mvp-development`
- Keep everything else on the homepage as-is (Meet the Developer, proof section, testimonials) — just update internal links in the "Who I Can Help" section and footer to point to the real pages instead of `#services` anchors, matching what's already done on the sub-pages.
- Give the homepage its own unique meta description if it currently duplicates either sub-page's — it should describe MindToCode as a whole, not lean toward either audience.

## 2. Confirm `/blog` is live and functional

The nav on both new pages links to `/blog`, but this hasn't been verified yet.

- Confirm `app/blog/page.tsx` exists and renders (even a placeholder "Coming soon" state is fine for now — it should NOT be a broken 404 link)
- If the dynamic route `app/blog/[slug]/page.tsx` was scaffolded, confirm it doesn't error on a test post

## 3. Confirm structured data (JSON-LD) actually shipped

Check the page source of `/academic-help` and `/mvp-development` for `<script type="application/ld+json">` blocks. Confirm:
- `FAQPage` schema exists and matches the visible FAQ questions/answers on each page
- `Service` schema exists describing the specific offering per page
- `Person` schema for Talha Ghauri exists somewhere (homepage or site-wide layout)

If any of these are missing, add them now — this is what makes FAQs eligible to show up as rich results in Google search, which is a meaningful free-traffic win.

## 4. Double check sitemap includes everything

Confirm `sitemap.xml` (or `app/sitemap.ts`) includes: homepage, `/academic-help`, `/mvp-development`, `/blog`. Resubmit in Search Console after this deploy.

---

## Do NOT do in this pass
- No blog content yet — just confirm the route works
- No ad pixels or tracking changes
- No domain migration