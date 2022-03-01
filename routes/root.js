const express = require("express");

const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/clucks/");
});

router.get("/sign_in", (req, res) => {
  if (!req.cookies.username) {
    res.render("root/sign_in");
  } else {
    res.redirect('/');
  };
});

router.post("/sign_in", (req, res) => {
  const { username } = req.body;
  if (!username && !req.cookies.username) {
    res.locals.username = "";
    res.render("root/sign_in");
  } else {
    res.cookie("username", username, { maxAge: ONE_WEEK });
    res.redirect("/");
  }
});

router.get("/sign_out", (req, res) => {
  res.locals.username = "";
  res.clearCookie("username");
  res.redirect("/");
});

module.exports = router;
