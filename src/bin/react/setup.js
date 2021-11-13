const { Input, Select, Toggle, NumberPrompt } = require("enquirer");
const chalk = require("chalk");
const terminalLink = require("terminal-link");
const argv = require("minimist")(process.argv.slice(2));
const { installConfig, command } = require("./config");
const isDirectory = require("../../utils/isDirectory");

// stats.isFile()
// stats.isDirectory()
// process.cwd() - 执行cli 目录
// console.log(module.path)

console.log(terminalLink("github - ", "https://github.com/jl917"));

if (argv._[0] && !command.includes(argv._[0])) {
  console.log(chalk.red("지원하지 않는 명령입니다."));
  console.log(chalk.blue("키워드를 확인해주세요."));
  console.log(command);
  process.exit();
}

const run = async () => {
  if (!installConfig.type) {
    installConfig.type = await new Select({
      name: "type",
      message: "실행할 이벤트를 선택하세요.",
      choices: command.filter(e => e.length !== 1),
    }).run();
  }

  if (installConfig.type[0] === "i") {
    // step1
    installConfig.name = await new Input({
      name: "프로젝트 이름",
      message: "프로젝트 이름을 입력해주세요.",
      initial: installConfig.name,
    }).run();
    // step2
    installConfig.typescript = await new Toggle({
      message: "타입스크립트 사용여부?",
      initial: true,
      enabled: "Yes",
      disabled: "No",
    }).run();
    // step3
    installConfig.antd = await new Toggle({
      message: "ant Design 사용여부?",
      initial: true,
      enabled: "Yes",
      disabled: "No",
    }).run();
    // step4
    installConfig.pageNum = await new NumberPrompt({
      name: "페이지",
      message: "페이지 생성 개수",
      initial: 2,
    }).run();
  }
  if (isDirectory(`./${installConfig.name}`)) {
    if (
      (await new Input({
        name: "hasFolder",
        message: "폴더를 지우고 설치하시겠습니까? 폴더 복구는 불가능합니다.",
        initial: '원하시면 "yes"를 수동으로 입력하세요',
      }).run()) !== "yes"
    ) {
      process.exit();
    }
  }

  return installConfig;
};

module.exports = run;
