# Learning Lab Global — GitHub Pages prototype

This is a responsive, multi-page static website starter for an **independent Learning Lab community website**. It is not an official university website.

## Pages
- `index.html` — Home
- `about.html` — About Learning Lab
- `story.html` — Our Story / History
- `methodology.html` — Learning Lab Methodology
- `team.html` — Learning Lab Team
- `practice.html` — Practice overview
- `indigenous-learning-lab.html` — Indigenous Learning Lab
- `world.html` — Learning Lab Around the World
- `products.html` — Products overview
- `publications.html` — Publications
- `media.html` — Media
- `events.html` — Events
- `contact.html` — Contact Us

## Preview
Open `index.html` in a browser. The site uses shared styles and navigation from `assets/style.css` and `assets/site.js`. Google Fonts and embedded OpenStreetMap views require an internet connection.

## Publish on GitHub Pages
1. Create a GitHub repository, such as `learning-lab-global`.
2. Upload all files and the `assets` folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/(root)`, then save.
6. Wait for the published URL to appear in Pages settings.

Official guide: https://docs.github.com/en/pages/quickstart

## Content and publishing checklist
This is a design/content prototype. Before public launch:
- Verify the historical account, dates, claims, project names, and current status with people involved.
- Confirm the Learning Lab community's preferred name, mission statement, and governance/contact route.
- Confirm details and permissions for the Indigenous Learning Lab story with relevant Indigenous collaborators; do not present Indigenous Nations as interchangeable or use a single pin to represent a Nation.
- Populate team bios only after confirming names, roles, affiliations, and consent.
- Build a verified publication list from original publisher records and link to lawful full-text sources.
- Add real media, alt text, captions/transcripts, and image credits where permitted.
- Add confirmed event details only.
- Verify project locations with partners before presenting the map as complete.
- Confirm permissions for all logos, photos, quotations, and reproduced materials.
- Review accessibility, mobile layout, links, privacy, and any domain/hosting decisions.

## Current content notes
The prototype uses high-level descriptions informed by the user's supplied structure and CRPBIS-related context. It includes example locations mentioned in public descriptions as leads for verification, not as a complete or current project list. It intentionally avoids inventing team names, event dates, specific publication records, or Indigenous community details. Some links currently point to the existing CRPBIS website as a temporary source link.


## YouTube video playback

When opening index.html directly as a file (file://), YouTube may show Error 153 / Video configuration error because the browser does not send the required HTTP referrer. The Collective Knowledge page therefore shows a video preview and a Watch on YouTube button in local-file mode. To test the embedded player, run a local web server from inside the learning-lab-global folder: `python3 -m http.server 8000`, then visit `http://localhost:8000/products.html`. On a published HTTPS website, the iframe loads normally if the video owner allows embedding. If embedding is disabled by the video owner, the Watch on YouTube link remains the reliable fallback.
