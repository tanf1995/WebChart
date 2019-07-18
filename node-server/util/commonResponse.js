const commonRes = {
    ok(ctx, errCode=0, msg="", data={}){
        ctx.response.status = 200;
        ctx.body = {
            errCode: errCode,
            msg: msg,
            data: data
        }
    },
    bad_request(ctx){
        ctx.response.status = 400;
        ctx.body = {
            errCode: 1
        }
    },
    server_error(ctx){
        ctx.response.status = 500;
        ctx.body = {
            errCode: 1
        }
    },
    unauthorized(ctx){
        ctx.response.status = 401;
        ctx.body = {
            errCode: 1
        }
    }
}

module.exports = commonRes;