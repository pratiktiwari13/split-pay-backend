module.exports = function (req,res,next){
    console.log("Get all groups and return");
    const result = [{
        id:1,
        members:5,
        name:Group1
    },
        {
            id:2,
            members:5,
            name:Group2
        }];

    res.status(200);
    res.send(result);
    res.end();
}