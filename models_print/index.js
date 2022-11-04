const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.box = require("./print.box.model");
db.paper = require("./print.paper.model");
db.afterpress = require("./print.afterpress.model");
db.prepress = require("./print.prepress.model");
db.printservice = require("./print.printservice.model");
db.transport = require("./print.transport.model");
db.value = require("./print.value.model");
db.waste = require("./print.waste.model");

module.exports = db;
