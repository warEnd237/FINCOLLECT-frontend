// eslint.config.mjs
import storybook from "eslint-plugin-storybook";
import prettier from "eslint-plugin-prettier";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js + TypeScript recommended configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Règles globales
  {
    // On ne lint que le dossier src
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "public/**",
      "scripts/**",
      "packages/**",
      "**/*.config.js",
      "**/vendor/**",
    ],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      // Bonnes pratiques JS/TS
      "no-unused-vars": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "eqeqeq": ["error", "always"],

      // TypeScript
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",

      // Prettier (toujours en dernier)
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          semi: true,
          printWidth: 100,
          tabWidth: 2,
          trailingComma: "es5",
        },
      ],
    },
  },

  // Overrides pour dossiers internes (Next, node_modules, etc.)
  {
    files: [".next/**", "node_modules/**", "out/**", "build/**"],
    rules: {
      "@next/next/no-assign-module-variable": "off",
    },
  },

  // Storybook
  ...storybook.configs["flat/recommended"],
];

export default eslintConfig;
