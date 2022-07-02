const express = require("express");
const mongoose = require("mongoose");

const app = express();
//Middlewares

mongoose
  .connect(
    "mongodb+srv://admin:Madhusanka331@cluster0.dexvsy2.mongodb.net/Book_StoreDB?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database Connected"))
  .then(() => {
    app.listen(5000);
  })
  .catch(() => console.log(err));
