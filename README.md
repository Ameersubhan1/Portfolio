# Ameer Subhan Hussain — Portfolio

Personal portfolio for **Ameer Subhan Hussain**, Computer Science student at Nanjing University of Technology, China.
Built with HTML, CSS, JavaScript, GSAP 3 and Locomotive Scroll 4 (static site, no build step).

## Run locally
```bash
python3 -m http.server 3000   # then open http://localhost:3000
```

## Deploy
Static site: drag the folder onto Netlify, or push to GitHub and enable GitHub Pages / Vercel.

## Assets to replace (placeholders)
| File | What to put there |
|---|---|
| `images/subhan-portrait.jpg` | His real photo, square, face in the upper half (about 1000x1000). Keep this file name. |
| `images/quickbite.png` | Screenshot of the Quick Bite app (about 1280x800) |
| `images/compiler.png` | Screenshot of the compiler (terminal output or code) |
| `images/istudio.png` | Screenshot of the iStudio website |
| `Subhan-CV.pdf` | Already his CV. Replace with the same file name whenever it is updated. |

## Where the content lives
All text is in `index.html` (search for the section ids: `about-dets`, `projects`, `skills`, `certifications`, `contact`).
The contact form opens the visitor's email app addressed to ameersubhan568@gmail.com (see `script.js`).

Template base: "portfolio-design" by Shan, re-themed with new content.
