const fs = require("fs").promises;

const createDb = async (db) => {
    await fs.copyFile("template.json", db + ".json");
    return 'DB Created!';
}

const readDbData = async (db) => {
        const output = await fs.readFile(db + ".json", function(err, data) {
            if (err) throw err;
            return Buffer.from(data);
        })
        const outputdb = JSON.parse(output);
        return outputdb;
}

const fetchDbData = async (db, key, entry) => {
    const output = await fs.readFile(db + ".json", function (err, data) {
        if (err) throw err;
        return Buffer.from(data);
    })
    const outputdb = JSON.parse(output);
    let result = [];
    for (let i = 0; i < outputdb.length; i++) {
        let keyentry = outputdb[i][key]
        if (keyentry == entry) {
            result.push(outputdb[i]);
        }
    }
    return result;
}

async function checkFileExists(dbpath) {
    return fs.access(dbpath, fs.constants.F_OK)
             .then(() => true)
             .catch(() => false)
}

const writeDbData = async (db, entry) => {
    const dbpath = './' + db + '.json'
    let result = await checkFileExists(dbpath)
    if (result == true) {
        const database = require(dbpath);
        database.push(entry);
        let output = await fs.writeFile(db + ".json", JSON.stringify(database), err => {
            if (err) throw err;
            return 'Done';
        })
        return output
    }
    else {
        let result = await createDb(db);
        if (result == 'DB Created!') {
            const database = require(dbpath);
            database.push(entry);
            let output = await fs.writeFile(db + ".json", JSON.stringify(database), err => {
                if (err) throw err;
                return 'Done';
            })
            return output
        }
    }
    return 'Complete'
}

module.exports = { readDbData, fetchDbData, writeDbData }
