const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.js");
const path = require("path");
const app = express();
const PORT = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/blogify")
  .then((err) => console.log("MongoDB Connected"));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`App listening on server ${PORT}`);
});
