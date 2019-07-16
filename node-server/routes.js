const Router = require('koa-router');
const router = new Router();
const userIdentity = require('./api/userIdentity');


// routes
userIdentity.register(router);
userIdentity.login(router);


const routesHandler = app => {
    app
        .use(router.routes())
        .use(router.allowedMethods())
}

module.exports = routesHandler;