const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
  console.log(`listening on ${ADDRESS}:${PORT}`);
});
