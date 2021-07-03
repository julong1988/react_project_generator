const { execSync } = require("child_process");

module.exports = ({ name, typescript, pageNum=2 }) => {
  execSync(`rm -rf ./${name} && mkdir ${name}`);

  execSync(`mkdir ${name}/src`);
  execSync(`mkdir ${name}/src/components`);
  execSync(`mkdir ${name}/src/components/loading`);

  execSync(`mkdir ${name}/src/layout`);
  execSync(`mkdir ${name}/src/layout/aside`);
  execSync(`mkdir ${name}/src/layout/container`);
  execSync(`mkdir ${name}/src/layout/header`);
  execSync(`mkdir ${name}/src/layout/nav`);

  execSync(`mkdir ${name}/src/pages`);
  execSync(`mkdir ${name}/src/pages/main`);
  for(let i=0;i<pageNum;i++){
    execSync(`mkdir ${name}/src/pages/page${i+1}`);
  }

  execSync(`mkdir ${name}/src/utils`);
  execSync(`mkdir ${name}/src/hooks`);

  execSync(`mkdir ${name}/src/asstes`);
  execSync(`mkdir ${name}/src/asstes/img`);
  execSync(`mkdir ${name}/src/asstes/css`);

  if (typescript) {
    execSync(`mkdir ${name}/types`);
  }
};
