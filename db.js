const { MongoClient } = require("mongodb")
const state = {
    db: null,
};
const url = "mongodb://127.0.0.1:27017"
const dbName = "urls"
const client = new MongoClient(url)

const connect = async(cb) => {
    try {
        await client.connect();
        const db = client.db(dbName)
        state.db = db
        return cb();
    }
    catch (err) {
        return cb(err)
    }
}
const get = () => state.db
module.exports = {
    get,
    connect
}