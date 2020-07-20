const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require("webpack");
const path = require("path");
const px2rem = require("postcss-px2rem-exclude");
const devMode = process.env.API_ENV === 'dev';

module.exports = {
    // 入口文件
    entry: {
        app: ["@babel/polyfill", "./src/main"], // es新语法支持
        vendor: ['vue', 'vue-router', 'vuex'] // 公共文件提取
    },
    // 出口路径
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "static/js/[name].[hash].js", // 每次构建，唯一hash
        publicPath: "/" // 打包后，资源的访问路径前缀
    },
    // 解决html-webpack-plugin插件Entrypoint undefined = index.html的问题
    stats: {
        children: false
    },
    // 模块
    module: {
        rules:[
            {
                test: /.vue$/, 
                loader: 'vue-loader'
            },
            {
                test: /\.(js|jsx)$/, // 匹配js和jsx文件
                exclude: /node_modules/, // 屏蔽不需要处理的文件
                loader: "babel-loader?cacheDirectory=true" // loader的名称
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader, // 提取css
                        options: {
                            publicPath: '/'
                        }
                    },
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('autoprefixer')(),
                                px2rem({
                                    remUnit: 75,
                                    exclude: /node_modules/i
                                })
                            ]
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // 小于10K的以base64的方式引入，大于10K的以路径的方式导入
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // 小于10K的以base64的方式引入，大于10K的以路径的方式导入
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    // 插件
    plugins: [
        // 配合cross-dev使用
        new webpack.DefinePlugin({
            'process.env.API_ENV': JSON.stringify(process.env.API_ENV)
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: [".js", ".vue", ".json", ".scss", ".css"], // 解析扩展（当找不到改文件时，会尝试加入这些后缀继续寻找文件）
        alias: {
            "@": path.join(__dirname, "..", "src"), // 在项目中使用@符号代替src路径
            "common": path.join(__dirname, "..", "src/common")
        }
    }
};