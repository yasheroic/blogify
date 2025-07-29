const { Router } = require("express");
const router = Router();
const User = require("../models/user.js");

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/logout", (req, res) => {
  res.clearCookie("token").redirect("/");
});


router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
  });
  return res.redirect("/");
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    // console.log("token", token)
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("signin", {
      error: "incorrect Credentials",
    });
  }
});

module.exports = router;
