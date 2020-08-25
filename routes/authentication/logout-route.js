const logoutRouter = require("express").Router();
const auth = require("../../middlewares/authentication");
const scanToken = auth.scanToken;
const validateToken = auth.validateToken;
const removeToken = auth.removeToken;

logoutRouter.post("/",scanToken,validateToken,removeToken);
module.exports = logoutRouter;