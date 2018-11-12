module.exports = {
  extends: "stylelint-config-standard",
  ignoreFiles: [
    "src/**/*.template.scss",
    "src/node_modules/**/*",
    "dist/**/*",
    "distDemo/**/*",
  ],
  rules: {
    "selector-class-pattern": [
      // RULE: always prefix `af-`, no camel case, no simple `_`, end only with letter or number
      // EXCEPTIONS : glyphicon & custom disable (only for plugins)
      "^((af-[a-z]([a-z0-9-]|__[a-z])*[a-z0-9])|(glyphicon)\.*)$",
      {
        "resolveNestedSelectors": true,
        "severity": "warning"
      }
    ],
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "extend",
          "at-root",
          "debug",
          "warn",
          "error",
          "if",
          "else",
          "for",
          "each",
          "while",
          "mixin",
          "include",
          "content",
          "return",
          "function"
        ]
      }
    ],
    "color-no-hex": true,
    "at-rule-empty-line-before": [
      "always",
      {
        "except": ["after-same-name", "inside-block", "blockless-after-same-name-blockless"]
      }
    ],
    "number-leading-zero": "never",
    "no-descending-specificity": null
  }
};
