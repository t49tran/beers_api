import BeersEntityManager from "./BeersEntityManager";
import BreweriesEntityManager from "./BreweriesEntityManager";
import CategoriesEntityManager from "./CategoriesEntityManager";
import StylesEntityManager from "./StylesEntityManager";

const entityMiddleware = function () {
  return function (ctx, next) {
    if (ctx.mongoService) {
      ctx.beers_manager = new BeersEntityManager(ctx.mongoService, ctx.redisClient);
      ctx.breweries_manager = new BreweriesEntityManager(ctx.mongoService, ctx.redisClient);
      ctx.styles_manager = new StylesEntityManager(ctx.mongoService, ctx.redisClient);
      ctx.categories_manager = new CategoriesEntityManager(ctx.mongoService, ctx.redisClient);
    } else {
      console.log("No mongo connection setup");
    }

    return next();
  };
}

export default entityMiddleware;