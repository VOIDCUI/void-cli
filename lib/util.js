/*
 * @Author       : cuiguiming
 * @Date         : 2022-08-09 16:46:52
 * @LastEditors  : VOIDCUI
 * @LastEditTime : 2023-04-28 16:23:44
 * @Description  : Description
 */

const ora = require("ora");
/**
 * 睡觉函数
 * @param {Number} n 睡眠时间
 */
function sleep(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n);
  });
}

/**
 * loading加载效果
 * @param {String} message 加载信息
 * @param {Function} fn 加载函数
 * @param {List} args fn 函数执行的参数
 * @returns 异步调用返回值
 */
async function loading(message, fn, ...args) {
   // 使用 ora 初始化，传入提示信息 message
  const spinner = ora(message);
   // 开始加载动画
  spinner.start();
  try {
	 // 执行传入方法 fn
    let executeRes = await fn(...args);
    spinner.succeed();
    return executeRes;
  } catch (error) {
    spinner.fail("request fail, reTrying", error);
    await sleep(1000);
	// 失败重试
    return loading(message, fn, ...args);
  }
}

module.exports = {
  loading,
};
