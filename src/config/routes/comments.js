import Router from 'koa-router';
import {CommentsController} from '../controllers/CommentsController.js';

const route__comments = new Router();
let comments_controller = new CommentsController();

route__comments.get('/:id', comments_controller.single);
route__comments.get('/beer/:beer_id', comments_controller.by_beer);
route__comments.get('/brewery/:brewery_id', comments_controller.by_brewery);
route__comments.post('/remove/:id', comments_controller.remove);
route__comments.post('/:id', comments_controller.mutate);

export default route__comments;
