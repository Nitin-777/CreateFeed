const express= require('express');
const multer= require('multer');
const connectDB=require("./db/db");


connectDB();
const app = express();

const upload=multer({storage: multer.memoryStorage()  });

app.post('/create-post',upload.single("image"),async (req,res) => {
    console.log(req.body)
    console.log(req.file)

    res.json({
    message: "Received",
    body: req.body,
    file: req.file ? req.file.originalname : null
});
})

module.exports=app;
