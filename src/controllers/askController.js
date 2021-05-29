const Question = require("../../database/models/Question");

exports.indexPage = (req, res) => {
  res.render("askIndex");
};

exports.saveQuestion = (req, res) => {
  const receivedData = {
    title: req.body.title,
    content: req.body.content,
  };

  // v Same as INSERT INTO database;
  Question.create({
    title: receivedData.title,
    content: receivedData.content,
  }).then(() => {
    res.redirect("/");
  });
};
