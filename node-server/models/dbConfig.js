const bcrypt = require('bcryptjs');

module.exports = {
    host: "mongodb://localhost/webChat",
    pwdSalt: bcrypt.genSaltSync(10),
    privateKey: "12345"
}