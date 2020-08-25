module.exports = function (req,res,next){
    console.log("Create a personal expense");
    res.status(200);
    res.end();
}