# Ricardo Sanchez portfolio

Static HTML/CSS/JavaScript portfolio for GitHub Pages. No build step or package installation is required.

Run a local preview from this directory:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`. All pages use relative links and share `assets/site.css`; the home page uses `assets/site.js` for reveal animations and output filters. Content remains visible without JavaScript.

## Project pages and materials

| Page | Connected materials |
| --- | --- |
| `projects/tibial-nerve-stimulation.html` | Related Deshmukh BAT journal article, its DOI, and the 2024 BAT conference abstract. These describe carotid stimulation, a separate study from PTNS. |
| `projects/ps-oct-probe.html` | Supplied patent URL and 2024 Neurosurgery Day PowerPoint. |
| `projects/electrochemical-safety.html` | DC offset preprint PDF and DOI from that PDF, plus the editable 2023 NANS abstract draft. |
| `projects/modeling-and-imaging.html` | Modeling details from the August resume, with links to the associated PTNS and PS-OCT projects. |
| `projects/bci-hackathon.html` | Third-place certificate, 2026 slides, embedded presentation video, written summary, and supplied LinkedIn announcement URL. |
| `projects/manufacturing-capstone.html` | Boston Scientific capstone contributions and outcomes documented in the August resume. |

All current resume links use `20260824_RicardoResume.pdf`. Older resume files are retained as source history. The main page's education and experiment count now match the August resume.

The AccuGyd commercialization plan is linked as reference material in the teaching/translation experience and Outputs sections. The files do not establish Ricardo's authorship or direct project role. `HS 2 Cropped.jpg` is byte-for-byte identical to the existing `profile.jpg`, which remains the portrait in use. Text files supply the patent and hackathon URLs and team context.

## Video

The player uses `assets/hackathon-presentation.mp4`, a lossless remux of the supplied MP4 with `faststart` metadata for progressive playback. The original recording is retained and linked for download. Both use H.264/AAC, run about 2:42, and are about 21 MB each. The player uses native controls, `playsinline`, a small extracted poster frame, and `preload="none"` to avoid loading the recording until playback. No caption track was supplied; add a reviewed WebVTT caption file for full spoken-content accessibility. The written summary and slide download are available alongside the player.

PPTX and DOCX materials download for use in compatible software. The hackathon deck also retains two original Google Drive hyperlinks on slide 10; their availability depends on the owners' sharing settings.

## Verification

Local verification covers file and fragment references on all seven HTML pages, HTTP asset responses, mobile overflow, project/back navigation, output filters, image loading, native video playback, and site console errors. External destinations can require sign-in or block automated access; local PDFs remain available independently of publisher/social-site access. No deployment is performed by editing these files.
