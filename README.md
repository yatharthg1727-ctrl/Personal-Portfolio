# Yatharth Jain – Portfolio

## Run it (VS Code terminal)
Requires Node.js (https://nodejs.org). In the project folder run:

    npm start

Then open http://localhost:3000. No `npm install` needed.

No Node? Use either of these instead:

    python -m http.server 3000      # then open http://localhost:3000
    # or just double-click index.html

An internet connection is needed for Google Fonts and the Three.js 3D background (loaded from CDNs). Offline, the page still works with fallback fonts and no 3D hero.

## Files
- `index.html` – page structure, SEO and Open Graph tags
- `css/style.css` – styles, colors and theme variables (top of the file)
- `js/main.js` – content and behavior. Edit the `CONFIG`, `SKILLS`, `PROJECTS`, `CERTS`, `ACH`, `FOCUS` blocks at the top to change content
- `assets/photo.jpg` – your portrait; replace the file to change it

## Setup you still need to do
- Contact form: set `CONFIG.formEndpoint` (e.g. a Formspree URL). Until then it runs in demo mode and says so.
- Resume: set `CONFIG.resumeUrl` to your CV link, or put `resume.pdf` in the folder and use `"resume.pdf"`.

## Notes
- Items added with the "+ Add" buttons and certificate images are saved in the browser (localStorage) of the origin where you added them. `localhost` has its own storage, separate from the published page. To make items permanent, add them to the arrays in `js/main.js`.
