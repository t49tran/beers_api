import MongoService from './MongoService';

const mongoServiceMiddleware = function(ctx, next) {
    if (ctx.mongo) {
        console.log("Mongo connection ready");
        ctx.mongoService = new MongoService(ctx.mongo);
    }

    return next();
};

export default function() {
    return mongoServiceMiddleware;
}