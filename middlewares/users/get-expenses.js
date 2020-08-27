const db = require("../../models");

module.exports = async function(req,res,next){
    console.log("get expenses")
    const user_id = await db.users.findOne({attributes:['user_id'],raw:true,where:{user_token:req.body.token}});
    console.log(user_id.user_id);
    const expenses = await db.expenses.findAll({attributes:['expense_id'],raw:true,where: {from_user_id:user_id.user_id, to_user_id:user_id.user_id }});
    var result=[];
    for(let i=0;i<expenses.length;i++) {
        const temp = await db.expenses.findAll({
            attributes: ['expense_id', 'from_user_id','amount', 'is_paid'],
            raw: true,
            where: {expense_id: expenses[i].expense_id}
        });
        await result.push({
            id: temp[0].expense_id,
            from_user_id: temp[0].from_user_id,
            amount: temp[0].amount,
            name: temp[0].is_paid
        });
    }
    console.log(result);
    res.status(200);
    res.send(result);
}
//test
module.exports({body:{token:"test"}},{status:()=>{},send:()=>{},end:()=>{}},()=>{});

/*const result =    [{
    id:1,
    amount:1000,
    isPaid:true,
},
{
    id:2,
    amount:2000,
    isPaid:true
}];

    console.log("Get all expenses");
    res.status(200);
    res.send(result);*/
