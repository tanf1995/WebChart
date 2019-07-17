const bcrypt = require('bcryptjs');

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

    const UserModel = mongoose.model('User', userSchema);

    UserModel.on('index', err => {
        console.log("err: " + err);
    })

    module.exports = UserModel;
}

if(require.main !== module){
    main();
}else{
    console.log("start")
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync("tanfeng", salt);

    console.log(hash);
    console.log(bcrypt.compareSync("tanfeng", hash))
}