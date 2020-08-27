const db = require("../../models");

module.exports = async function (req,res,next){
    try {
        console.log("Adding expense");
        await db.groupsExpenses.create({
            group_id: req.body.group_id,
            amount: req.body.amount,
            description: req.body.description,
        });
        let user_ids = await db.groupsUsers.findAll({raw: true, attributes: ['user_id']}, {
            where: {
                group_id: 1
            }
        });
        let costPerHead = req.body.amount / user_ids.length;
        user_ids.forEach(async function (user_id) {
            await db.expenses.create({
                from_user_id: user_id.user_id,
                to_user_id: user_id.user_id,
                amount: costPerHead,
                is_paid: false,
                is_owing: true,
                description: req.body.description
            });
        });
        res.status(200);
        res.end();
    }
    catch(err){
        res.status(400);
        res.end();
    }
}

//test
/*module.exports({body:{group_id:1,amount:500,description:"Hello"}},{status:()=>{},end:()=>{}},()=>{});*/