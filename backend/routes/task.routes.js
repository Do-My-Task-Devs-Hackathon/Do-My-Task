// When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), 
// setting up the routes will determine how the server responses.

module.exports =(app) => {

    const api = require("../controllers/task.controller.js"); //instantiating a new object
    var router = require("express").Router();       // a NEW 'Router' object. Gets globally configured to live under '/api/tasks'. see below.
    
    // Create a new Task
    router.post("/create", api.createTask);

    // Retrieve all Tasks
    router.get("/", api.getAllTasks);

    // Retrieve Tasks with id
    router.get("/find/:id", api.getTask);

    // Update Task with id
    router.put("/update/:id", api.updateTask);

    // Delete Task with id
    router.delete("/delete/:id", api.deleteTask);

    //mount the router on the app
    app.use('/api/tasks', router);
}