const { execSync } = require("child_process");

module.exports = ({}, dirName) => {
  execSync(`mkdir ./src/pages/${dirName}`)
};
