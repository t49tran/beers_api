import {BaseController} from '../core/BaseController';
import Promise from 'bluebird';
import _ from 'lodash';

class CountriesController extends BaseController{
    async all(ctx){
        try{
            let fs = Promise.promisifyAll(require('fs'));

            let countries = await fs.readFileAsync(__dirname+'/../assets/countries.json', 'utf8');
            countries = _.flatMap(JSON.parse(countries),(value,key)=>{
                return {
                    code : key,
                    name: value
                }
            });
            countries.sort((a,b) => {
                return (a.name > b.name) ? 1 : -1;
            });
            ctx.body = countries;
        } catch(err){
            ctx.body = {message:err.message};
            ctx.status = err.status || 500;
        }
    }
}

export {CountriesController};