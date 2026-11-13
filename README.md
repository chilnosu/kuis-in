# Kuis-in!

Kuis-in! is an Indonesian quiz-practice website by Chilnosu. Phase 1 includes the landing page, an explanation of the planned quiz flow, and a coming-soon notice. The React source uses JSX, Vite, Tailwind CSS, and Lucide React.

## Run on macOS

Use Node.js 20.19+ within the 20.x release line, or Node.js 22.12+. Open the `kuis-in` folder in VS Code using **File → Open Folder…**, or run `code .` from the project directory if the VS Code command is installed.

In VS Code's integrated terminal, run:

```bash
npm install
npm run dev
```

Open the Local URL Vite prints, normally `http://localhost:5173`. Save an edit in `src/` to see it update in the browser. Stop the server with **Control+C**.

## Build and test locally

```bash
npm run build
npm run preview
```

The build writes the production site to `dist/`. Open the Local URL printed by the preview server, normally `http://localhost:4173`. At desktop and mobile widths, check the hero and cards, use the mobile menu, open and dismiss the **Mulai Kuis** notice, and follow **Lihat Cara Kerja**.

## Main files

| File | Purpose |
| --- | --- |
| `src/pages/Home.jsx` | Assembles the homepage and its four sections. |
| `src/components/` | Navbar, hero, how-it-works cards, footer, and shared wordmark. |
| `src/index.css` | Tailwind import, color tokens, responsive layout, and motion preferences. |
| `public/mascots/` | Homepage mascot images. |
| `vite.config.js` | React and Tailwind integration for development and production. |

## GitHub

The project is initialized on the local `main` branch. When you are ready to connect it to GitHub, set the remote using the URL of your repository:

```bash
git remote add origin https://github.com/YOUR-USERNAME/kuis-in.git
git remote -v
```
