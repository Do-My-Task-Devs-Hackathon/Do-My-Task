// A variety of functions which create/modify Tasks in the database.
// The functions take in req/res (request/response) because they respond to
// API endpoints (routes).




//the Fields mentioned here must match the fields created in /models/Task.model.js

// TODO: sync() the database when needed.
// TODO:   ----- Check security for EVERY endpoint -------
Task = require(__dirname+'/../models/Task.js');
const Op = require("sequelize").Op;

// Create a Task
exports.createTask = (req, res) => {
  const task = {
    title:req.body.title, 
    total_user: req.body.total_user
  };
  console.log(task);

  // Save Task in the database
  Task.create(task)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Task."
      });
    });
  
};

// Retrieve all Tasks from the database.
exports.getAllTasks = (req, res) => {
  Task.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tasks."
      });
    });
};

// Retrieve one Task with id from the database.
exports.getTask = (req, res) => {
  const id = req.params.id;

  Task.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Task with id=" + id
      });
    });
};

// Update a Task by the id in the request
exports.updateTask = (req, res) => {
  const id = req.params.id;
  Task.update(req.body, {
    where:{id: id}
  }).then(num=>{
    if(num==1){
      res.send({
        message: 'Task with id='+id+' updated sucessfully.'
      });
    }else{
      res.send({
        message: 'Cannot update Task with id='+id
      });
    }
  }).catch((err=>{
    res.status(500).send({
        message: 'Error update Task with id='+id
    });
  }));
};

// Delete a Task with the specified id in the request
exports.deleteTask = (req, res) => {
  const id = req.params.id;

  Task.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Task was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Task with id=${id}. Maybe Task was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Task with id=" + id
      });
    });
};
