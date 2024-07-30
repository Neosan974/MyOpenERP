import { fileURLToPath } from "url";
import path from "path";
import { FlatCompat } from "@eslint/eslintrc";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("@nuxtjs/eslint-config-typescript"),
  {
    rules: {
      semi: ["error", "always"],
      "prefer-const": "error",
      quotes: ["error", "double"],
      "comma-dangle": ["error", "always-multiline"],
    },
  },
];
