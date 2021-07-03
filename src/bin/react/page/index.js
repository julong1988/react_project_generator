const path = require("path");
const { Input } = require("enquirer");
const mkdir = require("./mkdir");
const generatorBaseFile = require("./generatorBaseFile");
const isDirectory = require("../../../utils/isDirectory");

module.exports = async (options) => {
  options.typescript = isDirectory(`${process.cwd()}/types`);

  const dirName = await new Input({
    name: "페이지",
    message: "페이지명을 입력해주세요.",
    initial: 'sample',
  }).run();

  if(isDirectory(`./src/pages/${dirName}`)){
    console.log('해당 페이지가 존재합니다.');
    process.exit();
  }

  mkdir(options, dirName);
  generatorBaseFile(options, dirName);
};
