const { writeFileSync } = require("fs");

module.exports = ({ name, typescript, pageNum }) => {
  const _ = typescript ? "t" : "j";

  // root
  writeFileSync(`./${name}/src/app.html`, require("../root/src/app"));
  writeFileSync(
    `./${name}/src/index.${_}sx`,
    require("../root/src/index")({ typescript })
  );
  writeFileSync(
    `./${name}/src/Router.${_}sx`,
    require("../root/src/router")({ typescript, pageNum })
  ); // 타입 미적용.
  writeFileSync(
    `./${name}/src/store.js`,
    require("../root/src/store")({ typescript })
  ); // 타입 미적용.

  // components
  writeFileSync(
    `./${name}/src/components/loading/index.${_}sx`,
    require("../root/src/components/loading")({ typescript })
  );
  writeFileSync(
    `./${name}/src/components/loading/style.styl`,
    require("../root/src/components/loading/style")
  );

  // layout
  writeFileSync(
    `./${name}/src/layout/aside/index.${_}sx`,
    require("../root/src/layout/aside")({ typescript })
  );
  writeFileSync(
    `./${name}/src/layout/aside/style.styl`,
    require("../root/src/layout/aside/style")
  );
  writeFileSync(
    `./${name}/src/layout/container/index.${_}sx`,
    require("../root/src/layout/container")({ typescript })
  );
  writeFileSync(
    `./${name}/src/layout/container/style.styl`,
    require("../root/src/layout/container/style")
  );
  writeFileSync(
    `./${name}/src/layout/header/index.${_}sx`,
    require("../root/src/layout/header")({ typescript })
  );
  writeFileSync(
    `./${name}/src/layout/header/style.styl`,
    require("../root/src/layout/header/style")
  );
  writeFileSync(
    `./${name}/src/layout/nav/index.${_}sx`,
    require("../root/src/layout/nav")({ typescript, pageNum })
  );
  writeFileSync(
    `./${name}/src/layout/nav/style.styl`,
    require("../root/src/layout/nav/style")
  );

  writeFileSync(
    `./${name}/src/layout/WrapContainer.${_}sx`,
    require("../root/src/layout/WrapContainer")({ typescript })
  ); // 타입 미적용

  // pages
  writeFileSync(
    `./${name}/src/pages/main/index.${_}sx`,
    require("../root/src/pages/main")({ typescript })
  );
  writeFileSync(
    `./${name}/src/pages/main/style.styl`,
    require("../root/src/pages/main/style")
  );
  for (let i = 0; i < pageNum; i++) {
    writeFileSync(
      `./${name}/src/pages/page${i + 1}/index.${_}sx`,
      require(`../root/src/pages/page`)({ typescript })
    );
    writeFileSync(
      `./${name}/src/pages/page${i + 1}/style.styl`,
      require(`../root/src/pages/page/style`)
    );
    writeFileSync(
      `./${name}/src/pages/page${i + 1}/redux.${_}s`,
      require(`../root/src/pages/page/redux`)({ typescript })
    );
  }

  if (typescript) {
    writeFileSync(
      `./${name}/types/index.d.ts`,
      require("../root/types/index_d")()
    );
  }
};
