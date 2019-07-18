const test = router => {
    router.get('/test', async ctx => {
        ctx.body = {
            data: {
                li: [
                    "t", "f", "j"
                ]
            }
        }
    })
}

module.exports = test;