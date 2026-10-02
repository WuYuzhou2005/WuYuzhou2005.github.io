# Yuzhou Wu — academic website

A responsive academic website using plain HTML, CSS, and a small JavaScript file. No framework, dependencies, build command, analytics, or external font downloads. Home, Research, Projects, CV, and Contact are sections on one page.

## Current handoff status

Prepared for the public repository `WuYuzhou2005/WuYuzhou2005.github.io` and its `main` branch. **GitHub Pages has not been enabled, and no Pages deployment settings have been changed.** No deployment workflow is included.

The target repository returned HTTP 404 and the connected GitHub tools expose no repository-creation operation. The local Git credential helper also had no usable GitHub login without interaction. Remote repository creation and upload therefore remain blocked; the local files are ready to upload once the repository exists.

The attachment `Yuzhou_Wu_CV.pdf` could not be downloaded through the available file access. It is **not included**, and no substitute or fabricated CV has been created. An older CV was used only to confirm the email address `u3612722@connect.hku.hk`.

The CV section keeps visible Open CV and Download PDF buttons and a preview placeholder. Until a valid PDF is available, JavaScript prevents the disabled buttons from opening a missing file. Every PDF link and the preview source use `/Yuzhou_Wu_CV.pdf`. Upload the genuine PDF into the repository root with that exact filename; the controls and preview then activate automatically on page load.

## Upload code without publishing

Create a **public** repository named `WuYuzhou2005.github.io` under `WuYuzhou2005`. Upload this folder's contents into the repository root on `main`, preserving `assets/` and `.nojekyll`. Do not open or configure Pages yet. No Actions workflow is needed for this step.

## Files

```text
index.html
assets/
  styles.css
  site.js
.nojekyll
README.md
Yuzhou_Wu_CV.pdf  # add your supplied PDF here
```

## Publish later using the GitHub website (only when requested)

1. Sign in as `WuYuzhou2005` and create a public repository named **WuYuzhou2005.github.io**. If it already exists, inspect its contents first and use it only if it is your intended website repository.
2. Extract the website ZIP. Upload the **contents** of `academic-website/` into the repository root using **Add file → Upload files**. `index.html` must be at the root, not inside an `academic-website` directory. Preserve the `assets/` folder. Include `.nojekyll`; if your file picker hides it, create an empty file named `.nojekyll` through **Add file → Create new file**.
3. Upload your current CV into the same root folder with the exact, case-sensitive filename **Yuzhou_Wu_CV.pdf**.
4. Commit the files to `main`.
5. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select **main** and **/(root)**, then click **Save**.
6. Wait for deployment to finish. The expected address is **https://wuyuzhou2005.github.io/**. The Pages settings screen reports the actual live URL. Check the Pages deployment in the Actions tab if it does not appear.
7. Open the site on desktop and mobile. Check all five navigation links, GitHub and email links, CV open/download buttons, and the PDF preview. Some mobile browsers open PDFs externally; the Open CV button provides a fallback.

For a project repository with a different name, use the same root publishing settings; its URL is `https://wuyuzhou2005.github.io/REPOSITORY-NAME/`. CSS and JavaScript assets use relative paths. PDF paths intentionally use `/Yuzhou_Wu_CV.pdf` for the personal site. If you later use a project repository URL, update PDF paths in `index.html` and `assets/site.js` to include that repository prefix.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Deploy with Git (alternative)

After creating the empty public repository, open a terminal **inside this website folder**:

```sh
git init -b main
git add .
git commit -m "Build academic personal website"
git remote add origin https://github.com/WuYuzhou2005/WuYuzhou2005.github.io.git
git push -u origin main
```

Authenticate with your own GitHub credentials when prompted. Then enable Pages using step 5 above. For an existing repository, clone it first and copy these files into that checkout; do not run the initialization commands over an existing project or overwrite unrelated files.

## Local preview

From this folder:

```sh
python -m http.server 8000
```

Visit http://localhost:8000. Use an HTTP server rather than opening `index.html` directly: browsers restrict the PDF availability check for `file://` pages.

## Editing

- Update biography, research text, contact address, and GitHub links in `index.html`.
- Change typography, spacing, colors, and mobile layout in `assets/styles.css`.
- Replace `Yuzhou_Wu_CV.pdf` to update the CV. The script checks for a valid PDF signature before showing buttons and the embedded viewer.
- No unpublished results, publication claims, grades, phone number, or personal address are included.
- Commit subsequent changes to `main`; GitHub Pages republishes them automatically.

## Accessibility and browser behavior

Semantic sections and headings, a skip link, visible keyboard focus, wrapping mobile navigation, PDF fallback text, and reduced visual motion are built in. The content and navigation work without JavaScript; JavaScript adds active navigation, the current year, and PDF availability detection. The layout uses system fonts and requires no third-party services. Browser visual QA has not been run; syntax, anchors, file paths, and missing-PDF behavior are checked locally.
