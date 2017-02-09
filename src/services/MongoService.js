import Promise from 'bluebird';
import mongoose from 'mongoose';

var MongoClient = require('mongodb').MongoClient;
Promise.promisifyAll(MongoClient);

class MongoService{
    static async connect(db_config){
        let connection_string = MongoService.parseConnectionString(db_config);

        if(connection_string === undefined) return Promise.reject({error:'Database configuration missing'});

        return MongoClient.connectAsync(connection_string);
    }

    static async connect_mongoose(db_config){
        let connection_string = MongoService.parseConnectionString(db_config);

        if(connection_string === undefined) return Promise.reject({error:'Database configuration missing'});

        return Promise.resolve({connection:mongoose.createConnection(connection_string)});
    }

    static parseConnectionString(db_config){
        if(!db_config || !db_config.username || !db_config.password || !db_config.host || !db_config.port || !db_config.db) return null;

        return `mongodb://${db_config.username}:${db_config.password}@${db_config.host}:${db_config.port}/${db_config.db}`;
    }
}

export {MongoService};