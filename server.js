const express = require("express");
const app = express();

app.listen(8080, function () {
  console.log("Server is running on port 8080");
});

app.get("/pet", function (req, res) {
  res.send("pet 용품을 쇼핑할 수 있는 페이지 입니다.");
});
