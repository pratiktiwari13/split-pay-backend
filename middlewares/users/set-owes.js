const db = require("../../models");

module.exports = async function (req,res,next){
    console.log("Create a owing expense");
    const user_id = await db.users.findOne({attributes:['user_id'],raw:true,where:{user_token:req.parsedToken}});

    const user_name_of_owing = await db.users.findOne({attributes:['user_id'],raw:true,where:{username:req.body.username}});
    await db.expenses.create({
        from_user_id:user_id.user_id,
        to_user_id:user_name_of_owing.user_id,
        amount:req.body.amount,
        is_paid:0,
        is_owing:1,
        description:req.body.description
    });

    res.status(200);
    res.end();
}

//test
/*module.exports({body:{token:"test",username:"pratik",amount:500,description:"Hello"}},{status:()=>{},end:()=>{}},()=>{});*/