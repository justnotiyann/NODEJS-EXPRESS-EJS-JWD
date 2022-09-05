const db = require("../config/db");
const DataTypes = require("sequelize");

const admin = db.define(
  "admin",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamp: false,
  }
);

try {
  admin.sync({});
} catch (error) {
  console.log(error);
}




module.exports = admin;
