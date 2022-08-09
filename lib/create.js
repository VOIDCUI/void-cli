/*
 * @Author       : cuiguiming
 * @Date         : 2022-08-09 16:28:44
 * @LastEditors  : 崔桂铭
 * @LastEditTime : 2022-08-09 17:29:11
 * @Description  : Description
 */

const path = require("path");
const chalk = require("chalk");
const inquirer = require("inquirer");
const Creator = require("./Creator");
const fs = require("fs-extra");

module.exports = async function (projectName, options) {
  if (!/^[a-z\d-]+$/.test(projectName)) {
    console.log("项目名称只能由小写字母，数字，横杆组成");
    return;
  }
  // 获取当前工作目录
  const cwd = process.cwd();
  // 拼接得到项目目录
  const targetDirectory = path.join(cwd, projectName);
  // 判断目录是否存在
  if (fs.existsSync(targetDirectory)) {
    console.log(`${projectName} 目录已经存在`);
    return;
  }

  // 创建项目
  const creator = new Creator(projectName, targetDirectory);

  creator.create();
};
