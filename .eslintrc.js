module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react-refresh",
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "prettier/prettier": "warn",
  },
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
}
