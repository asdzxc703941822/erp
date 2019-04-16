module.exports = {
  root: true,
  env: {
    node: true
  },
  // extends: ["plugin:vue/essential", "@vue/standard"],
  extends: ["plugin:vue/essential"],
  rules: {
    // quotes: ["error", "double"],
    // semi: "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
