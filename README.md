# 👾 C64 Style Demo Scroller 👾

This is a web-based scroller that replicates the look and feel of classic demoscene effects (popular on systems like the C64 or Amiga) using modern web technologies.

## Live Demo

**[Click here to test the scroller live!](https://schubba.github.io/scroller/)**

## Features

* **3D Font:** A 3D shadow effect is generated using CSS `filter: drop-shadow()`.
* **Plasma Fill:** The font acts as a "mask" (`background-clip: text`) for an animated, fixed background gradient (rasterbars).
* **Rasterbar Palette:** The color bars use a demo-typical color palette with "hotspots" (sharp highlights).
* **Ball Physics:** The scroller doesn't just bounce in a simple sine wave; it simulates a bouncing ball (slow at the apex, fast on the "impact") using `Math.abs(Math.sin())`.
* **Jitter-Free Animation:** Uses `requestAnimationFrame()` for a butter-smooth motion, synchronized with the monitor's refresh rate.
* **Self-Hosted Font:** Uses a locally embedded FLOSS font (`Alfa Slab One`) via `@font-face` to avoid external dependencies.

## Tech Stack

* **HTML5**
* **CSS3** (Key Features: `background-clip: text`, `filter: drop-shadow()`, `@keyframes`, `@font-face`, CSS Variables)
* **JavaScript (ES6+)** (Key Features: `requestAnimationFrame()`)
* **Font:** [Alfa Slab One](https://fonts.google.com/specimen/Alfa+Slab+One) (SIL Open Font License)
* **Hosting:** [GitHub Pages](https://pages.github.com/)

## Local Execution

Since this is a purely "static" project (HTML/CSS/JS only), there are two ways to run it locally:

### 1. Via Web Server (Recommended)

The `background-attachment: fixed` effect often only works reliably when the page is served from a web server.

If you have **Python 3**, simply run this command in the project's root directory:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### 2. Via `file://` (Not Recommended)

You can also open the `index.html` file directly in your browser (`file:///...`).

**Warning:** The "fixed" plasma effect does not work correctly in many browsers (like Chrome) over the `file://` protocol. The rasterbars will scroll *with* the text instead of remaining stationary.
