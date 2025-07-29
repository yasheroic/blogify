const { Router } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");

router.get("/add-new", (req, res) => {
  return res.render("addBlog", {
    user: req.user,
  });
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve("./public/uploads"));
    },
    filename: function (req, file, cb) {
      const filename = `${Date.now()}-${file.originalname}`;
      cb(null, filename);
    },
  });
  
  const upload = multer({ storage: storage });

router.post("/", upload.single('coverImage'),(req, res) => {
  console.log(req.body);
  console.log(req.file);
  
  return res.redirect("/");
});



module.exports = router;
