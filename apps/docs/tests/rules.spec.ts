import { test, expect, type Page } from "@playwright/test";
import { pages, themes, modes, setup } from "./pages";

// The design rules, checked on computed styles so they hold on any OS.

async function open(page: Page, path: string, theme: string, mode: string) {
  await page.addInitScript(setup(theme, mode));
  await page.goto(path);
  await page.evaluate(([t, m]) => {
    document.documentElement.dataset.theme = t;
    if (m === "powder") document.documentElement.dataset.snMode = "powder";
    else delete document.documentElement.dataset.snMode;
  }, [theme, mode]);
}

for (const path of pages) {
  test(`${path}: no console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    expect(errors).toEqual([]);
  });

  test(`${path}: no sideways scroll on a phone`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto(path);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test(`${path}: controls use the three heights and radii`, async ({ page }) => {
    await page.goto(path);
    const bad = await page.evaluate(() => {
      const heights = [28, 36, 44];
      const radii = ["4px", "6px", "10px", "50%", "0px"];
      const out: string[] = [];
      document.querySelectorAll<HTMLElement>(".sn-btn, .sn-icon-btn, .sn-input, .sn-file, .sn-segmented, .sn-theme-toggle").forEach((el) => {
        if (!el.offsetParent) return;
        const cs = getComputedStyle(el);
        const h = Math.round(el.getBoundingClientRect().height);
        if (!heights.includes(h)) out.push(`${el.className} height ${h}`);
        if (!radii.includes(cs.borderTopLeftRadius)) out.push(`${el.className} radius ${cs.borderTopLeftRadius}`);
      });
      return out;
    });
    expect(bad).toEqual([]);
  });

  for (const theme of themes) for (const mode of modes) {
    test(`${path}: text contrast in ${theme} ${mode}`, async ({ page }) => {
      await open(page, path, theme, mode);
      const bad = await page.evaluate(() => {
        // rgb(…) is 0–255; color(srgb …), which color-mix() returns, is 0–1.
        const rgb = (s: string) => {
          const n = (s.match(/[\d.]+/g) || []).map(Number);
          return s.startsWith("color(srgb") ? [...n.slice(0, 3).map((x) => x * 255), ...n.slice(3)] : n;
        };
        const lum = ([r, g, b]: number[]) => {
          const f = (c: number) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
          return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
        };
        // The first opaque background behind an element.
        const bgOf = (el: Element | null): number[] => {
          for (; el; el = el.parentElement) {
            const c = rgb(getComputedStyle(el).backgroundColor);
            if (c.length === 3 || (c.length === 4 && c[3] === 1)) return c.slice(0, 3);
          }
          return rgb(getComputedStyle(document.body).backgroundColor);
        };
        const out: string[] = [];
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
          const node = walker.currentNode;
          const el = node.parentElement;
          if (!el || !node.textContent?.trim() || !el.offsetParent) continue;
          if (el.closest("[disabled], [aria-disabled='true'], .shiki, .sn-prompt, [aria-hidden='true']")) continue;
          const cs = getComputedStyle(el);
          if (cs.visibility === "hidden" || Number(cs.opacity) < 1) continue;
          const fg = rgb(cs.color);
          if (fg.length === 4 && fg[3] < 1) continue; // translucent text is decoration
          const a = lum(fg.slice(0, 3)), b = lum(bgOf(el));
          const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
          if (ratio < 4.5) out.push(`${ratio.toFixed(2)} "${node.textContent.trim().slice(0, 30)}" <${el.tagName.toLowerCase()} class="${el.className}">`);
        }
        return [...new Set(out)];
      });
      expect(bad).toEqual([]);
    });
  }
}
