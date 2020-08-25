module.exports = function (req,res,next){
    console.log("Create a shared expense");
    res.status(200);
    res.end();
}