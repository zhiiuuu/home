cnpm i

npm run dev

npm run build

```
.
├── api // http请求相关配置
│   ├── 模块文件夹 // 配置具体请求路径
│   ├── base.js // 基本请求方法
│   |── cache.js // 缓存处理
│   |── config.js // axios全局配置项
│   └── install.js // 打到全局变量的请求方法
│
├── build // webpack配置
│   |── webpack.common.js // 公共配置
│   |── webpack.dev.js // 开发配置
│   └── webpack.prod.js // 生产配置
│
├── src
│   ├── images // 图片资源
│   │
│   ├── js // 单个页面用到的相应js,文件名与views文件夹下的相对应pug同名
│   │
│   ├── pages // 相对应的vue页面
│   │    ├── 模块页面文件夹
│   │    └── 公共组件.vue
│   │
│   └── scss // 样式文件夹
│       ├── 模块文件.scss // 
│       └── common.scss // 全局sass变量
|
├── store // vuex
│   |──modules // 模块文件夹
│   |── plugins // 插件
│   ── index.js
|
├── views // pug文件夹
│   |──layers // 公共pug
│   └── 单个页面pug
│   
├── app.js // 入口文件
│
└── app.vue // 入口vue
```

