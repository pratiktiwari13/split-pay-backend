module.exports = function (req,res,next){
    console.log("get all the total expenses");
    result = {
        owed_total:1000,
        expenses_total:1000,
        owing_total:1000
    };
    res.status(200);
    res.send(result);
}