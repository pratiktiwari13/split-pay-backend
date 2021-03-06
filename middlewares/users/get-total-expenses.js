const db = require("../../models");
const { Op } = require("sequelize");

module.exports = async function (req,res,next) {
    const user_id = await db.users.findOne({attributes: ['user_id'], raw: true, where: {user_token: req.parsedToken}});
    var final = [];
    //get owed total
    var result = [];
    const expenses_owed = await db.expenses.findAll({
        attributes: ['expense_id'], raw: true, where: {
            from_user_id: user_id.user_id, to_user_id: {
                [Op.ne]: user_id.user_id
            }
        }
    });
    for (let i = 0; i < expenses_owed.length; i++) {
        const temp = await db.expenses.findAll({
            attributes: ['expense_id', 'amount'],
            raw: true,
            where: {expense_id: expenses_owed[i].expense_id}
        });
        await result.push(temp[0].amount);
    }
    var sum = result.reduce(function (a, b) {
        return a + b;
    }, 0);
    final.push({
        owed_total: sum
    });

    //get personel expenses
    const expenses = await db.expenses.findAll({
        attributes: ['expense_id'],
        raw: true,
        where: {from_user_id: user_id.user_id, to_user_id: user_id.user_id}
    });
    var result = [];

    for (let i = 0; i < expenses.length; i++) {
        const temp = await db.expenses.findAll({
            attributes: ['expense_id', 'amount', 'is_paid'],
            raw: true,
            where: {expense_id: expenses[i].expense_id}
        });
        await result.push(temp[0].amount);
    }
    var sum = result.reduce(function (a, b) {
        return a + b;
    }, 0);
    final.push({
        expense_total: sum
    });

    //get owed total
    var result = [];
    const expenses_owing = await db.expenses.findAll({
        attributes: ['expense_id'], raw: true, where: {
            to_user_id: user_id.user_id, from_user_id: {
                [Op.ne]: user_id.user_id
            }
        }
    });
    for (let i = 0; i < expenses_owing.length; i++) {
        const temp = await db.expenses.findAll({
            attributes: ['expense_id', 'amount'],
            raw: true,
            where: {expense_id: expenses_owing[i].expense_id}
        });
        await result.push(temp[0].amount);
    }
    var sum = result.reduce(function (a, b) {
        return a + b;
    }, 0);
    final.push({
        owing_total: sum
    });

    if (final.length === 0) {
        res.status(404);
        res.end();
    } else {
        res.status(200);
        res.send(final);
    }
}