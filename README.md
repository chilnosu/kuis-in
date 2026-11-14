# Kuis-in!

Chilnosu's first project! Untuk membuat persiapan kuis, based on soal soal tahun lalu atau yang setipe dengan soal soal tahun lalu! (terinspirasi dari gw yang sering latihan soal pake kuis taun lalu)

Sedang dalam tahap pengembangan, update kalo gabut aja, gak tau finalnya kapan, mungkin gw lulus duluan baru kelar wkakakak

-Nichlous Osler Manurung, CSUI'26

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

The build writes the production site to `dist/`. Open the Local URL printed by the preview server, normally `http://localhost:4173`. At desktop and mobile widths, follow **Mulai Kuis** to **Pilih Semester**, then select a semester and check its course page. Try the back arrow, browser Back and Forward, refreshing `/latihan-soal/semester/1`, and opening `/latihan-soal/semester/9`. On the homepage, check **Lihat Cara Kerja** and the mobile menu.

Phase 2 ends at **Pilih Mata Kuliah**. Each semester shows an empty state until the course list is available.

## Main files

| File | Purpose |
| --- | --- |
| `src/App.jsx` | Selects a page from the current URL. |
| `src/pages/Home.jsx` | Assembles the homepage and its four sections. |
| `src/pages/SemesterSelection.jsx` | Displays the eight semester links. |
| `src/pages/CourseSelection.jsx` | Displays the selected semester and its empty state. |
| `src/components/SelectionLayout.jsx` | Shares the header and back link between selection pages. |
| `src/components/selection.css` | Styles the selection pages. |
| `src/index.css` | Tailwind import, color tokens, responsive layout, and motion preferences. |
| `public/mascots/` | Homepage mascot images. |
| `vite.config.js` | React and Tailwind integration for development and production. |
| `vercel.json` | Serves the application when opening or refreshing a selection URL on Vercel. |

## GitHub

The project is initialized on the local `main` branch. When you are ready to connect it to GitHub, set the remote using the URL of your repository:

```bash
git remote add origin https://github.com/YOUR-USERNAME/kuis-in.git
git remote -v
```
