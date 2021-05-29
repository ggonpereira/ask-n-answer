const Sequelize = require("sequelize");
const connection = require("../database");

// Defining model
const Question = connection.define("question", {
  title: {
    // type STRING = short texts
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    // type TEXT = long texts
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Question.sync({ force: false }).then(() => {});

module.exports = Question;
