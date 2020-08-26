const dbConfig = require("../DbConfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users")(sequelize, Sequelize);
db.groups = require("./groups")(sequelize,Sequelize);
db.groupsExpenses = require("./group_expenses")(sequelize,Sequelize);
db.groupsUsers = require("./groups_users")(sequelize,Sequelize);
db.expenses = require("./expenses")(sequelize,Sequelize);

module.exports = db;