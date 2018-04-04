import axios from 'axios';
import qs from 'qs';

/*
  使用axios
*/
const instance = axios.create({
  timeout: 6000
});

/*
  get请求，参数：params
*/
export const get = (url, params) => {
  let urlStr = url;
  if (params) {
    urlStr += '?';
    urlStr += qs.stringify(params);
    // Object.keys(params).forEach(
    //   item => (urlStr += `&${item}=${JSON.stringify(params[item])}`)
    // );
  }
  return instance.get(urlStr).then(response => response);
};

/*
  post请求，
  axios默认提交是使用application/json，要以application / x-www-form-urlencoded格式发送数据，需要使用qs.stringify()
  参数：params， 
  请求头：application/x-www-form-urlencoded
*/
export const post = (url, params) =>
  instance.post(url, qs.stringify(params)).then(response => response);

/*
  使用fetch
*/
// export const get = (url, params) => {
//   let urlStr = url;
//   if (params) {
//     urlStr += '?';
//     urlStr += qs.stringify(params);
//     // Object.keys(params).forEach(
//     //   item => (urlStr += `&${item}=${JSON.stringify(params[item])}`)
//     // );
//   }
//   return fetch(urlStr).then(response => response);
// };

// export const post = (url, params) =>
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: qs.stringify(params)
//   }).then(response => response);
