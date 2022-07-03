const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book.routes");
const cors = require("cors");
const app = express();
//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);
mongoose
  .connect(
    "mongodb+srv://admin:Madhusanka331@cluster0.dexvsy2.mongodb.net/Book_StoreDB?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database Connected"))
  .then(() => {
    app.listen(5000);
  })
  .catch((error) => console.log(error));
