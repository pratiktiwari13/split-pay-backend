const db = require("../../models");

module.exports = async function (req,res,next){
    try{
    console.log("settle expense");
    let remaining_amount= 0;
    const user_id = await db.users.findAll({attributes:['username'],raw:true,where:{user_token:req.parsedToken} });

    const temp = await db.expenses.findAll({
        attributes: ['amount'],
        raw: true,
        where: {expense_id: req.body.expense_id}
    });
    remaining_amount= temp[0].amount - req.body.amount;
        if(remaining_amount === 0)
        {
            const updatedUser = await db.expenses.update({amount: remaining_amount, is_paid:1, is_owing:0}, {where: {expense_id: req.body.expense_id}});
        }
        else{
            const updatedUser = await db.expenses.update({amount: remaining_amount}, {where: {expense_id: req.body.expense_id}});
        }
        
        res.status(200);
        res.send({remaining_amount});
    }
    catch(err){
        res.status(400);
        res.end();
    }
    
}