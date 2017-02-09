import {BaseModel} from '../core/BaseModel.js';
import Promise from 'bluebird';

class StylesModel extends BaseModel{
    constructor(){
        super();
        this.collection_name = 'styles';
    }

    async findByCategory(category_id,options){
        if(category_id===undefined || category_id==='')
            Promise.reject({error:'category id not found or is empty'});

        let projections = {
            categoryId: parseInt(category_id)
        };

        return this.findBy(projections,options);
    }
}

export {StylesModel};