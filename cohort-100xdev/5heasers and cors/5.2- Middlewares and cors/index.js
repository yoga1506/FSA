const express = require("express");
const app = express();
let count = 0;
console.log("hello");

function countIncreaser(req, res, next) {
  count = count + 1;
  console.log("count is " + count);
  console.log("host is" + req.url);
  console.log(new Date());
  next();
}

app.use(countIncreaser);

app.get("/add", function (req, res) {
  // countIncreaser();

  // main logic
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answers: a + b,
  });
});

app.get("/multiply", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    answer: a * b,
  });
});

app.listen(3000);

// commonly used middle wares
// defining our own middlewares
