const express = require('express');
const path = require('path');
const apiRouter = require("./routes");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const app = express();
app.use(require("cors")());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require("body-parser").json());

app.use("/api",apiRouter);
app.use(globalErrorHandler);

app.listen(8080,()=>{
    console.log("hello");
});