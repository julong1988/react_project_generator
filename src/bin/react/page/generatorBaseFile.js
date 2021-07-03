const { writeFileSync } = require("fs");

module.exports = ({ typescript }, dirName) => {
  const _ = typescript ? "t" : "j";

  // pages
  writeFileSync(
    `./src/pages/${dirName}/index.${_}sx`,
    require("../root/src/pages/page")({ typescript })
  );
  writeFileSync(
    `./src/pages/${dirName}/style.styl`,
    require("../root/src/pages/page/style")
  );
  writeFileSync(
    `./src/pages/${dirName}/redux.${_}s`,
    require(`../root/src/pages/page/redux`)({ typescript })
  );
};
