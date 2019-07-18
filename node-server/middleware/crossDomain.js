const crossDomain = () => {
    return async (ctx, next) => {
        ctx.response.set({
            //指定允许其他域名访问, 一般用法（*，指定域，动态设置）
            'Access-Control-Allow-Origin': '*',
            //是否允许后续请求携带认证信息（cookies）,该值只能是true,否则不返回
            'Access-Control-Allow-Credentials': true,
            //预检结果缓存时间,也就是上面说到的缓存啦
            'Access-Control-Max-Age': '1800',
            //允许的请求类型
            'Access-Control-Allow-Methods': "*",
            //允许的请求头字段
            'Access-Control-Allow-Headers': '*',
            "Content-Type": "application/json;charset=utf-8"
        });

        await next();
    }
}

module.exports = crossDomain;