var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/index", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/hello", (req, res) => {
  res.send("hello!");
});

module.exports = router;
