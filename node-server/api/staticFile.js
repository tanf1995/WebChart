const fs = require('fs');
const path = require('path');
const getMime = require("../util/mime");


const avatarResource = router => {
    router.get('/media/avatars/*', async ctx => {
        const resource = fs.readFileSync(path.join(process.cwd(), ctx.path));
        let data = Buffer.from(resource, 'base64')

        let suffix = ctx.path.split(".").slice(-1)[0];
        ctx.set("Content-Type", getMime(suffix));
        ctx.body = data;
    })
}

module.exports =  {
    avatarResource
}