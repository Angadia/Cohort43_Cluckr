const express = require("express");
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");

const usersRouter = require("./routes/users");
const clucksRouter = require("./routes/clucks");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser());

app.use((req, res, next) => {
  const username = req.cookies.username;
  res.locals.username = "";
  if (username) {
    res.locals.username = username;
  }
  next();
});

app.use("/users", usersRouter);
app.use("/clucks", clucksRouter);

app.get("/", (req, res) => {
  res.redirect("clucks/");
});

const PORT = 3000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
  console.log(`listening on ${ADDRESS}:${PORT}`);
});
