const ora = require("ora");
const { execSync } = require("child_process");
const { pkg } = require("../config");

const installFn = (name, pkgs) => {
  for (const type of Object.keys(pkgs)) {
    pkgs[type].forEach((e) => {
      if (type === "s") {
        execSync(`cd ${name} && npm install --save ${e}`, {stdio:'inherit'});
      }
      if (type === "d") {
        execSync(`cd ${name} && npm install --save-dev ${e}`, {stdio:'inherit'});
      }
      if (type === "p") {
        execSync(`cd ${name} && npx install-peerdeps --dev ${e}`, {stdio:'inherit'});
      }
    });
  }
};
module.exports = async ({ name, typescript, antd }) => {
  const totalProcess = antd ? "3" : "2";
  // base install
  // const spinner = ora("").start();
  // spinner.color = "red";
  // spinner.text = `기본 패키지 설치중(1/${totalProcess})`;
  installFn(name, pkg.base);
  // typescript or es6
  // spinner.color = "yellow";
  // spinner.text = `${
  //   typescript ? "타입스크립트" : "ES6"
  // } 관련 패키지 설치중(2/${totalProcess})`;
  installFn(name, typescript ? pkg.typescript : pkg.es);
  // antd
  if (antd) {
    // spinner.color = "green";
    // spinner.text = `antDesign 관련 패키지 설치중(3/${totalProcess})`;
    installFn(name, pkg.antd);
  }
  // spinner.clear().stop();
};
