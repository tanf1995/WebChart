const commonRes = require('../util/commonResponse');

const strangers = router => {
    router.get('/strangers', async ctx => {
        console.log(ctx.request.current_user);
        commonRes.ok(ctx, "list")
    })
}

module.exports = {
    strangers
}