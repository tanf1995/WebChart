const bcrypt = require('bcryptjs');
const dbConfig = require('./dbConfig');
const jwt = require('jsonwebtoken');
const redisClient = require('./redis');

function main(){
    const mongoose = require('./index');

    const userSchema = mongoose.Schema({
        username: {
            type: String,
            index: true,
            unique: true
        },
        password: String
    })

    userSchema.methods.checkPwd = function(pwd){
        return bcrypt.compareSync(pwd, this.password);
    }

    userSchema.methods.createToken = function(){
        const token = jwt.sign({
            username: this.username,
            expires: (new Date()).getTime() + 7*24*60*60*1000
        }, dbConfig.privateKey)

        redisClient.hset("userTokens", this.username, token);

        return token;
    }

    userSchema.methods.logout = function(){
        redisClient.hdel('userTokens', this.username);
    }

    userSchema.methods.ret_strangers = async function(limit=10, offset=0){
        try{
            const strangers = await UserModel.find({username: {$ne: this.username}});
            return strangers;
        }catch(err){
            return [];
        }
    }

    const UserModel = mongoose.model('User', userSchema);

    UserModel.on('index', err => {
        if(err) console.log("err: " + err);
    })

    module.exports = UserModel;
}

if(require.main !== module){
    main();
}else{
    // console.log("start")
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync("tanfeng", salt);

    // console.log(hash);
    // console.log(bcrypt.compareSync("tanfeng", hash))

    // jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRmIiwiZXhwaXJlcyI6MTU2NDAzODA4MTU4NiwiaWF0IjoxNTYzNDMzMjgxfQ.e7zKx6s2LQktrWE0Z0bSuDkx5ZBFUqKilw-XHsOp0sI", dbConfig.privateKey, (err, decode) => {
    //     if(err) return console.log(err);

    //     console.log(decode);
    // })
}