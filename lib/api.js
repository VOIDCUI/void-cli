const axios = require("axios");

// 拦截全局请求响应
axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    console.log(err, "err");
  }
);

/**
 * 获取模板
 * @returns Promise
 */
async function getRepoList() {
  return axios.get("https://api.github.com/orgs/void-cli/repos");
}

module.exports = {
	getRepoList,
};
