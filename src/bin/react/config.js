const argv = require("minimist")(process.argv.slice(2));

const installConfig = {
  name: "my-app",
  type: argv._[0] || "",
  typescript: true,
  antd: true,
  pageNum: 3,
};

const command = ["init", "page", "component", "i", "p", "c"];

const pkg = {
  base: {
    s: ["react react-dom react-redux redux react-router-dom"],
    d: [
      "webpack webpack-cli webpack-dev-server",
      "html-webpack-plugin mini-css-extract-plugin clean-webpack-plugin webpack-bundle-analyzer",
      "css-loader stylus stylus-loader file-loader",
      "autoprefixer postcss postcss-loader cssnano",
      "eslint eslint-loader husky",
      "prettier eslint-config-prettier eslint-plugin-prettier pretty-quick",
    ],
    p: ["eslint-config-airbnb"],
  },
  typescript: {
    s: [],
    d: [
      "typescript source-map-loader ts-loader",
      "@typescript-eslint/parser @typescript-eslint/eslint-plugin",
      "@types/react @types/react-dom @types/react-redux @types/redux @types/react-router-dom",
    ],
  },
  es: {
    s: [],
    d: [
      "npm install --save-dev @babel/core @babel/cli babel-loader babel-eslint",
      "@babel/preset-env @babel/preset-react babel-preset-minify @babel/plugin-transform-runtime",
    ],
  },
  antd: {
    s: ["antd"],
    d: ["babel-plugin-import", "less", "less-loader"],
  },
};

module.exports = {
  installConfig,
  command,
  pkg,
};
