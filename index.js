const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(process.env.PORT || port, () =>
  console.log(`url-shortener listening on port ${port}!`)
);
