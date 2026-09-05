# SOFT PACK static website

This directory contains a repaired static mirror of the English and Arabic
website, rebranded as SOFT PACK / سوفت باك.

## Brand identity

- The supplied SOFT PACK logo is stored in `assets/brand/` as the original
  source, a header/footer mark, a full Arabic logo, and a favicon.
- `assets/brand/softpack-theme.css` applies the new blue, cyan, green, yellow,
  orange, and magenta palette across both languages.
- Page titles, visible company-name text, article copy, legal/privacy copy,
  service names, metadata, header logos, footer logos, buttons, highlights,
  slider controls, focus states, and the browser icon use the new identity.
- The shared `js/main.js` identity layer also covers content inserted by page
  scripts, replaces the old public email/domain wording with `softpack.com`,
  and removes old SOFT PACK/affiliate marks from the footer.
- Old social-profile destinations are disabled until official SOFT PACK
  Facebook, LinkedIn, and YouTube URLs are supplied.

Rollback copies are outside this website directory at
`../softpack-backups/2026-09-01-0045/`.

## Run locally

You can open `index.html` directly, including with a `file://` URL. The site
scripts have been bundled into classic browser scripts and local asset paths
are relative, so fonts and sliders also initialize in direct-file mode.

On macOS, you can alternatively double-click `start.command`. It starts a local
web server and opens the site automatically.

Alternatively, from this directory run:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open <http://127.0.0.1:4173/>.

## What was repaired

- External product, banner, news, and testimonial media was downloaded to
  `assets/mirror/` and all page references now point to the local copies.
- Front-end dependencies and Google Fonts were downloaded to `assets/vendor/`
  so the layout, menus, sliders, and phone inputs do not depend on third-party
  CDNs.
- Swiper's full ESM dependency tree and images generated dynamically by page
  scripts were audited and completed, including the company logos used by the
  Where We Operate page.
- Absolute references to SOFT PACK's own assets, build files, and JavaScript
  were converted to local paths.
- Broken anti-bot fingerprint scripts captured by HTTrack as HTML were removed;
  they are not needed by a static mirror and were causing browser errors.
- Two JavaScript bundles corrupted by HTTrack URL rewriting were restored from
  the live site's authoritative copies: `pagination-DRnoI_WA.js` (Swiper
  browser detection) and `download-card-B_Bob7H8.js` (download filenames).
- The 18 interactive entry modules were bundled into `build/assets/legacy/`
  and linked as classic scripts, removing the browser's `file://` module block.
- Root-relative font and media references were converted to page-relative
  paths so direct-file browsing uses the same typography and images.
- The Arabic Downloads and Videos pages missed by HTTrack were restored from
  the live site and connected to the Arabic Media Corner tabs.
- 583 Contact, Locations, and Sustainability links that incorrectly crossed
  from Arabic pages to English pages were corrected.
- 832 malformed encoded `target="_blank"` attributes were repaired.
- English and Arabic landing pages, product listings, news pages, and service
  pages were checked in a local web server with no broken image references.

## Verification

- All 403 real English and Arabic HTML pages were audited; HTTrack's bot-check
  and malformed capture files were excluded from page counts.
- 36,048 internal links, 24,425 local asset references, 92 CSS `url()`
  references, and 111 JavaScript imports resolve to existing files.
- All 712 unique local page and asset URLs returned HTTP 200.
- All 14 JavaScript page templates were exercised in a browser in English and
  Arabic with no console errors, missing stylesheets, or broken images.
- Desktop and 390px mobile layouts were checked. The mobile menu opens, and
  the home-page hero and certification sliders advance automatically.

## Static-mirror limitations

Forms, reCAPTCHA, analytics, Google Maps, and server-side search/filter actions
still require their original online services. The mirrored pages and media are
otherwise served locally.
