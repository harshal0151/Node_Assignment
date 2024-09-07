
function logger(req,res,next){
     
    let startTime = Date.now();

    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} name Ibrahim`)

    const taskFinished = ()=>{
        let endTime = Date.now() - startTime;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - completed in ${endTime} ms`)
    }
    
    res.on("finish" , taskFinished);

    next()
}

module.exports = logger