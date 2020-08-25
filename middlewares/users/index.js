const createExpenses = require("./create-expenses");
const createSharedExpenses = require("./create-shared-expenses");
const getExpenses = require("./get-expenses");
const getOwed = require("./get-owed");
const getOwes = require("./get-owes");
const getTotalExpenses = require('./get-total-expenses');
const settleExpenses = require("./settle-expenses");
const search = require("./search");
const setOwes = require("./set-owes");

module.exports = {
    createExpenses,
    createSharedExpenses,
    getExpenses,
    getOwed,
    getOwes,
    getTotalExpenses,
    settleExpenses,
    search,
    setOwes
}
