# SIT313 P4 — Login and Registration (P3 Portfolio Extended)

This project starts from the supplied P3 personal portfolio and extends it for P4. The original portfolio copy, typography, page sections, contact form, subscription form, Express email server, and black/white palette are retained. The original broken image placeholders are replaced by local SVG artwork so that portfolio and gallery images render. The gallery now contains six themed image cards with captions and responsive styling.

## Implemented in this version

- Shared, responsive navigation bar across all routes, with a DEV@Deakin home link, portfolio section links, Search and Post controls, and Login/Create account links.
- `/login`: email/password validation, show/hide password, user-friendly authentication errors, password reset, Firebase sign-in, and redirect to `/` after successful sign-in.
- `/register`: first name, last name, email, password and confirmation; client-side validation; Firebase Authentication account creation; profile saved to Firestore `users/{uid}`; redirect to `/login` after successful registration.
- Reusable `Navbar` and `Footer` components shared across all routes.
- `.env` exclusion in `.gitignore`, an `.env.example` template, and `firestore.rules` for user-owned profile documents.
- P3 contact and subscription backend retained; it is optional and independent from Firebase authentication.

## Start the project

1. Install Node.js LTS.
2. Open the project folder (the folder where `package.json` is visible) in VS Code.
3. Run `npm install`.
4. Copy `.env.example` to `.env` and fill in your Firebase Web App configuration.
5. Run `npm run dev` and open the local URL shown by Vite.

The `.env` file must stay local and must not be committed. `VITE_*` Firebase Web App values are client configuration, not private server secrets; protect your data with Firebase Authentication settings and Firestore Security Rules.

## Firebase setup (required for real account registration/login)

1. In Firebase Console, create/select a project and register a **Web App**.
2. Open Authentication → Sign-in method and enable **Email/Password**.
3. Create a Cloud Firestore database.
4. Copy the Web App configuration values into the `VITE_FIREBASE_*` entries in `.env`.
5. Publish the included `firestore.rules` in Firestore → Rules.
6. Stop and restart Vite after modifying `.env`.
7. Test registration with a test email, confirm a profile exists under `users/{uid}`, then test login and the invalid-password path.

Passwords are managed only by Firebase Authentication. They are **not** saved in Firestore. Firestore stores non-sensitive profile fields (UID, first name, last name, full name, email, creation timestamp).

## Existing P3 email backend (optional)

The original contact and subscribe forms still call the Express server. To use email delivery, configure `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `PORT` in the local `.env`, then run `npm run server` in a second terminal. Do not commit your real Gmail app password.

## GitLab submission requirements

Create a separate GitLab project named **Task P4** and set visibility to **Internal**. Commit the source files, assets, README, and Firestore rules with meaningful commit messages. Do not commit `node_modules`, `dist`, or `.env`. The repository link, recorded 2–4 minute video link, and report still need to be added by you once you have created/published them; use `docs/P4-Submission-Checklist.md`, `docs/Video-Walkthrough-Script.md`, and `docs/Report-Template.md` to finish these external submission steps.

## Route map

- `/` — existing P3 personal portfolio
- `/login` — login
- `/register` — registration

## Note about task-sheet reference design

The pasted task-sheet text describes an exact navigation design, but the embedded reference image itself was not included in the text available during this edit. The navigation includes the described elements and follows the portfolio's black/white styling, but visual comparison against the original reference image is still recommended before submission.

## Submission support files

- `docs/P4-Submission-Report-Template.docx` — editable short report template. It contains clearly labelled screenshot placeholders and blank fields for your actual GitLab/video links; replace them before submission.
- `docs/Report-Template.md` — Markdown version of the report.
- `docs/Video-Walkthrough-Script.md` — a 2–4 minute recording script.
- `docs/P4-Submission-Checklist.md` — checklist of remaining setup and OnTrack requirements.
- `docs/P3-to-P4-Audit.md` — file-by-file notes on what was preserved and what changed.

### Gallery assets
The Gallery section uses six local PNG images stored in `public/images/`: `gallery-code.png`, `gallery-ai.png`, `gallery-ideas.png`, `gallery-data.png`, `gallery-iot.png`, and `gallery-collaboration.png`. These are the six previewed illustrations included with this final project; the Gallery cards reference the PNG files directly.
