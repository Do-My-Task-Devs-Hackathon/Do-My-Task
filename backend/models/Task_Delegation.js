const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = global.db;

class Task_Delegation extends Model { }

Task_Delegation.init({

  tid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Task_Delegation' // We need to choose the model name
});

// // the defined model is the class itself
// console.log(User === sequelize.models.User); // true

// so we can access this from server.js and elsewhere
module.exports = Task_Delegation