import js from "@eslint/js"
import globals from "globals"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import reactRefreshPlugin from "eslint-plugin-react-refresh"
import tsPlugin from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import prettierRecommended from "eslint-plugin-prettier/recommended"

const cleanGlobals = (g) =>
  Object.fromEntries(Object.entries(g).map(([k, v]) => [k.trim(), v]))

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  js.configs.recommended,
  ...tsPlugin.configs["flat/recommended"],
  reactPlugin.configs.flat.recommended,
  reactHooksPlugin.configs.flat.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...cleanGlobals(globals.browser),
        ...cleanGlobals(globals.node),
      },
    },
    plugins: {
      "react-refresh": reactRefreshPlugin,
    },
    rules: {
      "react-refresh/only-export-components": "warn",
      "react/react-in-jsx-scope": "off",
    },
  },
  prettierRecommended,
  {
    rules: {
      "prettier/prettier": "warn",
    },
  },
]
