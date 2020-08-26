const db = require("../../models");

module.exports = function(req,res,next){
    console.log("Return all groups");
    const group_id = req.params.id;
    const user_ids = db.groupsUsers.findAll({attributes:['user_id'],raw:true,where:{group_id:group_id}});
    for(let i=0;i<user_ids;i++){

    }
    res.status(200);
    res.send(result);
}

/*{
    name:"Group1",
        users:[{
    user_id:1,
    username:"Pratik",
    email:"pratik@abc.com"
},
    {
        user_id:2,
        username:"Guri",
        email:"guri@abc.com"
    }],
    payment_history:[
    {
        amount:1000,
        description:"Dinner"
    },
    {
        amount:2000,
        description:"Lunch"
    }]
};*/