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
	let instance = axios.create({
		- baseURL: "http://172.18.188.195:8080",
		baseURL: // "http://服务端运行的地址:8080
		headers: {
			"Content-Type": 'application/json',
			"Authorization": userStore.user.token
		}
	});
	...