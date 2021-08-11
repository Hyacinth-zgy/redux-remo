import axios from "axios";
import qs from "qs";
import { config } from "yargs";

// 01----------区分接口地址
switch (process.env.NODE_ENV) {
  case "production":
    axios.defaults.baseURL = "http://localhost:3200";
    break;
  case "test":
    axios.defaults.baseURL = "http://localhost:3200";
    break;
  case "development":
    axios.defaults.baseURL = "http://localhost:3200";
    break;
  default:
    axios.defaults.baseURL = "http://localhost:3200";
}

// 02----------设置超时时间和跨域是否允许携带凭证
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

// 03----------设置请求的数据格式
// application/json
axios.defaults.headers["Content-Type"] = "application/json";
// x-www-form-urlencoded   xxx=aaa&xxx=bbb&xxx=ccc
// axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

// 当服务器数据需要 x-www-form-urlencoded 时，启动下面代码
// axios.defaults.transformRequest = (data) => {
//   return qs.stringify(data);
// };

// 04----------设置请求拦截器
// 客户端请求——>[请求拦截器]——>服务器
// TOKEN校验（JWT） 接受服务器返回的token，存储到vuex/redux/localStorage
axios.interceptors.request.use(
  (config) => {
    // 携带token
    let token = localStorage.getItem("token");
    token && (axios.defaults.headers.common["Authorization"] = token);
    return config;
  },
  (error) => {
    // 拦截失败，error中包含拦截错误信息
    return Promise.reject(error);
  }
);

// 05----------设置相应成功状态码，认为请求接口成功，一般情况不需要配置，合理运用
axios.defaults.validateStatus = (status) => {
  // 自定义响应成功的状态码
  return /^(2|3)\d{2}$/.test(status);
};

// 06----------设置响应拦截器
// 服务器返回信息——> [响应拦截器]——>客户端
axios.interceptors.response.use(
  (response) => {
    // 直接返回主体内容
    return response.data;
  },
  (error) => {
    let { response } = error;
    if (response) {
      // 服务器有结果返回
      // 以下状态码为举例状态码
      switch (response.status) {
        case 401:
          // 当前请求需要用户认证（一般是未登录）
          // 处理相关业务逻辑
          break;
        case 403:
          // 服务器已经理解请求，但是拒绝执行它（一般是TOKEN过期）
          localStorage.removeItem("token");
          // 跳转到登录页，处理相关业务逻辑
          break;
        case 404:
          // 找不到页面
          break;
        default:
          Promise.reject(new Error("unkonwn error"));
      }
    } else {
      // 服务器哦没有结果返回
      if (!window.navigator.onLine) {
        // 断网
        // 处理断网逻辑 可设计一个断网页面
        return;
      }
      return Promise.reject(error);
    }
  }
);

export default axios;
