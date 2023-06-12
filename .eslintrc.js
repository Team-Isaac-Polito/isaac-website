module.exports = {
  root: true,
  extends: [
    "react-app",
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
}
