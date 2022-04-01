const express = require("express");
const router = express.Router();

const controller = require('../Controllers/User')

router.get("/", (req, res) => {
  res.render("index", { titulo: "mi titulo dinamico" });
});

router.get("/users", controller.get);

module.exports = router;
