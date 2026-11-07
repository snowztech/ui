// Wires every <nav class="sn-toc" data-sn-toc>. Where it sits beside the text it opens its list,
// and as the page scrolls it marks the link of the section being read with aria-current="location".

const WIDE = "(min-width: 1000px)";

export function bindToc(nav: HTMLElement): void {
  if (nav.dataset.snBound === "toc") return;
  nav.dataset.snBound = "toc";

  const details = nav.querySelector("details");
  if (details && matchMedia(WIDE).matches) details.open = true;

  const links = [...nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')];
  const targets = links.map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))));
  if (!links.length) return;

  let current: HTMLAnchorElement | undefined;
  let queued = false;
  // The section being read is the last one whose heading has passed a quarter of the way down,
  // or the last of all at the bottom of the page, since a short final section never reaches that line.
  const mark = () => {
    queued = false;
    const atEnd = innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
    let index = 0;
    targets.forEach((target, i) => {
      if (target && (atEnd || target.getBoundingClientRect().top <= innerHeight / 4)) index = i;
    });
    const link = links[index];
    if (link === current) return;
    current?.removeAttribute("aria-current");
    link.setAttribute("aria-current", "location");
    current = link;
  };
  addEventListener("scroll", () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(mark);
  }, { passive: true });
  mark();
}

export function initTocs(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>("[data-sn-toc]").forEach(bindToc);
}
