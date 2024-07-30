import { chromium } from "playwright";

const locales = ["en", "zh"];

const main = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const locale of locales) {
    await page.goto(`http://localhost:4321/resume/${locale}`, {
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
