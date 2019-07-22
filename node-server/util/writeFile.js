const fs = require('fs');

const writeFile = async (name, data, mode) => {
    return new Promise((res, rej) => {
        fs.writeFileSync(name, data, (err) => {
            if(err) return rej(err);
            res();
        })
    })
}

module.exports = writeFile;