const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//db.SEquelize=SEquelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.session =require("./session.model.js")(sequelize, Sequelize);



db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
