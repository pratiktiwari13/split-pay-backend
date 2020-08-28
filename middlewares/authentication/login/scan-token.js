module.exports = function(req,res,next){
    let headers = JSON.parse(JSON.stringify(req.headers));
    if(headers["token"]) {
        console.log("token found");
        req["parsedToken"] = headers.token;
        next();
    }else {
        res.status(400);
        res.end();
    }
}