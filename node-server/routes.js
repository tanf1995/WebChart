const Router = require('koa-router');
const router = new Router();
const userIdentity = require('./api/userIdentity');
const test = require('./api/test');
const stranger = require('./api/stranger');


// routes
userIdentity.register(router);
userIdentity.login(router);
userIdentity.logout(router);
stranger.strangers(router);
test(router);


// 处理 option
router.options("*", async ctx => {
    ctx.response.status = 200;
    ctx.body = "ok";
})

const routesHandler = app => {
    app
        .use(router.routes())
        .use(router.allowedMethods())
}

module.exports = routesHandler;