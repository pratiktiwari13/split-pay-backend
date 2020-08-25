module.exports = function (req,res,next){
    console.log("get owed");
const result =   [{
    user_id:1,
    username:"Gurpreet",
    amount:100
},
{
    user_id:2,
    username:Dhiren,
    amount:200
}]

    res.status(200);
    res.send(result);
}