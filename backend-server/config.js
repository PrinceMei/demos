
// 所有的配置

'use strict';

let config = {

  // 服务端 host
  host: 'http://localhost:3000',
  // web 开发环境的 host
  webHost: 'http://localhost:8090',

  // 跨域白名单
  whiteOrigins: [
    'http://localhost:8090',
    'http://localhost:3000',
    // 以下两个是在 LeanCloud 中配置的 host，xxx 替换为自己的域名
    'http://stg-demos.leanapp.cn',
    'http://demos.leanapp.cn'
  ],

  // 线上域名
  domain: 'demos.leanapp.cn',

  //测试域名
  webDomain: 'localhost',

  //github
  'client_id': '7eb267da27e15f2717b7',
  'client_secret': 'ea21336e317c9d5eb309e1bed28a000feb9e0273',
  'scope': ['user'],

};

// 判断环境
switch (process.env.LC_APP_ENV) {

  // 当前环境为线上测试环境
  case 'stage':
    config.host = 'http://stg-demos.leanapp.cn';
    config.webHost = 'http://stg-demos.leanapp.cn';
  break;

  // 当前环境为线上正式运行的环境
  case 'production':
    config.host = 'http://demos.leanapp.cn';
    config.webHost = 'http://demos.leanapp.cn';
  break;
}

module.exports = config;