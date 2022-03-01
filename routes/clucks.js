const express = require("express");
const knex = require("../db/client");

const router = express.Router();

router.get("/", (req, res) => {
  if (res.locals.username == "") {
    res.render("users/sign_in");
  } else {
    res.render("clucks/index");
  }
});

router.get("/new", (req, res) => {
  if (res.locals.username == "") {
    res.render("users/sign_in");
  } else {
    res.render("clucks/new");
  }
});

router.post("/", (req, res) => {
  const content = req.body.content;
  const image_url = req.body.image_url;
  const username = req.cookies.username;

  if (content.length > 0 || image_url.length > 0) {
    knex("clucks")
      .insert({
        username: username,
        content: content,
        image_url: image_url,
      })
      .returning("*")
      .then((cluck) => {
        res.redirect("/");
      });
  } else {
    res.redirect("clucks/new");
  }
});

module.exports = router;
