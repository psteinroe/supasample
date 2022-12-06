const baseConfig = require("./prettier.config.base.js");

module.exports = {
  ...baseConfig,
  plugins: [require("prettier-plugin-tailwindcss")],
};
