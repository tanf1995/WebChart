const Redis = require('ioredis');
const client = new Redis();

module.exports = client;


if(require.main === module){
    async function test(){
        // client.hset("userToken", "tf", "123");
        console.log("===")

        const t = await client.hget("userToken", "tf")

        console.log(t);
    }

    test();
}