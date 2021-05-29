const Question = require("../../database/models/Question");

exports.indexPage = (req, res) => {
  // Equivalent as => SELECT * ALL FROM questions;
  Question.findAll({ raw: true, order: [["id", "DESC"]] }).then((qList) => {
    res.render("index", {
      qList,
    });
  });
};
