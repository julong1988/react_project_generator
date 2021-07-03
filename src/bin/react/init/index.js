const path = require("path");
const mkdir = require("./mkdir");
const generatorEnv = require("./generatorEnv");
const generatorBaseFile = require("./generatorBaseFile");
const install = require("./install");

module.exports = (options) => {
  // step.1 clear app folder & create app folder
  mkdir(options);
  // step.2 env generator
  generatorEnv(options);
  // step.3 generator file
  generatorBaseFile(options);
  // step.4 npm install
  install(options);
};
