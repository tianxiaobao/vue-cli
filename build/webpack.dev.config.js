const WebpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.config");

module.exports = WebpackMerge(baseWebpackConfig, {
    // 构建环境
    mode: "development",
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", // 生成路径，相对于output.path
            template: "index.html", // html模板
            inject: true, // script标签位于html文件的body底部
            favicon: './favicon.ico'
        })
    ],
    // 开发环境服务配置
    devServer: {
        // host: "0.0.0.0", // 可通过机器IP访问
        port: "8081", // 端口
        open: 'Chrome', // 默认打开浏览器
        hot: true, // 热加载
        historyApiFallback: true, // 当找不到路径的时候，默认加载index.html文件
        contentBase: false, // 告诉服务器从哪里提供内容，只有在你想要提供静态文件时才需要
        compress: true, // 启用gzip压缩：
        publicPath: "/", // 访问资源加前缀
        proxy: {
            // 接口请求代理
        }
    },
    // 开发环境调试代码
    devtool: "cheap-module-eval-source-map"
});