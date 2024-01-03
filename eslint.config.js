"use strict";

// Import the ESLint plugin locally
const eslintPluginMM = require("./eslint-plugin-mm");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    // Using the eslint-plugin-example plugin defined locally
    plugins: { example: eslintPluginMM },
    rules: {
      "example/no-nested-if": "warn",
    },
  },
];
