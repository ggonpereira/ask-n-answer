const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");

// Connection with the database
const connection = require("./database/database");
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o BD feita com sucesso");
  })
  .catch((e) => {
    console.log(`Um erro ocorreu: ${e}`);
  });

// Configure view engine and view pages source
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Configure the default static content folder
app.use(express.static(path.resolve(__dirname, "public")));

// Body parser (to capture the req.body content)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use pre-defined routes
app.use(routes);

app.listen(3000, () => {
  console.log("Acesse: http://localhost:3000");
});
