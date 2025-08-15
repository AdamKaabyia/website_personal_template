# Resume Website

> **This repository is a template.** Fork or clone it, then replace the placeholder text and images with your own details. 

## Local development

No build step is required. Simply open `index.html` in your browser.

## Deployment to GitHub Pages

This project includes a GitHub Actions workflow that deploys the site to GitHub Pages whenever changes are pushed to the `main` branch.

1. Push this repository to GitHub.
2. In your GitHub repository, navigate to **Settings → Pages**.
3. In the **Build and deployment** section, choose **GitHub Actions** as the source.
4. Save the settings.
5. Commit and push any change to `main`—the site will be built and published automatically.

Your resume will be available at:

```
https://<your-username>.github.io/<repository-name>/
```

If you prefer keeping the source private while publishing the generated site to a *different* public repository, leave the `deploy-public.yml` workflow in place and set the two secrets it requires (`GH_PAGES_PAT` and `PUBLIC_REPO`).

---

## Customising the template

| Area | How to update |
|------|---------------|
| **Name & tagline** | Edit the `<header>` in `index.html`. |
| **Hero section** | The greeting, type-writer effect and call-to-action live in the `#hero` section. |
| **Sections & timeline** | Each major CV section is its own `<section>` – remove, rename or reorder as needed. |
| **Project thumbnails** | URLs are stored in `data-bg` attributes – swap them for your own hosted images (local or remote). |
| **Accent colour** | Change `--primary` inside `style.css`. |
| **Fonts** | The default uses *Poppins* – import any Google Font you like in `<head>`. |

### Making it **unique**

1. **Brand colour** – update the `--primary` variable and watch the entire palette shift.
2. **Photography** – replace the Unsplash placeholders with your own screenshots.
3. **Micro-animations** – many elements have classes like `.reveal` that fade in. Add your own keyframes to stand out.
4. **Custom sections** – passion projects, testimonials, writing, anything that sells *you*.

---

## Removing `references/`

The bulky stock images and external site clones originally shipped in `references/`. That folder is now ignored by Git and **not** deployed. Feel free to delete it locally to save disk space:

```bash
rm -rf references/
```

If you had already committed it, run

```bash
git rm -r --cached references
git commit -m "Remove references directory"
git push
```

---

## License

This template is released under the MIT License – modify and use it without restriction.
