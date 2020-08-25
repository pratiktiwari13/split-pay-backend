module.exports = function (req,res,next){
console.log("check if username is null");
    if(true){
        next();
    }
    else{
        next(405);
    }
}