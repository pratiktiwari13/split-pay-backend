module.exports = function (req,res,next){
    console.log("get all the total expenses");
    res.status(200);
    res.end();
}