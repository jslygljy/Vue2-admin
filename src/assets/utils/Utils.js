/**
 * 通用处理工具
 */

// import wx from '../plugins/wx';
import Vue from 'vue';
/**
 * 注册Jssdk
 * @returns {object}
 */
export function registerjssdk() {
    return new Promise((resolve, reject) => {
        getConfig(config => {
            //window.location.href
            gettoken().then(function(token) {
                Vue.http.get(config.jssdk.wxsdk + '?token=' + token + '&url=' + window.location.href).then(res => {
                    if (res.body.errcode === 0) {
                        resolve(res.body);
                    }
                }, err => {
                    reject()
                })
            })
        })
    });
}
/**
 * 微信js sdk 获取当前位置
 * @returns {string}
 */
export function getLocation() {
    return new Promise((resolve, reject) => {
        getConfig(config => {
            registerjssdk().then(res => {
                wx.config({
                        //必须传入，不然没办法调未正式发布的jsapi
                        beta: true,
                        debug: false,
                        appId: res.data.appid,
                        timestamp: res.data.timestamp,
                        nonceStr: res.data.nonceStr,
                        signature: res.data.signature,
                        jsApiList: [
                            'getLocation'
                        ]
                    })
                    //wx.config失败
                wx.error(function(res) {
                    //alert(res)
                });
                wx.ready(function() {
                    wx.getLocation({
                        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                        success: function(body) {
                            var latitude = body.latitude; // 纬度，浮点数，范围为90 ~ -90
                            var longitude = body.longitude; // 经度，浮点数，范围为180 ~ -180。
                            Vue.http.jsonp('http://api.map.baidu.com/geocoder/v2/?ak=' + config.jssdk.bdsdk + '&callback=renderReverse&location=' + latitude + ',' + longitude + '&output=json&pois=0&get_poi=1').then(info => {
                                resolve(info.body.result.addressComponent.district + info.body.result.addressComponent.street)
                            });
                        },
                        cancel: function(res) {
                            alert('用户拒绝授权获取地理位置')
                            resolve({ lat: 0, lng: 0 });
                        },
                        error: function(res) {
                            alert('获取用户位置失败，请至开阔的地方再试！')
                        }
                    });
                })
            })
        })
    })
}
/**
 * 微信js sdk 获取经纬度
 * @returns {object}
 */
export function getlat() {
    return new Promise((resolve, reject) => {
        getConfig(config => {
            registerjssdk().then(res => {
                wx.config({
                        //必须传入，不然没办法调未正式发布的jsapi
                        beta: true,
                        debug: false,
                        appId: res.data.appid,
                        timestamp: res.data.timestamp,
                        nonceStr: res.data.nonceStr,
                        signature: res.data.signature,
                        jsApiList: [
                            'getLocation'
                        ]
                    })
                    //wx.config失败
                wx.error(function(res) {
                    alert(res)
                });
                wx.ready(function() {
                    wx.getLocation({
                        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                        success: function(body) {
                            resolve({ lat: body.latitude, lng: body.longitude })
                        },
                        cancel: function(res) {
                            alert('用户拒绝授权获取地理位置')
                            resolve({ lat: 0, lng: 0 });
                        },
                        error: function(res) {
                            alert('获取用户位置失败，请至开阔的地方再试！')
                        }
                    });
                })
            })
        })
    })
}


/**
 * 取地址栏参数
 */
export function getUrlParams(name) {
    var reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)(&|$)", "i");
    var param = window.location.href.substring(1).match(reg);
    if (param !== null) {
        return param[2];
    } else {
        return undefined;
    }
};

/**
 * 生成模版文件，生成后的html文件头部包含样式信息，不会影响其他组建样式
 */
export function generatorTemplate(style, html) {
    return '<style>' + style + '</style>' + html;
}



/**
 * 动态加载script文件
 * @param src
 * @param onload
 */
export function javascriptLoader(src, onload) {
    let _script = document.createElement('script');
    _script.setAttribute('src', src);
    _script.setAttribute('type', 'text/javascript');
    _script.onload = onload;
    document.head.appendChild(_script);
}
/**
 * 获取配置文件
 * @param cb
 */
export function getConfig(cb) {
    require.ensure([], require => {
        cb(require('src/config'));
    }, 'config');
}
/**
 * 获取sessionStorage
 * @param key
 * @return cb
 */
export function getItem(key) {
    var _result = JSON.parse(sessionStorage.getItem(key));
    return _result ? _result : false; //如果值不存在则返回null
}
/**
 * 设置sessionStorage
 * @param key
 * @return cb
 */
export function setItem(key, val) {
    sessionStorage.setItem(key, JSON.stringify(val));
}
/**
 * 获取token
 * @param cb
 */
export function gettoken() {
    return new Promise((resolve, reject) => {
        let _result = getItem('token'); //从本地存储中获取保存的值
        if (!!_result) {
            resolve(_result);
        } else {
            getConfig(config => {
                Vue.http.get(config.token.gettoken + '/' + config.appid + '/' + config.appserect).then(res => {
                    res = res.body;
                    if (res.errcode === 0) {
                        setItem('token', res.data.token);
                        //    获取到token后，监听所有的ajax请求，设置请求头
                        resolve(res.data.token);
                    } else {
                        reject()
                    }
                }, err => {
                    console.log(2)
                    console.log(err);
                });
            })
        }
    });

}

/**
 * 计算分页
 * @type {number}
 */
const pageSize = 13;
export function calcPage(pageIndex, datas, totalCount) {
    return {
        datas: datas,
        hasMore: parseInt(totalCount) > (parseInt(pageIndex) - 1) * pageSize + datas.length
    };
}

/**
 * 判断是否是微信打开的页面
 * @returns {boolean}
 */
export function isInWeChat() {
    return /MicroMessenger/i.test(navigator.userAgent.toLowerCase());
}