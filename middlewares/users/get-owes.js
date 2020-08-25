module.exports = function (req,res,next){
    console.log("get owes");
    const result = [{
        username:1,
            amount:1000
    },
    {
        username:2,
            amount:1000
    }
];

    res.status(200);
    res.send(result);
}