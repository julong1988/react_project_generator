const { type } = require("os");

module.exports = type === "Windows_NT";
