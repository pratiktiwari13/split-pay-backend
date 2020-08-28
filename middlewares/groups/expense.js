const db = require("../../models");

module.exports = async function (req,res,next){
    try {
        await db.groupsExpenses.create({
            group_id: req.body.group_id,
            amount: req.body.amount,
            description: req.body.description,
        });
        let user_ids = await db.groupsUsers.findAll({raw: true, attributes: ['user_id'],
            where: {
                group_id: req.body.group_id
            }});
        let costPerHead = req.body.amount / user_ids.length;
        await user_ids.forEach(async function (user_id) {
            console.log(user_id);
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
