import _ from 'lodash';

class SearchController {
    async beers(ctx){
        try{
            let options = ctx.request.query;
            let projections = {};

            if(options.style && !isNaN(options.style)){
                projections = _.extend(projections, {
                    "style.id": parseInt(options.style)
                })
            }

            if(options.cat && !isNaN(options.cat)){
                projections = _.extend(projections, {
                    'style.categoryId': parseInt(options.cat)
                })
            }

            if(options.country){
                projections = _.extend(projections, {
                    'country': options.country
                });
            }

            ctx.body = await ctx.beers_manager.search(ctx.request.query.key, projections, options);
        } catch (err) {
            ctx.body = {
                message : err.message
            };
            ctx.status = err.status || 500;
        }
    }

    async styles(ctx){
        try {
            let options = ctx.request.query;
            ctx.body = await ctx.styles_manager.search(ctx.request.query.key, {}, options);
        } catch (err) {
            ctx.body = {
                message: err.message
            };
            ctx.status = err.status || 500;
        }
    }

    async categories(ctx){
        try {
            let options = ctx.request.query;
            ctx.body = await ctx.categories_manager.search(ctx.request.query.key, {}, options);
        } catch (err) {
            ctx.body = {
                message : err.message
            };
            ctx.status = err.status || 500;
        }
    }

    async breweries(ctx){
        try {
            let options = ctx.request.query;
            ctx.body = await ctx.breweries_manager.search(ctx.request.query.key, {}, options);
        } catch (err) {
            ctx.body = {
                message : err.message
            };
            ctx.status = err.status || 500;
        }
    }
}

export {SearchController};