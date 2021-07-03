// A variety of functions which create/modify Courses in the database.
// The functions take in req/res (request/response) because they respond to
// API endpoints (routes).



// TODO: sync() the database when needed.
// TODO:   ----- Check security for EVERY endpoint -------





// User  is a CLASS definition.
Invitation = require(__dirname + '/../models/Invitation.js');         //see /models/index.js. It builds this. We could very well require the modules/index.js file, but no - we create the database models in server.js on startup.
const Op = require("sequelize").Op;

exports.createInvitation = (req,res) =>{
    const invitation = {
      task_id:req.body.task_id, 
      user_id: req.body.user_id,
      status: null
    };
    console.log(invitation);
  
    // Save User in the database
    Invitation.create(invitation)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Invitation."
        });
      });
      
  }

// get all invitations with user id
exports.getInvitation_user_id = (req,res) =>{
    const user_id = req.params.user_id;

    Invitation.findAll({
        where: {
            user_id: user_id}}).then(data => {
                res.send(data);
            }).catch(err => {
            res.status(500).send({
                message: "Error retrieving Invitation with user_id = " + id
            });
        });
};

  

