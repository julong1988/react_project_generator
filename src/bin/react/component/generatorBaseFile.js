const { writeFileSync } = require("fs");

module.exports = ({ typescript }, dirName) => {
  const _ = typescript ? "t" : "j";

  // components
  writeFileSync(
    `./src/components/${dirName}/index.${_}sx`,
    require("../root/src/components/sample")({ typescript, dirName })
  );
  writeFileSync(
    `./src/components/${dirName}/style.styl`,
    require("../root/src/components/sample/style")
  );
};
