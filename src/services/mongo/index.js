import MongoService from './MongoService';

const mongoServiceMiddleware = function(ctx, next) {
    if (ctx.mongo) {
        ctx.mongoService = new MongoService(ctx.mongo);
    }

    return next();
};

export default function() {
    return mongoServiceMiddleware;
}