/**
 * API接口地址
 */
  // const host = 'http://221.224.33.139:3002';//测试地址
var host = 'http://118.178.224.171:3000';//线上地址
var configapi ={
  appid:'123',
  appserect:'123',
  // 获取鉴权身份token码
  token: {
      gettoken: host +'/authenticate'
  }
};
