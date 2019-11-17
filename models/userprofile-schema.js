const mongoose= require('mongoose'); //Always required for schemas and models
const Schema = mongoose.Schema; //This is required to write schemas
//LOOK UP mongoose-timestamp

const userprofile_schema = new Schema({  //This is how to build a new schema
    name: {
        type: String,
        required: true
        //LOOK UP format-validators
    },
    bio: {
        type: String,
        required: true
    },
    twitter_handle: {
        type: String,
        required: true
    },
    profile_pic: {
        type: String,
        required: true
    },
    
});

const Userprofile = mongoose.model('User', userprofile_schema);
module.exports = Userprofile;
