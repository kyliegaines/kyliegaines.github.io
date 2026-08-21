# kylie-website

Kylie Gaines' personal academic site, built as a static HTML/CSS/JS site for GitHub Pages.

## Structure

- `index.html` — Home
- `research.html` — Research & Publications
- `teaching.html` — Teaching
- `cv.html` — CV
- `contact.html` — Contact
- `css/style.css` — all styles
- `js/script.js` — nav toggle + scroll animation
- `images/headshot.jpg` — profile photo
- `files/Kylie-Gaines-CV.pdf` — downloadable CV
- `files/Kylie-Gaines-Teaching-Evaluations.pdf` — downloadable teaching evaluations

## Publishing on GitHub Pages

1. Copy all files from this folder into the root of the `kylie-website` repo,
   keeping the same folder structure (`css/`, `js/`, `images/`, `files/`).
2. Commit and push.
3. In the repo, go to Settings → Pages → Source → "Deploy from a branch" →
   branch `main`, folder `/ (root)` → Save.
4. The live site updates within a minute or two at
   https://kyliegaines.github.io/kylie-website/

No build step, no dependencies — it's plain HTML/CSS/JS.

## Editing content later

Each page is a normal HTML file — open it in any text editor and edit the text
directly. Shared styling lives in `css/style.css` (colors are defined as CSS
variables at the top of the file under `:root`, so the whole palette can be
changed in one place).

Placeholders to fill in later:
- Working paper abstracts on `research.html` ("Abstract coming soon")
- Syllabus link on `teaching.html` ("Syllabus (coming soon)")
