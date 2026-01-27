import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        ignores: [".next/*", "node_modules/*"],
    },
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { modules: true },
                ecmaVersion: "latest",
                project: "./tsconfig.json",
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                React: "readonly", // For React < 17 or if manually used
            }
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "no-undef": "off", // Typescript finds these better
        }
    }
];
