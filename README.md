# Personal card site (GitHub Pages)

## Structure
- index.html
- css/style.css
- js/app.js
- assets/avatar.jpg
- assets/favicon-16x16.png
- assets/favicon-32x32.png
- site.webmanifest

## Setup
1) Put your photo into `assets/avatar.jpg`.
2) Replace `USERNAME` in social links inside `index.html`.
3) Commit and push to GitHub.

## Enable GitHub Pages
1) Open repo on GitHub.
2) Settings -> Pages.
3) Build and deployment:
   - Source: Deploy from a branch
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
4) Save. After deployment, your site will be available at:
   `https://<your-username>.github.io/<repo-name>/`

## Notes
- Age is calculated automatically from 02.06.2006 in `js/app.js`.
- Site supports RU/EN/DE/SR (Serbian Cyrillic) switch.
- Theme toggle is grayscale and respects `prefers-color-scheme` if no saved preference.
