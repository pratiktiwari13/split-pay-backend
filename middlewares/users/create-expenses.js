const db = require("../../models");

module.exports = async function (req,res,next){
    console.log("Create a personal expense");
    const user_id = await db.users.findOne({attributes:['user_id'],raw:true,where:{user_token:req.body.token}});
    await db.expenses.create({
        from_user_id:user_id.user_id,
        to_user_id:user_id.user_id,
        amount:req.body.amount,
        is_paid:0,
        is_owing:1,
        description:req.body.description

    });

    res.status(200);
    res.end();
}

//test
module.exports({body:{token:"test",amount:500,description:"Hello",is_paid:"false"}},{status:()=>{},end:()=>{}},()=>{});