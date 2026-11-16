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
| `yarn`              | Installs dependencies                              |
| `yarn dev`          | Starts local dev server at `localhost:4321`        |
| `yarn build`        | Generate resume PDFs + build site to `./dist/`     |
| `yarn preview`      | Preview your build locally, before deploying       |

## Deploy

Production builds run on **GitHub Actions (`macos-latest`)** so Playwright PDF font rendering matches local macOS, then deploy to Netlify with the CLI. Netlify’s git build is skipped (`ignore = "exit 0"`).

Required Actions secrets: `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`.

## Contact

Connect on [LinkedIn](https://www.linkedin.com/in/plrthink)

## License

MIT.
