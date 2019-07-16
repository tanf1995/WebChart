const consoleReq = () => {
    return async (ctx, next) => {
        const date = new Date();
        const formatTime = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
        
        console.log(`${formatTime} ${ctx.request.method} ${ctx.request.url}`);
        await next();
        console.log("spend time: " + ((new Date).valueOf() - date.valueOf()) + 'ms');
    }
}

module.exports = consoleReq;