const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.js");
const blogRoute = require("./routes/blog.js");
const path = require("path");
const app = express();
const PORT = 3000;
const cookieParser = require("cookie-parser");
const Blog = require("./models/blog.js")
const {
  checkAuthenticationCookie,
} = require("./middlewares/authentication.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/blogify")
  .then((err) => console.log("MongoDB Connected"));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve("./public")))
app.use(checkAuthenticationCookie("token"));

app.get("/", async(req, res) => {
  const allBlogs = await Blog.find({})
  res.render("home", {
    user: req.user,
    blogs: allBlogs
  });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => {
  console.log(`App listening on server ${PORT}`);
});
