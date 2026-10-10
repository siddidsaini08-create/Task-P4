# P3-to-P4 Preservation Audit

This audit compares the uploaded `task-p3-main` ZIP with this P4 project.

## What was preserved

- The original P3 Home content and text: banner, About Me and education list, project cards and GitHub links, Gallery, Contact section/form, Stay Connected/Subscribe section/form, and footer text.
- The original P3 CSS variables, base typography, page widths, banner/profile/project/gallery/contact/subscribe/footer styling, and black/white visual palette.
- `server.js` is unchanged from the uploaded P3 source, so the original Express contact and subscription backend remains available.
- `index.html` and `src/main.jsx` are unchanged from the uploaded P3 source.
- Existing P3 Gmail environment variable names remain in `.env.example`.

## What was changed for P4

- The original `src/App.jsx` page content was moved into `src/pages/Home.jsx`; this allows `App.jsx` to handle React Router without losing the original homepage content.
- The original single inline navbar was extracted into `src/components/Navbar.jsx`. It now includes the DEV@Deakin home link, portfolio anchors, Search and Post controls, and Login/Create account links. Search/Post functionality remains intentionally limited because the task sheet says those features come later.
- The footer was extracted into `src/components/Footer.jsx` and shared across all routes.
- New `src/pages/Login.jsx` and `src/pages/Register.jsx` routes were added.
- Firebase Authentication code and Firestore profile storage were added in `src/firebase/firebase.js` and the auth pages. User profiles are stored at `users/{uid}`; passwords are managed by Firebase Authentication and are not stored in Firestore.
- `firestore.rules`, `.env.example`, and `.gitignore` were updated for safe setup. `.env`, `node_modules`, and `dist` are excluded from Git.
- The P3 source had literal `PASTE_YOUR_IMAGE_BASE64_HERE` values, which are broken image placeholders. These were replaced with local PNG art in `public/images/` so the project/gallery cards have visible assets. The Gallery section was expanded from three to six local image cards, each with meaningful alt text and a short caption; new local artwork covers data analytics, IoT/robotics, and collaboration. Gallery layout is three columns on desktop, two on tablet, and one on small mobile screens.
- Original nav CSS selectors were narrowed from the global `nav` selector to `.site-nav` and the new P4 navigation/auth styles and responsive rules were appended. Other original page styles were retained.

## Verification performed

- The JSX/JavaScript source files passed a TypeScript compiler syntax-transpile check.
- Required files and dependencies were checked for presence.
- `.gitignore` was checked for `node_modules/`, `dist/`, and `.env` exclusions.
- A full `npm install`/Vite build could not be completed in the authoring environment because package installation timed out. Run `npm install` and `npm run build` in your local environment before submission.
- Firebase behaviour cannot be live-tested until you create/configure the Firebase project and set local `.env` values.

## Remaining external steps

- Compare the navbar against the exact reference image from CloudDeakin; that embedded design image was not available in the task text supplied in this chat.
- Create the remote GitLab project `Task P4` with **Internal** visibility and push the code.
- Run registration/login tests with your Firebase project.
- Replace report screenshot placeholders with real browser captures and paste the real GitLab/video links.
- Record/upload the 2–4 minute video and submit the report through OnTrack.


Gallery update verification: the six final gallery images are packaged under `public/images/` as PNG files, and `src/pages/Home.jsx` references those `.png` paths.
