import Vue from 'vue'
import {gettoken} from 'Utils';
/*
vue-resource 的api
get(url, [options])
head(url, [options])
delete(url, [options])
jsonp(url, [options])
post(url, [body], [options])
put(url, [body], [options])
patch(url, [body], [options]
*/
export default {
  get(){
    return handler('get', ...arguments)
  },
  head(){
    return handler('head', ...arguments)
  },
  delete(){
    return handler('delete', ...arguments)
  },
  jsonp(){
    return handler('jsonp', ...arguments)
  },
  post(){
    return handler('post', ...arguments)
  },
  put(){
    return handler('put', ...arguments)
  },
  patch(){
    return handler('patch', ...arguments)
  }
}

// 为了减少复杂度，body参数要放在 options，不支持单独的参数
function handler(method, url, options, otherOptions) {
  return new Promise((resolve, reject) => {
    if(['get', 'head', 'delete', 'jsonp', 'post', 'put', 'patch'].indexOf(method) === -1) {
      reject('unsuport methods')
      return
    }
    gettoken().then(function(token){

      Vue.http[method](url+'?token='+token, options).then(
          response => successHander(resolve, reject, response, otherOptions),
          () => errorHandler(reject)
      )
    },function(err){
      console.log(err)
    })
  })
}

function successHander(resolve, reject, response, otherOptions) {
  otherOptions = Object.assign({}, {showError: true}, otherOptions)
  resolve(response.body, response)

}

function errorHandler(reject) {
  reject()
}
