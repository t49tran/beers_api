var MongoClient = require('mongodb').MongoClient;

import Promise from "bluebird";

Promise.promisifyAll(MongoClient);

class MongoService{
    static async connect(db_config){
        if(!db_config || !db_config.username || !db_config.password || !db_config.host || !db_config.port || !db_config.db) return null;

        let connection_string = `mongodb://${db_config.username}:${db_config.password}@${db_config.host}:${db_config.port}/${db_config.db}`;

        return MongoClient.connectAsync(connection_string);
    }
}

export {MongoService};