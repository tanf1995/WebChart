const commonRes = require('../util/commonResponse');
const path = require('path');
const fs = require('fs');


const avatarUpload = router => {
    router.post("/upload/img", async ctx => {
        let data = ctx.request.body.data;
        let suffix = ctx.request.body.suffix;
        let mediaPath = path.resolve(__dirname, "../media/avatars");
        let img_name = ctx.request.current_user.username + "." + suffix;

        try{
            let dataBuffer = new Buffer(data, 'base64');
            let avatarUrl = "/media/avatars/" + img_name;
            let current_user = ctx.request.current_user;

            fs.writeFileSync(`${mediaPath}/${img_name}`, dataBuffer);
            current_user.set({avatarUrl: avatarUrl})
            await current_user.save();

            commonRes.ok(ctx, 0, "uploade success", {
                avatarUrl: avatarUrl
            });
        }catch(err){
            console.log(err);
            commonRes.server_error(ctx);
        }
    })
}

module.exports = {
    avatarUpload
}