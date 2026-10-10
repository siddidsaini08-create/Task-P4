# P4 Video Walkthrough Script (target: 2–4 minutes)

**0:00–0:20 — Introduction**  
“Hi, this is my SIT313 P4 login and registration implementation, built on top of my P3 personal portfolio. I kept the original portfolio content and existing contact and subscription functionality, and added routing and authentication pages.”

**0:20–0:50 — Navigation and routes**  
“Here is the shared navigation. The DEV@Deakin brand returns to the home route. The navbar and footer are reusable components, so they are consistent on the home, login, and registration routes. Search and Post are present as requested; the task sheet says those features will be implemented later.”

**0:50–1:20 — Registration UI and validation**  
“On the registration page, users enter their first name, last name, email, and password. The form validates required fields, email format, password strength, and matching passwords before attempting account creation.”

**1:20–1:55 — Firebase and Firestore**  
“Firebase Authentication manages the password securely; the application does not store passwords in Firestore. When a user registers, the app creates a Firebase Auth account and saves non-sensitive profile fields to the `users` collection using the Auth UID as the document ID. The Firestore rules restrict profile access to its owner.”

**1:55–2:25 — Login**  
“On login, Firebase verifies the credentials. A successful login redirects to the home page, and invalid credentials display a helpful message that suggests trying again or creating an account.”

**2:25–2:50 — Configuration and repository**  
“Firebase settings are read from local `.env` variables. The `.env` file is excluded from Git, and the repository should not include `node_modules`. The Task P4 GitLab project uses Internal visibility.”

**2:50–3:10 — Wrap-up**  
“I’ll now show the final routes and the test cases. The source, report, and this walkthrough link are included with my OnTrack submission.”

**Before recording:** configure Firebase, restart Vite, run through the live registration/login tests, and replace any line above that does not reflect the final behaviour you demonstrate. Do not show real credentials or personal secrets on screen.
