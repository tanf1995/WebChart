const Koa = require('koa');
const app = new Koa();
const KoaBody = require('koa-body');
const routerHandler = require('./routes');
const crossDomain = require('./middleware/crossDomain');
const consoleReq = require('./middleware/consoleReq');
const permissionRouteControl = require('./middleware/permissionRouteControl');
const initSocket = require('./socket/socket');


//middleware
app.use(KoaBody());
app.use(crossDomain());
app.use(consoleReq());
const whiteRoutes = ['/login', '/register', '/media', '/socket.io'];
app.use(permissionRouteControl(whiteRoutes));

// socket
initSocket(app);

// router
routerHandler(app);

app.listen(8080, () => {
    console.clear();
    console.log("server is running in port 8080\n")
});