var express = require("express");
var router = express.Router();

async function getPathToPdf() {
  return "/helloworld.pdf"; // public/helloworld.pdf
}

/* GET home page. */
router.get("/", async function (req, res, next) {
  const pathToPdf = await getPathToPdf(); // fetch path/binary from db

  res.render("index", { title: "Express", pathToPdf: pathToPdf });
});

module.exports = router;
