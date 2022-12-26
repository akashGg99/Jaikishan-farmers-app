const express = require('express')
const mongoose= require("mongoose")
const route = require('./routes')
const app=express();

app.use(express.json());

mongoose.connect("",
{ useNewUrlParser:true } )
.then(()=>console.log("Connected to MongoDB.."))
.catch((err)=>console.log(err))

app.use("/",route)

app.listen(300,function(){console.log("Express server running on port 300..")})