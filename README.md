`npm run dev`
本地开发

`npm run dev`
本地开发

`npm run test`
测试环境

`npm run build`
线上环境

`npm run report`
查看上线文件打包大小

## 目录规范 ##

        project_name
    ├──  src
    ├    ├── api                            // 接口文件
    ├    ├── assets                         // 资源文件
    ├    ├── http
    ├    |   ├── config.js                  // 不同环境的api配置
    ├    |   ├── index.js                   // 封装axios，可自己配置拦截器
    ├    ├── router                         // 路由文件
    ├    |   ├── index.js  
    ├    |   ├── routes.js                  // 路由配置
    ├    ├── store
    ├    |   ├── index.js                   // vuex
    ├    ├── style
    ├    |   ├── reset.scss                 // css预设 
    ├    ├── views                          // 页面文件夹
    ├    |   ├── components                 // 所有页面公用的组件
    ├    |   ├   ├── menu                   // menu组件
    ├    |   ├── demo                       // demo文件夹，可删除
    ├    |   |   ├── index.vue              // 页面文件
    ├    |   |   ├── components             // 页面组件
    ├    ├── app.vue                        // 主页面
    ├    ├── main.js                        // 入口文件
    ├── .babelrc                            // babel配置文件
    ├── .eslintignore                       // eslint配置文件，不需要校验的文件
    ├── .eslintrc.js                        // eslint配置文件
    ├── .gitignore                          // git配置文件
    ├── favicon.ico                         // 网站图标
    ├── index.html                          // html文件
    ├── package.json                        // 依赖及命令
    ├── README.md                           // 开发说明


#### 不同环境配置
src/http/config.js