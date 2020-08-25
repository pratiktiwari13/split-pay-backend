module.exports = function (req,res,next){
    console.log("Check if the username exists and return 200 or 404");
    res.status(200);
    res.end();
}