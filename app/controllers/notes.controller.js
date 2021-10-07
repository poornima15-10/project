const db = require("../models");
const Note = db.notes;

const Session1=db.session;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const tnote = {
    userID: req.body.userID,
    Nid: req.body.Nid,
    title: req.body.title,
    description: req.body.description,
    //published: req.body.published ? req.body.published : false
  };
  // Save Tutorial in the database
  Note.create(tnote)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the notes."
      });
    });
};


exports.create = (req, res) => {
  // Validate request
  if (!req.body.sessionid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const sessions = {
  // userId:req.body.userId,
   sessionid: req.body.sessionid
  };
  // Save Tutorial in the database
  Session1.create(sessions)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the notes."
      });
    });
};





// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Note.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Note.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving notes with id=" + id});
    });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Note.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Notes was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update notes with id=${id}. Maybe notes was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating notes with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Note.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "notes was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete notes with id=${id}. Maybe notes was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete notes with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Note.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} notes were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all notes."
      });
    });
};