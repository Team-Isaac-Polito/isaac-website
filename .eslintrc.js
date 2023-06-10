module.exports = {
  root: true,
  extends: [
    "react-app",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    warnOnUnsupportedTypeScriptVersion: false,
  },
}
