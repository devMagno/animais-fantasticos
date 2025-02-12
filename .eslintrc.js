module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-trailing-spaces": 0,
    semi: 0,
    "no-param-reassign": 0,
    "import/extensions": 0,
  },
};
