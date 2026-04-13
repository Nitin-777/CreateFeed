const mongoose=require('mongoose');

const PostSchema= new mongoose.Schema({
    image:String,
    caption: String,
})

const postModel=mongoose.model("post", PostSchema);

module.exports=postModel;