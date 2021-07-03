// When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), 
// setting up the routes will determine how the server responses.

module.exports = (app) => {


    const userController = require("../controllers/user.controller.js"); //instantiating a new object
    var router = require("express").Router();       // a NEW 'Router' object. Gets globally configured to live under '/api/courses'. see blow.

}