module.exports = function (req,res,next){
    console.log("get expenses")
const result =    [{
    id:1,
    amount:1000,
    isPaid:true,
},
{
    id:2,
    amount:2000,
    isPaid:true
}];

    console.log("Get all expenses");
    res.status(200);
    res.send(result);
}