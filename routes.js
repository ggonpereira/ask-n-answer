const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const askController = require("./src/controllers/askController");
const questionController = require("./src/controllers/questionController");

// Index routes
route.get("/", homeController.indexPage);

// Ask route
route.get("/ask", askController.indexPage);

// Route to save questions
route.post("/savequestion", askController.saveQuestion);

// Route to save answers
route.post("/saveanswer", questionController.saveAnswer);

// Route to each question
route.get("/question/:id", questionController.indexPage);
// route.get("/question/:id", questionController.showAnswers);

module.exports = route;
