const db = require("../../models");

module.exports = async function(req,res,next){
    const user_id = await db.users.findOne({attributes:['user_id'],raw:true,where:{user_token:req.parsedToken}});
    const expenses = await db.expenses.findAll({attributes:['expense_id'],raw:true,where: {from_user_id:user_id.user_id, to_user_id:user_id.user_id }});
    var result=[];
    for(let i=0;i<expenses.length;i++) {
        const temp = await db.expenses.findAll({
            attributes: ['expense_id', 'from_user_id','amount', 'is_paid','created_at'],
            raw: true,
            where: {expense_id: expenses[i].expense_id}
        });
        await result.push({
            id: temp[0].expense_id,
            amount: temp[0].amount,
            is_paid: temp[0].is_paid,
            created_at:temp[0].created_at
        });
    }
    if(result.length===0){
        res.status(404);
        res.end();
    }
    else {
        res.status(200);
        res.send(result);
    }
}
