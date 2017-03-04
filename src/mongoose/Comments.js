import mongoose from 'mongoose';

const CommentsSchema = new mongoose.Schema({
    author: ObjectId,
    body: {
        type: String,
        required: true
    },
    parent: ObjectId,
    created_date: {
        type: Date,
        required: true
    },
    modified_date: {
        type: Date,
        required: true
    },
    related_object: {
        object_type:{
          type: String,
          required: true
        },
        id: {
            type: ObjectId,
            required: true
        }
    }
});

let Comment = mongoose.model('Comment',CommentsSchema);

export default Comment;