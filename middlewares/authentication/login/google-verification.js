module.exports = function (req,res,next){
    var status = console.log("google verification");
    if(status)
        next();
    else
        next(400);
}