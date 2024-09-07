const express = require('express');
const logger = require('./logger');
const app = express();
const PORT = 8000

app.use(logger)

app.get("/" , (req,res)=>{
     res.send("Hello world")
})

app.listen(PORT,()=>{
    console.log("server is running at port " , PORT);
})