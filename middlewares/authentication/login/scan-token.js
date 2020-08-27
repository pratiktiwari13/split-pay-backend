module.exports = function(req,res,next){
    console.log("Scan Token");
    let headers = JSON.parse(JSON.stringify(req.headers));
    console.log(headers)
    if(headers["token"]) {
        console.log("token found");
        req["parsedToken"] = headers.token;
        next();
    }else {
        res.status(400);
        res.end();
    }
}