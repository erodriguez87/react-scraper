// connecting back to th emodels
const db = require('../models');

//Building the controller and what it can do
module.exports = {
  //return all articles
  findAll: function(req, res) {
    db.Article
      .find(req.query) //uses the query to search
      .sort({ date: -1 }) // sorts for most recent articles first
      .then(dbModel => res.json(dbModel)) //
      .catch(err => res.status(422).json(err));
  },
  //return one article by id
  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //create an article in the mongo db
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //update a saved article
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //delete
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};