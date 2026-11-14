// Wires every .sn-tabs[role="tablist"]. Each tab names its panel with
// aria-controls. Click or arrow keys pick a tab; the other panels get hidden.

function select(list: HTMLElement, tab: HTMLElement, focus = false): void {
  list.querySelectorAll<HTMLElement>('[role="tab"]').forEach((t) => {
    const on = t === tab;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    const panel = document.getElementById(t.getAttribute("aria-controls") || "");
    if (panel) panel.hidden = !on;
  });
  if (focus) tab.focus();
}

export function bindTabs(list: HTMLElement): void {
  if (list.dataset.snBound === "tabs") return;
  list.dataset.snBound = "tabs";
  const tabs = () => [...list.querySelectorAll<HTMLElement>('[role="tab"]')];
  select(list, tabs().find((t) => t.getAttribute("aria-selected") === "true") ?? tabs()[0]);

  list.addEventListener("click", (e) => {
    const tab = (e.target as HTMLElement).closest<HTMLElement>('[role="tab"]');
    if (tab) select(list, tab);
  });
  list.addEventListener("keydown", (e) => {
    const all = tabs();
    const i = all.indexOf(document.activeElement as HTMLElement);
    if (i < 0) return;
    const next =
      e.key === "ArrowRight" ? all[(i + 1) % all.length]
      : e.key === "ArrowLeft" ? all[(i - 1 + all.length) % all.length]
      : e.key === "Home" ? all[0]
      : e.key === "End" ? all[all.length - 1]
      : null;
    if (!next) return;
    e.preventDefault();
    select(list, next, true);
  });
}

export function initTabs(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('.sn-tabs[role="tablist"]').forEach(bindTabs);
}
