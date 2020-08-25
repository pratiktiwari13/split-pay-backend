module.exports = function(req,res,next){
    console.log("Search user");
    res.status(200);
    res.send({username:"user"});
}