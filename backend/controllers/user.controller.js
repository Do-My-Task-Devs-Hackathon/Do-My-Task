// A variety of functions which create/modify Courses in the database.
// The functions take in req/res (request/response) because they respond to
// API endpoints (routes).



// TODO: sync() the database when needed.
// TODO:   ----- Check security for EVERY endpoint -------





// User  is a CLASS definition.
User = require(__dirname+'/../models/User.js');         //see /models/index.js. It builds this. We could very well require the modules/index.js file, but no - we create the database models in server.js on startup.
const Op = require("sequelize").Op;

exports.login = (req, res) => {  res.send("hello. im not asking for password right now." + boss.firstName);
}
exports.createUser = (req,res) =>{
  const User = require(__dirname+'/models/User.js');//fetch the Model definition
  const jane = User.create({ firstName: "Jane", lastName: "Doe" });
  console.log("Jane's auto-generated ID:", jane.id);
    
}


exports.getUserDetails = (req, res) => {
    res.send("probably some json with the users name & stuff");
};
exports.setUserDetails = (req, res) => {
   res.send("i should probably update the correct local DB object. remember server sets object IDs if they dont exist yet.");
};

exports.logout = (req, res) => {
    res.send("gtfo");
};

exports.loadusers = (req, res) => {
  User.create({ firstName:"James", 
                lastName:"LOL"});
  User.create({ firstName:"Steven", 
                lastName:"LOL"});
  User.create({ firstName:"Josh", 
                lastName:"LOL"});
  User.create({ firstName:"Hajim", 
                lastName:"LOL"});
  User.create({ firstName:"Simon", 
                lastName:"LOL"});
  User.create({ firstName:"JinKai", 
                lastName:"LOL"});
  res.send("6 users created");
};