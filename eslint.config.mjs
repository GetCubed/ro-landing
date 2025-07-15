// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...storybook.configs["flat/recommended"],
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      // Vercel deployment standards - treat warnings as errors
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
      "@next/next/no-unwanted-polyfillio": "error",
      "@next/next/no-page-custom-font": "error",
      "@next/next/no-sync-scripts": "error",
      "@next/next/no-document-import-in-page": "error",
      "@next/next/no-head-import-in-document": "error",
      "@next/next/no-script-component-in-head": "error",
      "@next/next/no-styled-jsx-in-document": "error",
      "@next/next/no-css-tags": "error",
      "@next/next/no-title-in-document-head": "error",
      "@next/next/google-font-display": "error",
      "@next/next/google-font-preconnect": "error",
      "@next/next/next-script-for-ga": "error",
      "@next/next/no-before-interactive-script-outside-document": "error",
      "@next/next/inline-script-id": "error",
      "@next/next/no-assign-module-variable": "error",
      "@next/next/no-duplicate-head": "error",
      "@next/next/no-head-element": "error",

      // React strict rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      // TypeScript strict rules
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-empty-function": "warn",

      // General code quality
      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "error",
      "no-unused-vars": "off", // Use TypeScript version instead
      "prefer-const": "error",
      "no-var": "error",
      "eqeqeq": ["error", "always"],
      "no-implicit-coercion": "error",
      "no-return-assign": "error",
      "no-useless-return": "error",
      "no-duplicate-imports": "error",
    }
  }
];

export default eslintConfig;
