const apiRouter = require("express").Router();
const groupRoute = require("./groups");
const authRoute = require("./authentication");
const usersRoute = require("./users");
const auth = require("../middlewares/authentication");
const scanToken = auth.scanToken;
const validateToken = auth.validateToken
const checkIfUsernameNull = auth.checkIfUsernameNull;
//GET validate-username
apiRouter.use("/auth",authRoute);
//POST groups/create
apiRouter.use("/groups",scanToken,validateToken,checkIfUsernameNull,groupRoute);

/*
GET users/expenses
GET users/owes
GET users/owed
GET users/total-expenses
POST users/expense
PATCH users/settle-expenses
POST users/expense/shared
*/
apiRouter.use("/users",scanToken,validateToken,checkIfUsernameNull,usersRoute);

module.exports = apiRouter;