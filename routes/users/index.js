const usersRoute = require("express").Router();
const users = require("../../middlewares/users");

usersRoute.get("/expenses",users.getExpenses);
usersRoute.get("/owed",users.getOwed);
usersRoute.get("/owes",users.getOwes);
usersRoute.post("/owes",users.setOwes);
usersRoute.get("/total-expenses",users.getTotalExpenses);
usersRoute.post("/expense",users.createExpenses);
usersRoute.patch("/settle-expenses",users.settleExpenses);
usersRoute.post("/expenses/shared",users.createSharedExpenses);
usersRoute.post("/search",users.search)

module.exports = usersRoute;