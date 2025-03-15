const mongoose = require("mongoose");

const dbURL = "mongodb://127.0.0.1:27017/toDoListDB";

mongoose
  .connect(dbURL)
  .then(() => console.log("Connected"))
  .catch((error) => console.log(error));