import axios, { AxiosRequestConfig } from "axios";
import { url } from "inspector";
// type methold = 'GET' | 'POST' | 'PUT' | 'DELETE';
// interface config extends AxiosRequestConfig {
//   url: string,
//   method: methold,
//   data: any,
//   params: any
// };

// 请求取消
type requstCancel = Function | null | undefined;
let cancel: requstCancel;

setDedault();
setinterceptors();
// export default function requst({
//   url: string,
//   method = 'GET',
//   data,
//   params
// }: AxiosRequestConfig) {
//   axios({
//     url,
//     method,
//     data,
//     params
//   })
// }

function setDedault() {
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
  axios.defaults.timeout = 10000;
  axios.defaults.withCredentials = true;
  axios.defaults.headers["Content-Type"] = "application/json";
}

function setinterceptors() {
  axios.interceptors.request.use(
    (config) => {
      if (cancel) {
        cancel("请求被取消了");
      }
      config.cancelToken = new axios.CancelToken((c) => {
        cancel = c;
      });
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (axios.isCancel(error)) {
      } else {
        cancel = null;
        return Promise.reject(error);
      }
    }
  );
}
