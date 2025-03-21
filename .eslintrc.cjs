/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true, // Added to support Node environment
  },
  ignorePatterns: ["!**/.server", "!**/.client"],

  // Base config
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  plugins: ["react", "@typescript-eslint", "jsx-a11y", "import"],

  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },

  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  overrides: [
    // React
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      extends: ["plugin:react/jsx-runtime", "plugin:jsx-a11y/recommended"],
      settings: {
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
      },
    },

    // Typescript
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["import"],
      settings: {
        "import/internal-regex": "^~/",
      },
      extends: ["plugin:import/recommended", "plugin:import/typescript"],
    },

    // Node
    {
      files: [".eslintrc.cjs"],
      env: {
        node: true,
      },
    },
  ],
};
