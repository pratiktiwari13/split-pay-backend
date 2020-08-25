module.exports = function (req,res,next){
    console.log("Get all expenses");
    res.status(200);
    res.end();
}