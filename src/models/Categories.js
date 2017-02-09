import {BaseModel} from '../core/BaseModel.js';

class CategoriesModel extends BaseModel{
    constructor(){
        super();
        this.collection_name = 'categories';
    }
}

export {CategoriesModel};