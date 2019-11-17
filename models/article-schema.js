const mongoose= require('mongoose'); //Always required for schemas and models
const Schema = mongoose.Schema; //This is required to write schemas
//LOOK UP mongoose-timestamp

const article_schema = new Schema({  //This is how to build a new schema
    title: {
        type: String,
        required: true
        //LOOK UP format-validators
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    read_time: {
        type: String,
        required: true
    },
    
});

const Article = mongoose.model('Article', article_schema);
module.exports = Article;
