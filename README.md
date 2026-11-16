# Alexen docs site

VitePress site (English + Türkçe): user guide with real screenshots, a complete API reference and the changelog.

```
docs-site/
  index.md, guide/, tr/        hand-written guide (EN + TR)
  api/*.md, changelog.md       GENERATED, do not edit by hand
  public/openapi.json          GENERATED
  public/img/*.webp            panel screenshots (made from fake data)
  scripts/descriptions.json    text for endpoints that have no docstring
  scripts/screenshots/         Playwright script + mock data that makes the screenshots
```

## On EVERY release (rule)

If an endpoint, field or panel section was added or changed, the docs must change in the same release.

1. Add a docstring to the new route (or an entry in `scripts/descriptions.json`).
2. `bash scripts/build_docs.sh` regenerates the API pages, the changelog and `docs/openapi.json`, then builds the site. It prints endpoints that still have no description: fill them in.
3. New panel section? Add a mock to `scripts/screenshots/mock.js` and a page to `pages.js`, take the screenshot (see below) and write/extend a guide page in `guide/` and `tr/guide/`, and add it to the sidebar in `.vitepress/config.mts`.
4. Commit `docs/` and `docs-site/`.

## Screenshots

```bash
# from the repo root, after building the dashboard
S=docs-site/scripts/screenshots
docker run --rm -v "$PWD/app/dashboard/build":/build -v "$PWD/$S":/shots -v "$PWD/docs-site/public/img":/out shotter:latest /shots/shots.js
```
Only fake data goes in the screenshots: no real users, addresses, keys or licenses.

## Publish

`.github/workflows/docs.yml` builds and deploys to GitHub Pages on push. Locally: `cd docs-site && npm run dev`.
