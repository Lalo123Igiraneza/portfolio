# Editable Developer Portfolio — Mediabox Application

A responsive, dark-navy portfolio website built with plain HTML, CSS, and JavaScript. No build tools or framework installation required.

## Run locally
1. Extract the ZIP file.
2. Open `index.html` in a browser.
3. For a local server in VS Code, install/use Live Server and choose **Open with Live Server**.

## Personalize before submitting
### 1. Update your name and contact links
Open `script.js` and edit the `CONFIG` object near the top:
- `name`
- `email`
- `github`
- `linkedin`

Replace the sample GitHub repository URLs in each project's `github` field with your actual repository links.

### 2. Make project descriptions accurate
In `script.js`, edit each project's `description`, `features`, and `technologies`. Remove any feature you have not implemented. The current copy is deliberately cautious and includes reminders where you should verify the implementation.

### 3. Add real screenshots
The dashboard visuals in `index.html` are CSS-made illustrative placeholders, not screenshots of your applications. Replace each `.project-art` section with an image element using a screenshot from your actual app, for example:

```html
<img class="real-project-screenshot" src="assets/hallelujah-dashboard.png" alt="HALLELUAH hotel management dashboard">
```

Create an `assets` folder and place your screenshots there. Add this CSS to `styles.css`:

```css
.real-project-screenshot {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 260px;
  object-fit: cover;
  border-radius: 8px;
}
```

Use screenshots that do not expose real customer data, passwords, tokens, or other private information.

### 4. Optional refinements
- Add a downloadable PDF résumé.
- Add a live demo URL for each project.
- Add your GitHub and LinkedIn profile URLs.
- Include a short technical challenge and how you solved it in each project case study.

## Files
- `index.html` — page structure and project sections
- `styles.css` — dark-navy design, responsive layout, and visual styles
- `script.js` — project case study modal and editable personal/project configuration
- `README.md` — this guide

## Before sharing with Mediabox
- Check all links.
- Confirm every feature claim is true.
- Replace placeholders with your real name, email, and profile URLs.
- Add real project screenshots and repositories where available.
- Test on mobile and desktop.

## Quick setup (already done for you)
- Name and GitHub link are set in `script.js` (CONFIG block at the top).
- Email and phone are already set in CONFIG (LinkedIn is optional).
- Put the 8 screenshots in the `assets/` folder with the exact names listed in `assets/README.txt`. Until you do, the page shows a styled placeholder instead of the image.
- Project GitHub links are hidden for now. After pushing a project, put its repository URL in the `github:` field of that project in `script.js` and the link appears.
