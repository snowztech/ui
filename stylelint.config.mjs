// Component CSS may only use tokens for radius, timing and color. Raw values
// are how a system drifts: we once had seven radii and seventeen heights.
export default {
  rules: {},
  overrides: [
    {
      files: ["packages/ui-css/src/components/**/*.css"],
      rules: {
        "color-no-hex": [true, { message: "Use a color token (--sn-*), not a hex value." }],
        "color-named": ["never", { ignore: ["inside-function"], message: "Use a color token (--sn-*)." }],
        "function-disallowed-list": [["rgb", "rgba", "hsl", "hsla"], { message: "Use a color token (--sn-*)." }],
        "declaration-property-value-disallowed-list": [
          {
            "/^border(-\\w+)*-radius$/": ["/^\\d+(\\.\\d+)?px$/"],
            "/^(transition|transition-duration|animation-duration)$/": ["/\\d+m?s/"],
            "/^(height|min-height)$/": ["/^(28|36|44)px$/"],
          },
          { message: "Use the rule tokens: --sn-radius-*, --sn-transition, --sn-control-*." },
        ],
      },
    },
  ],
};
