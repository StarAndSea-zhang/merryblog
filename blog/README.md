This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
#
#之前的无效配置文件

~~~
// const withTypescript = require("@zeit/next-typescript");
// const withCss = require("@zeit/next-css");
// const withSass = require('@zeit/next-sass')
// const withLess = require('@zeit/next-less')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
//
// module.exports =
//     // withTypescript(
//         withCss(
//             withSass({
//                 cssModules: true,
//                 ...withLess({
//                     dir: "src",
//                     distDir: "../build",
//                     cssLoaderOptions: {
//                         importLoaders: 1,
//                         localIdentName: "[folder]_[local]___[hash:base64:5]",
//                     },
//                     lessLoaderOptions: {
//                         javascriptEnabled: true
//                     },
//                     webpack(config, options) {
//                         if (options.isServer) {
//                             // config.plugins.push(new ForkTsCheckerWebpackPlugin({
//                             //     tsconfig: './tsconfig.json',
//                             // }))
//
//                             const antStyles = /antd\/.*?\/style.*?/
//                             const origExternals = [...config.externals]
//                             config.externals = [
//                                 (context, request, callback) => {
//                                     if (request.match(antStyles)) return callback()
//                                     if (typeof origExternals[0] === 'function') {
//                                         origExternals[0](context, request, callback)
//                                     } else {
//                                         callback()
//                                     }
//                                 },
//                                 ...(typeof origExternals[0] === 'function' ? [] : origExternals),
//                             ]
//
//                             config.module.rules.unshift({
//                                 test: antStyles,
//                                 use: 'null-loader',
//                             })
//                         }
//
//                         return config;
//                     }
//                 })
//             })
//         )
//     // );

// const withLessExcludeAntd = require("./next-less.config.js")
//
// // choose your own modifyVars
// // const modifyVars = require("./utils/modifyVars")
//
// if (typeof require !== 'undefined') {
//     require.extensions['.less'] = (file) => {}
// }
//
// module.exports = withLessExcludeAntd({
//     cssModules: true,
//     cssLoaderOptions: {
//         importLoaders: 1,
//         localIdentName: "[local]___[hash:base64:5]",
//     },
//     lessLoaderOptions: {
//         javascriptEnabled: true,
//         // modifyVars: modifyVars
//     }
// })
~~~

#项目配置过程的遇到的问题
~~~
object { lessOptions?, prependData?, appendData?, sourceMap? }针对less-loader@5.0.0以上的版本，改为loader@5.0.0或以下版本可使用lessLoaderOptions配置
~~~
#别名路径配置
安装babel-plugin-module-resolver

~~~
[
      "module-resolver",
      {
        "alias": {
          "@/components": "./components",
          "@/pages": "./pages",
          "@/public": "./public",
          "@/utils": "./utils"
        }
      }
    ]
~~~
# 配置css引用图片路径的问题
webpack打包html里面img后src为“[object Module]”问题
~~~
但是如果使用"file-loader": "^4.2.0"或者"file-loader": "^2.0.0"却可以正常打包

后来发现file-loader在新版本中esModule默认为true，因此手动设置为false
~~~

#技术栈
##博客主题样式参考
https://sariay.github.io/
##next.js
https://nextjs.frontendx.cn/docs/
##markdown-navbar
https://github.com/parksben/markdown-navbar
##react-markdown
## egg.js
https://eggjs.org/zh-cn/intro/egg-and-koa.html
