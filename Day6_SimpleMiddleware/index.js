const express = require("express");
const logger = require("./middleware/logger");
const app = express();

const PORT = 8000


app.use(logger)

app.get("/", (req , res)=>{
     res.send("hello from Ibrahim ")
})


app.listen(PORT , ()=>{
    console.log("server running at ",PORT)
})