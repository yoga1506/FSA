const express = require("express");

const app = express();

function isAgeOk(req, res, next) {
  const age = req.query.age;
  if (age > 14) {
    next();
  } else {
    res.json({
      msg: "You are not qualify for ride",
    });
  }
}

app.get("/ride1", isAgeOk, function (req, res) {
  res.json({
    msg: "you can enjoy ur ride",
  });
});

app.listen(3000);
