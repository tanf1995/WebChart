## 运行

### 服务端

- 安装 mongodb

- 安装 redis

- cd /node-server && node app.js

### 客户端

- cd /web-chat && yarn start

### 修改服务端地址

> web-chat/src/request/index.ts

	...
	if(process.env.NODE_ENV === 'development'){
		- baseUrl = "http://192.168.0.103:8080"
		+ baseUrl = "// "http://服务端运行的地址:8080"
	}
	...


## 功能

- [x] 用户登陆、注册

- [x] 个人信息修改
