
// const path = require('path');//路径
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// // 配置生产环境
// const isProduction = process.env.NODE_DEV === "production";

// //引入文件
// function resolve(dir){
//     return path.join(__dirname,dir)
// }

// module.exports={
//     publicPath:'./',
//     outputDir:'dist',
//     lintOnSave:true,
//     devServer:{
//         compress:false,   //开启压缩
//         proxy:{
//             'api':{
//                 target:'http',   //跨域地址
//                 ws:true,
//                 changeOrigin:true,  //是否允许跨域
//                 pathRewrite:{
//                     'api':'/'
//                 }
//             }
//         }
//     },
//     // css相关配置
//     css:{
//         // 分离插件，开启会提升打包速度
//         extract:true,
//         // 用于开发人员定位问题，生产环境不需要，
//         sourcemap:false,
//         // css预处理器
//         loaderOptions:{
//             sass:{
//                 data:`
//                     @import "@/assets/common/index.scss"
//                 `
//             }
//         },
//         modules:false
//     },
//     //webpack相关配置
//     // 配置别名
//     chainWebpack:config =>{
//         config.resolve.alias
//         .set("@",resolve("src"))
//         .set("@img",resolve("src/assets/img"))
//         .set("@scss",resolve("src/assets/common"));
//         //判断是不是生产环境
//         if(isProduction){
//             // 删除预加载
//             config.plugins.delete('preload');
//             config.plugins.delete('prefetch');
//             // 代码压缩
//             config.optimization.minisize(true);
//             // 分割代码成块
//             config.optimization.splitChunks({
//                 chunks:"all"
//             })
            
//         }
//     },
//     //注入cdn
//     configureWebpack:config=>{
//         if(isProduction){
//             //注入cdn
//             //生产环境修改配置
//             config.plugins.push(
//                 new UglifyJsPlugin({
//                     //删除和打印
//                    uglifyOptions:{
//                        compress:{
//                            drop_debugger:true,
//                            drop_console:true
//                        }
//                    },
//                    sourceMap:false,
//                    //多进程并行运行提高打包速度
//                    parallel:true
//                 })
//             )
//         }else{
//             // 为其他环境做配置
//             //也可以为测试环境配置
//         }
//     },
//     // 生产环境是否生成SoureceMap
//     productionSourceMap : false,
//     //启用并行化 默认并发运行数（os）.cpus().length-1显著加速构建
//     parallel:require('os').cpus().length>1
// }