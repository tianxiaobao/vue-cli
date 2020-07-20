const WebpackMerge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const baseWebpackConfig = require("./webpack.base.config");
const utils = require("./utils");

module.exports = WebpackMerge(baseWebpackConfig, {
    // 构建环境
    mode: "production",
    // 性能提示
    performance: {
        hints: 'warning',
        maxEntrypointSize: 300000 //入口文件的最大体积，单位字节,300kb
    },
    // 插件
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:7].css',
            chunkFilename: 'static/css/[id].[contenthash:7].css'
        }),
        // 清空dist目录
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: utils.resolve("../dist/index.html"), // 生成路径，相对于output.path
            template: "index.html", // html模板
            inject: true, // script标签位于html文件的body底部
            hash: true, // 打包插入html的资源会加上hash
            showErrors: true, // 错误信息输出到html页面中
            favicon: './favicon.ico',
            minify: {
                removeComments: true, //去注释
                collapseWhitespace: true, //压缩空格
                removeAttributeQuotes: true //去除属性标签的引号
            }
        })
    ].concat(process.env.npm_config_report ? new BundleAnalyzerPlugin() : []),
    optimization: {
        splitChunks: {
            chunks: "all", // "initial" | "all"(推荐) | "async" (默认就是async)
            minSize: 30000, // 大于30k会被webpack进行拆包
            minChunks: 1, // 被引用次数大于等于这个次数进行拆分
            maxAsyncRequests: 5, // 最大异步请求数， 默认5
            maxInitialRequests : 3, // 最大初始化请求数，默认3
            automaticNameDelimiter: '~',// 打包分隔符
            name: true, // 打包后的名称，此选项可接收 function
            cacheGroups:{ // 这里开始设置缓存的 chunks
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin({})] // 压缩js与css
    }
});