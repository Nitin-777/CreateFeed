const mongoose= require('mongoose');

async function connectDB(){
 await mongoose.connect("mongodb+srv://lukeistesting18_db_user:Nitin%40xyz@craetefeed.tybkwxh.mongodb.net/");
 console.log("Database connected");
}

module.exports=connectDB;