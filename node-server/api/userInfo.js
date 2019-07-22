const commonReq = require('../util/commonResponse');
const UserModel = require('../models/User');


const userInfo = router => {
    router.get("/userInfo", async ctx => {
        let current_user = ctx.request.current_user;
        const q_username  = ctx.request.query.username;

        if(q_username){
            try{
                current_user = await UserModel.findOne({username: q_username});
            }catch(err){
                console.log(err);
                return commonRes.server_error(ctx);
            }
        }

        commonReq.ok(ctx, 0, "ok", {
            username: current_user.username,
            nickname: current_user.nickname || current_user.username,
            description: current_user.description,
            avatarUrl: current_user.avatarUrl
        });
    })

    router.post("/userInfo", async ctx => {
        let current_user = ctx.request.current_user;

        current_user.set(ctx.request.body);
        try{
            const rel = await current_user.save();

            commonReq.ok(ctx, 0, "ok", current_user);
        }catch(err){
            console.log(err);
            commonReq.bad_request(ctx);
        }
    })
}

module.exports = userInfo;