const Sequelize = require("sequelize");
const connection = require("../database");

// Defining model
const Answer = connection.define("answers", {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  questionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Answer.sync({ force: false });

module.exports = Answer;
