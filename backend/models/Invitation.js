const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = global.db;

class Invitation extends Model { }

Invitation.init({

  uid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  tid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// // the defined model is the class itself
// console.log(User === sequelize.models.User); // true

// so we can access this from server.js and elsewhere
module.exports = Invitation