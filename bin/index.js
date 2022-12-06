#! /usr/bin/env node
const path = require("path");
const program = require("commander");
const chalk = require("chalk");
const inquirer = require("inquirer");
const ora = require("ora");
const validTypes = ["react", "vue"];
const fs = require("fs-extra");
const figlet = require('figlet');

program
  .command("create <project-name>") // 增加创建指令
  .description("create a new project") // 添加描述信息
  .action((projectName, cmd) => {
    // 处理用户输入create 指令附加的参数
    require("../lib/create")(projectName, cmd);
  });

program
  .command("config [value]")
  .description("inspect and modify the config")
  .option("-g, --get <key>", "get value by key")
  .option("-s, --set <key> <value>", "set option[key] is value")
  .option("-d, --delete <key>", "delete option by key")
  .action((value, keys) => {
    console.log(value, keys);
  });

program.on("--help", function () {
  console.log(
    "\r\n" +
      figlet.textSync("voidcli", {
        font: "3D-ASCII",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      })
  );
  // 前后两个空行调整格式，更舒适
  console.log();
  console.log(
    `Run ${chalk.cyan(
      "void-cli <command> --help"
    )} for detailed usage of given command.`
  );
  console.log();
});

program
  .name("void-cli")
  .usage(`<command> [option]`)
  .version(`void-cli ${require("../package.json").version}`);

// 解析用户执行时输入的参数
// process.argv 是 nodejs 提供的属性
// npm run server --port 3000
// 后面的 --port 3000 就是用户输入的参数
program.parse(process.argv);
