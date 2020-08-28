const db = require("../../models");

module.exports = async function (req,res,next){
    try {
        const user_id = await db.users.findOne({
            attributes: ['user_id'],
            raw: true,
            where: {user_token: req.parsedToken}
        });

        const user_name_of_owing = await db.users.findOne({
            attributes: ['user_id'],
            raw: true,
            where: {username: req.body.username}
        });

        if(user_name_of_owing.user_id === null) {
            next(404);
            return;
        }

        await db.expenses.create({
            from_user_id: user_id.user_id,
            to_user_id: user_name_of_owing.user_id,
            amount: req.body.amount,
            is_paid: 0,
            is_owing: 1,
            description: req.body.description
        });

        res.status(200);
        res.end();
    }
    catch(err){
        res.status(400);
        res.end();
    }
}