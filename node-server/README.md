## 技术栈

- koa + mongodb

## 常用文档

- mongodb菜鸟教程 https://www.runoob.com/mongodb/mongodb-analyzing-queries.html

- koa https://demopark.github.io/koa-docs-Zh-CN/

- mongoose(5.0) http://www.mongoosejs.net/docs/guide.html

- ioredis https://github.com/luin/ioredis

## 功能点

### 用户认证 - JWT

- 登陆后返回token，token包含过期时间（如7天），保存至cookie

- 发送请求到服务器，服务器判断token是否存在，

    - 不存在则返回身份过期，前端跳转至登陆页

    - token存在

        - token过期， 返回身份过期

        - token未过期

            - 据过期时间超过1天，正常通过

            - 据过期时间不超过1天，更新token返回

    ***保存最新的token至redis， 过滤掉其他token***