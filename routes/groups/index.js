const groupRoute = require("express").Router();
const groupMiddleware = require("../../middlewares/groups");

groupRoute.get("/all",groupMiddleware.getAllGroups);

groupRoute.get("/:id",groupMiddleware.getSpecificGroup);

groupRoute.post("/expense",groupMiddleware.addExpense);

groupRoute.post("/create",groupMiddleware.addGroup);

module.exports = groupRoute;