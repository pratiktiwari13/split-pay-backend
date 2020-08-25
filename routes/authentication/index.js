const authRouter = require("express").Router();
const authMiddleware = require("../../middlewares/authentication");
const loginRoute = require("./login-route");
const logoutRoute = require("./logout-route");

authRouter.use("/login",loginRoute);
authRouter.use("/logout",logoutRoute);

module.exports = authRouter;
