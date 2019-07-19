const commonRes = require('../util/commonResponse');

const strangers = router => {
    router.get('/strangers', async ctx => {
        const strangerList = await ctx.request.current_user.ret_strangers();
        const strangers = strangerList.map(stranger => ({
            username: stranger.username,
            id: stranger._id
        }))

        commonRes.ok(ctx, 0, "stranger list", {
            strangers: strangers
        })
    })
}

module.exports = {
    strangers
}