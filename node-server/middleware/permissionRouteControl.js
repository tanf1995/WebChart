const dbConfig = require('../models/dbConfig');
const jwt = require('jsonwebtoken');
const commonReq = require('../util/commonResponse');
const UserModel = require('../models/User');
const redisClient = require('../models/redis');


const permissionRouteControl = (whiteRoutes) => {
    return async (ctx, next) => {
        if(ctx.request.method === 'OPTIONS'){
            return await next();
        }

        if(whiteRoutes.every(path => ctx.request.url.indexOf(path) !== 0)){
            const token = ctx.request.headers["authorization"];

            try{
                const decode = await jwt.verify(token, dbConfig.privateKey);
                const expires = Number(decode.expires);
                const current_time = (new Date()).getTime();

                // redis中取最后保存的token验证
                const redis_token = await redisClient.hget("userTokens", decode.username);
                if(redis_token !== token){
                    return commonReq.unauthorized(ctx);
                }

                if(expires - current_time < 0){
                    // 过期
                    return commonReq.unauthorized(ctx);
                }else{
                    const q_user = await UserModel.findOne({username: decode.username});

                    if(expires - current_time <= 24*60*60*1000){
                        ctx.body.token = q_user.createToken();
                    }
                    ctx.request.current_user = q_user;
                }
                await next();
            }catch(err){
                return commonReq.unauthorized(ctx);
            }
        }else{
            await next();
        }
    }
}

module.exports = permissionRouteControl;