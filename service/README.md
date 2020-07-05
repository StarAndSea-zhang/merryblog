# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
- Egg.js 2.x 
- egg-sequelize 管理数据库 [务必阅读其使用文档](https://demopark.github.io/sequelize-docs-Zh-CN/)
# 接口采用RESTFUL规范
- put 增
- get 查询数据
- delete 删除
- post 改
# 文章相关接口
## 创建文章
链接 admin/article/create

请求方式 POST

参数
~~~
    title: string,
    introduce: string,
    content:string,
    createTime:string,
    typeId: number,
    type: string,
~~~

返回
~~~
    title: string,
    introduce: string,
    content:string,
    createTime:string,
    typeId: number,
    type: string,
~~~
## 文章列表
链接 admin/article/list

请求方式 GET

参数 

返回
## 删除文章
链接

请求方式 POST

参数

返回
