module.exports = function (req,res,next){
    console.log("Validate and if true, call next");
    const valid = true;
    if(valid){
        next();
    }
    else {
        next(400);
    }
}