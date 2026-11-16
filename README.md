# Perry's Personal Website

A simple, clean personal website built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## About

Hi, I'm Perry — builder from China, working remotely with Bay Area teams.

## Features

- Clean, minimal design
- Dark mode support
- Responsive layout
- Built with Astro and Tailwind CSS
- No external dependencies or themes

## Development

All commands are run from the root of the project:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `yarn`                 | Installs dependencies (no Playwright browsers)  |
| `yarn playwright:install` | Download Chromium for PDF generation         |
| `yarn dev`             | Starts local dev server at `localhost:4321`     |
| `yarn build`           | Install Chromium + generate PDFs + build site   |
| `yarn preview`         | Preview your build locally, before deploying    |

## Deploy

Production builds run on **GitHub Actions (`macos-latest`)** so Playwright PDF font rendering matches local macOS, then deploy to Netlify with the CLI.

Netlify git builds are canceled via `ignore` (and Playwright is not installed on `yarn install`, so accidental Netlify installs stay fast).

Also turn off automatic builds in the Netlify UI if you can: **Project configuration → Build & deploy → Continuous Deployment → Stop builds** — otherwise Netlify may still spin up a job on every push (even if it exits early).

Required Actions secrets: `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`.

## Contact

Connect on [LinkedIn](https://www.linkedin.com/in/plrthink)

## License

MIT.
