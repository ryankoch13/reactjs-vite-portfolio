# React Vite Portfolio

A personal portfolio site built with React and Vite. The site highlights my frontend and mobile engineering experience, selected projects, technical skills, and contact links.

## Tech Stack

* React
* Vite
* JavaScript
* CSS
* Material UI icons
* Local storage for theme/color preferences

## Getting Started

The React app lives inside the `portfolio` directory, so make sure to `cd` into that folder before running commands.

```bash
git clone https://github.com/ryankoch13/reactjs-vite-portfolio.git
cd reactjs-vite-portfolio/portfolio
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print a local development URL in the terminal, usually:

```bash
http://localhost:5173
```

Open that URL in your browser to view the site locally.

## Build Locally

To create a production build:

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.

## Preview the Production Build

After building, you can preview the production version locally with:

```bash
npm run preview
```

## Linting

To run the linter:

```bash
npm run lint
```

## Project Structure

```text
reactjs-vite-portfolio/
└── portfolio/
    ├── public/
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Notes

This project is intended as a simple, responsive portfolio site. Most of the content is managed directly in `src/App.jsx`, while the visual styling, themes, responsive layout, and hover effects are handled in `src/App.css`.
