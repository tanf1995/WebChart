const UserModel = require('../models/User');
const commonRes = require('../util/commonResponse');
const bcrypt = require('bcryptjs');
const dbConfig = require('../models/dbConfig');

function main(){
    const register = router => {
        router.post('/register', async ctx => {
            // 查看用户名是否已创建
            try{
                const q_user = await UserModel.findOne({username: ctx.request.body.username});

                if(q_user){
                    console.error(`Create user failed, user ${ctx.request.body.username} registered`);
                    return commonRes.ok(ctx, 1, "User registered");
                }
            }catch(err){
                console.log(err);
            }

            let user = new UserModel({
                username: ctx.request.body.username,
                password: bcrypt.hashSync(ctx.request.body.pwd, dbConfig.pwdSalt)
            });
            
            // 注册用户
            try{
                const new_user = await user.save();
                console.log(`create user: ${new_user.username} success.`);
                commonRes.ok(ctx, 0, "Register success");
            }catch(err){
                console.error(`Create user failed.`);
                commonRes.server_error(ctx);
            }
        })
    }

    const login = router => {
        router.post('/login', async ctx => {
            try{
                const q_user = await UserModel.findOne({username: ctx.request.body.username});

                if(q_user){
                    let rel = q_user.checkPwd(ctx.request.body.pwd);
                    if(rel){
                        return commonRes.ok(ctx, 0, "Login success");
                    }else{
                        return commonRes.ok(ctx, 1, "Password mistake");
                    }
                    
                }else{
                    return commonRes.ok(ctx, 1, "Users don't exist");
                }
            }catch(err){
                commonRes.server_error(ctx);
            }
        })
    }

    module.exports = {
        register,
        login
    }
}


if(require.main !== module){
    main();
}else{
    UserModel.findOne({username: "tf"}, (err, user) => {
        if(err) return console.log(err);

        console.log(user);
    })
}