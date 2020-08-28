const db = require("../../models");
const { Op } = require("sequelize");

module.exports = async function (req,res,next){
        const user_id = await db.users.findOne({
            attributes: ['user_id'],
            raw: true,
            where: {user_token: req.parsedToken}
        });
        const expenses = await db.expenses.findAll({
            attributes: ['expense_id'], raw: true, where: {
                from_user_id: user_id.user_id, to_user_id: {
                    [Op.ne]: user_id.user_id
                }
            }
        });
        var result = [];
        for (let i = 0; i < expenses.length; i++) {
            const temp = await db.expenses.findOne({
                attributes: ['expense_id', 'to_user_id', 'amount', 'is_paid'],
                raw: true,
                where: {expense_id: expenses[i].expense_id, is_paid: 0}
            });
            if(temp === null)
                continue;
            const usernames = await db.users.findOne({
                attributes: ['username'],
                raw: true,
                where: {user_id: temp.to_user_id}
            });
            await result.push({
                id: temp.to_user_id,
                name: usernames.username,
                amount: temp.amount

            });
        }

        if(result.length === 0){
            res.status(400);
            res.end();
        }
        else{
            res.status(200);
            res.send(result);
        }
}