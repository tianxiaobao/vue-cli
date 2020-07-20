module.exports = {
    // 环境
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jquery": true
    },
    // 使用的扩展库
    "extends": ["eslint:recommended", "plugin:vue/strongly-recommended"],
    // 全局变量
    "globals": {
        "$": true
    },
    // 解析器用于解析代码
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2018, //ES的版本
        "sourceType": "module"
    },
    // 插件
    "plugins": ['vue'],
    // 规则
    "rules": {
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
        "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
        "no-alert": process.env.NODE_ENV === "production" ? 2 : 0,
        "getter-return": 2, //强制 getter 函数中出现 return 语句
        "no-template-curly-in-string": 2, //禁止在常规字符串中出现模板字面量占位符语法
        "block-scoped-var": 2, //强制把变量的使用限制在其定义的作用域范围内
        "complexity": ["error", { "max": 3 }], //指定程序中允许的最大环路复杂度，针对 if, else 判断
        "default-case" :2, //要求 switch 语句中有 default 分支
        "no-else-return": 2, //禁止 if 语句中 return 语句之后有 else 块
        "no-empty-function": 2, //禁止出现空函数
        "no-eval": 2, //禁用 eval()
        "no-multi-spaces": 2, //禁止使用多个空格
        "no-self-compare": 2, //禁止自身比较
        "no-with": 2, //禁用 with 语句
        "require-await": 2, //禁止使用不带 await 表达式的 async 函数
        "comma-dangle": 2, //禁止末尾逗号
        "comma-spacing": 2, //强制在逗号后使用空格
        "comma-style": 2, //要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
        "func-call-spacing": 2, //禁止在函数标识符和其调用之间有空格
        "indent": ["error", 4], //使用四个空格缩进
        "no-tabs": 2, //禁用 tab
        "padded-blocks": ["error", "never"], //禁止块内填充空行
        "prefer-const": 2, //要求使用 const 声明那些声明后不再被修改的变量
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }], //强制在代码块中使用一致的大括号风格
        "key-spacing": 2, //强制在对象字面量的属性中键和值之间使用一致的间距
        "max-depth": ["error", 4], //强制 if 嵌套的最大深度
        "max-nested-callbacks": ["error", 3], //强制回调函数最大嵌套深度
        "no-lonely-if": 2, //禁止 if 作为唯一的语句出现在 else 语句中
        "no-whitespace-before-property": 2, //禁止属性前有空白
        "semi": 2, //要求使用分号
        "semi-style": 2, //分号的位置在最后
        'space-before-blocks': 2, //强制在块之前使用空格
        "space-in-parens": 2, //强制在圆括号不使用的空格
        "arrow-spacing": 2, //强制箭头函数的箭头前后有空格
        "no-duplicate-imports": 2, //禁止重复模块导入
        "no-var": 2, //要求使用 let 或 const 而不是 var
        "prefer-template": 2, //要求使用模板字面量而非字符串连接
        "vue/html-indent": ["error", 4, { //缩进样式
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }]
    }
};