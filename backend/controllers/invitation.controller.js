// A variety of functions which create/modify Courses in the database.
// The functions take in req/res (request/response) because they respond to
// API endpoints (routes).



// TODO: sync() the database when needed.
// TODO:   ----- Check security for EVERY endpoint -------





// User  is a CLASS definition.
Invitation = require(__dirname + '/../models/User.js');         //see /models/index.js. It builds this. We could very well require the modules/index.js file, but no - we create the database models in server.js on startup.
const Op = require("sequelize").Op;

