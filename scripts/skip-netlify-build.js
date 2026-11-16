// Netlify ignore: exit 0 = cancel build, exit 1 = continue.
// Always skip — production deploys come from GitHub Actions (macos) via netlify-cli.
process.exit(0);
