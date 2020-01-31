import axios from 'axios'

//超时请求
axios.defaults.timeout = 1000000;
//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  return response
}, err => {
  if (err && err.response) {
    app.error(err.response.status);
  } else {
    err.message = "连接到服务器失败"
  }
  return Promise.reject(err.response);
});

export default {
  //get请求
  get(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param,
      }).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getJson(url) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        dataType: "json",
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
