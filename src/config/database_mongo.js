/**
 * Setting up Mongo database here
 */
import {ConfigService} from "../services/ConfigService";
import {MongoService} from "../services/MongoService";

let MongoDb = async function(){
    var config =  ConfigService.parse(__dirname+'/parameters.yml');

    try{
        return await MongoService.connect(config.database.mongo);
    } catch(err) {
        return null;
    }
};

let Mongoose = async function(){
    let config = ConfigService.parse(__dirname+'/parameters.yml');

    try{
        return await MongoService.connect_mongoose(config.database.mongo);
    }catch(err) {
        return null;
    }
};

export {MongoDb,Mongoose};

