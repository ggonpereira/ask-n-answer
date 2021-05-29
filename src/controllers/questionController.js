const Question = require("../../database/models/Question");
const Answer = require("../../database/models/Answer");

exports.indexPage = (req, res) => {
  const id = req.params.id;

  Question.findOne({
    where: {
      id,
    },
  }).then((d) => {
    if (d != undefined) {
      Answer.findAll({
        raw: true,
        where: {
          questionId: d.id,
        },
      }).then((aList) => {
        res.render("listQuestion", {
          id: id,
          answerContent: aList,
          title: d.title,
          content: d.content,
        });
      });
    } else {
      return res.render("404");
    }
  });
};

exports.saveAnswer = (req, res) => {
  const receivedData = {
    questionId: req.body.questionId,
    content: req.body.content,
  };

  if (receivedData.content.length == 0) return;

  // v Same as INSERT INTO database;
  Answer.create({
    questionId: receivedData.questionId,
    content: receivedData.content,
  }).then(() => {
    res.redirect("back");
  });
};
