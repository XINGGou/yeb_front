let proxyObj = {}

proxyObj['/'] = {
    //websocket
    ws:false,
    //目标地址(后端)
    target:'http://localhost:8081',
    //发送请求host会被设置target
    changeOrigin: true,
    //不重写请求地址
    pathRewrite:{
        '^/':'/'
    }
}

//配置请求转发解决前后端跨域问题
module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy: proxyObj
    }
}