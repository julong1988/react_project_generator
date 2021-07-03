const { writeFileSync } = require("fs");

const format = (data) => JSON.stringify(data, null, 2);

module.exports = ({ name, typescript, antd }) => {
  // files create
  writeFileSync(
    `./${name}/.eslintrc.json`,
    require("../root/eslintrc.js")({ typescript })
  );
  writeFileSync(`./${name}/.gitignore`, require("../root/gitignore"));
  writeFileSync(
    `./${name}/.huskyrc.json`,
    format(require("../root/huskyrc.json"))
  );
  writeFileSync(
    `./${name}/.prettierrc.json`,
    format(require("../root/prettierrc.json"))
  );
  writeFileSync(
    `./${name}/postcss.config.js`,
    require("../root/postcss.config")
  );

  if (!typescript) {
    writeFileSync(
      `./${name}/.babelrc.js`,
      require("../root/babelrc.js")({ antd })
    );
  }
  if (typescript) {
    writeFileSync(
      `./${name}/tsconfig.json`,
      require("../root/tsconfig.js")()
    );
  }
  writeFileSync(
    `./${name}/webpack.config.js`,
    require("../root/webpack.config.js")({ name, typescript, antd })
  );
  writeFileSync(
    `./${name}/package.json`,
    require("../root/package")({ name, typescript })
  );
};
