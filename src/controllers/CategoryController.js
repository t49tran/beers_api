import {DefaultController} from './DefaultController.js';

class CategoryController extends DefaultController{
    single(){
        this.ctx.body = {
            note : 'a category note'
        }
    }
}

export {CategoryController};