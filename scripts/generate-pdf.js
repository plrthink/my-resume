import { chromium } from "playwright";

const locales = ["en", "zh"];

const main = async () => {
  // GitHub macOS runners ship Google Chrome; avoid Playwright CDN downloads.
  const browser = await chromium.launch(
    process.env.CI ? { channel: "chrome" } : undefined,
  );
  const page = await browser.newPage();

  for (const locale of locales) {
    await page.goto(`http://127.0.0.1:4321/resume/${locale}`, {
      waitUntil: "networkidle",
    });

    await page.emulateMedia({ media: "screen" });

    await page.pdf({
      path: `public/resume-${locale}.pdf`,
      margin: { top: "50px", bottom: "80px" },
      printBackground: true,
    });
  }

  return browser.close();
};

main();
