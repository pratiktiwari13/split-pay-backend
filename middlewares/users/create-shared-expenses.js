const db = require("../../models");

module.exports = async function (req,res,next){
    console.log("Create a shared expense");

    const user_id = await db.users.findOne({attributes:['user_id'],raw:true,where:{user_token:req.parsedToken}});

    let members = req.body.members;
    let paid_amount = req.body.initial_paid_amount;
    let no_of_memebers = members.length;
    console.log(no_of_memebers);
    let pay_per_user = paid_amount/(no_of_memebers+1);
    console.log(pay_per_user);
    members.forEach(async(member) => {

        const user_from_member_id = await db.users.findOne({attributes:['user_id'],raw:true,where:{username:member.username}});

        await db.expenses.create({
            from_user_id:user_id.user_id,
            to_user_id:user_from_member_id.user_id,
            amount:pay_per_user,
            is_paid:0,
            is_owing:1,
            description:req.body.description
    
        });

    });
    await db.expenses.create({
        from_user_id:user_id.user_id,
        to_user_id:user_id.user_id,
        amount:pay_per_user,
        is_paid:1,
        is_owing:0,
        description:req.body.description

    });
    

    res.status(200);
    res.end();
}

//test
/*module.exports({body:{token:"test3",members:[{ username:"dhiren" } , {username:"pratik"}] , description:"lunch", initial_paid_amount:900 }} ,{status:()=>{},end:()=>{}},()=>{});*/