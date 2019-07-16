const register = router => {
    router.post('/register', async ctx => {
        ctx.body = JSON.stringify({
            status: "ok"
        })
    })
}

const login = router => {
    router.post('/login', async ctx => {
        console.log(ctx.request.body);
        ctx.body = JSON.stringify({
            status: "ok"
        })
    })
}

module.exports = {
    register,
    login
}