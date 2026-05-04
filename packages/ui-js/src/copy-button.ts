// Wires every <button data-sn-copy="…"> on the page.
// On click: copies the attr's value, flips data-copied="true" for ~1.2s.
// CSS handles the visual swap (.sn-copy-btn[data-copied="true"]).

const RESET_MS = 1200;

async function copyValue(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    // Fallback for non-secure contexts.
    const ta = document.createElement("textarea");
    ta.value = value;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch { /* ignore */ }
    document.body.removeChild(ta);
    return ok;
  }
}

function onClick(this: HTMLElement) {
  const value = this.getAttribute("data-sn-copy");
  if (value === null) return;
  void copyValue(value).then((ok) => {
    if (!ok) return;
    this.setAttribute("data-copied", "true");
    window.setTimeout(() => this.removeAttribute("data-copied"), RESET_MS);
  });
}

export function bindCopyButton(el: HTMLElement): void {
  if (el.dataset.snBound === "copy") return;
  el.dataset.snBound = "copy";
  el.addEventListener("click", onClick);
}

export function initCopyButtons(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>("[data-sn-copy]").forEach(bindCopyButton);
}
