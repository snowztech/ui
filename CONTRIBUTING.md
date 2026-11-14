# Contributing

A change here changes every snowztech site, so it keeps these rules.

- **Two products first.** Build a new piece in the product with tokens. It moves into the lib when a second product needs it.
- **Tokens only.** Three heights, three radii, `--sn-hover`, `--sn-focus-ring`. `pnpm lint:css` catches raw values.
- **Readable.** Text passes 4.5:1 in light and dark, frost and powder. `pnpm test` checks every docs page.
- **Same classes in HTML and React.** A React component exists only where it adds typed variants or behavior.
- **Removing things.** If a site uses it, mark it deprecated for one minor version and say what replaces it. If nothing uses it, remove it.
- **Releasing.** The three packages share one version. Add a changeset (`pnpm changeset`) that says what changed and what a product needs to do.
