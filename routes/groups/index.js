const groupRoute = require("express").Router();
const groupMiddleware = require("../../middlewares/groups");

groupRoute.get(":id",groupMiddleware.getSpecificGroup);

groupRoute.post("/expense",groupMiddleware.addExpense);
module.exports = groupRoute;