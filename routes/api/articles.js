const router = require("express").Router();
const articlesController = require("../../controllers/articlescontroller");

router
  .route("/")
  .get(articlesController.findAll) // find all the articles
  .post(articlesController.create); // create a new saved article

router
  .route("/:id") //find a specific article so the next command can delete
  .delete(articlesController.remove);

module.exports = router;