const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const BASE_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(BASE_PATH,'build');
const SRC_PATH = path.resolve(BASE_PATH,'src');
const TEMPLATE_PATH = path.resolve(BASE_PATH,'templates');
// const env = process.env.NODE_ENV;

module.exports = {
    entry:{
        index:path.resolve(SRC_PATH,'./index/Index.jsx'),
        login:path.resolve(SRC_PATH,'./login/Login.jsx')
    },
    output:{
        path:BUILD_PATH,
        filename:'[name].js'
    },
    externals:{
        "react":"React",
        "react-dom":"ReactDOM",
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },{
                test:/\.scss$/,
                loaders:['style-loader','css-loader','sass-loader']
            },{
                test:/\.css$/,
                loaders:['style-loader','css-loader']
            },{
                test:/\.(.png|jpg|jpeg|gif|bmp)$/,
                loader:'url-loader'
            }
        ]
    },
    plugins:[
        // new webpack.optimize.UglifyJsPlugin({
        //     compress:{
        //         warnings:false
        //     }
        // }),
        new HtmlWebpackPlugin({
            title:'首页',
            template:path.resolve(TEMPLATE_PATH,'common.html'),
            chunks:['index'],
            filename:'index.html'
        }),
        new HtmlWebpackPlugin({
            title:'登录',
            template:path.resolve(TEMPLATE_PATH,'common.html'),
            chunks:['login'],
            filename:'login.html'
        })
    ]
}

