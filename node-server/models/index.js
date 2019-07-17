const mongoose = require('mongoose');
const dbConfig = require('./dbConfig');


mongoose.connect(dbConfig.host);
const db = mongoose.connection;


db.on('error', () => {
    console.error("connect db error!");
})

db.once('open', () => {
    console.log("server is connected");
})

module.exports = mongoose;