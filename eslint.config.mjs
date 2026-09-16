import globals from "globals";

export default [
  {
    files: ["scripts/**/*.mjs", "tests/*.test.mjs"],
    languageOptions: { ecmaVersion: "latest", sourceType: "module", globals: globals.node },
    rules: {
      "no-constant-binary-expression": "error",
      "no-dupe-else-if": "error",
      "no-redeclare": "error",
      "no-undef": "error",
      "no-unreachable": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", caughtErrors: "none" }],
    },
  },
];
