const Sequelize = require("sequelize");
require('dotenv').config()

const db = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASS, {
  host: process.env.HOST,
  port: 3306,
  dialect: "mysql",
});

try {
  db.authenticate();
  console.log("Koneksi database berhasil");
} catch (error) {
  console.log(error.message);
}

module.exports = db;
