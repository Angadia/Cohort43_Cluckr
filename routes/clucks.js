const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  if (res.locals.username == "") {
    res.render("users/sign_in");
  } else {
    res.render("clucks/index");
  }
});

module.exports = router;
