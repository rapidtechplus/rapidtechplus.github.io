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
  {
    // `.next*` rather than `.next`: builds run against a live dev server need a
    // separate distDir (NEXT_DIST_DIR, e.g. `.next-verify`), and linting that
    // build's own minified output otherwise buries the real signal in
    // thousands of errors. ESLint does not read .gitignore, so it must be here.
    ignores: ["node_modules/**", ".next*/**", "out/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
