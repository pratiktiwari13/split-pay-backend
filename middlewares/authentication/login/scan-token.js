module.exports = function(req,res,next){
    console.log("Scan Token");
    if(req.body.token)
        next();
    else {
        res.status(400);
        res.end();
    }
}