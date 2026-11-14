export const pages = [
  "/",
  "/identity",
  "/install",
  "/tokens",
  "/components",
  "/states",
  "/icons",
  "/examples/personal-page",
  "/examples/saas-landing",
];

export const themes = ["light", "dark"] as const;
export const modes = ["frost", "powder"] as const;

// Sets theme and mode the way a product would, before the page paints.
export const setup = (theme: string, mode: string) => `
  localStorage.setItem("theme", "${theme}");
  localStorage.setItem("mode", "${mode}");
`;
