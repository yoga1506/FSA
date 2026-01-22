// const express = require("express");

// const app = express();

// function sum(n) {
//   let ans = 0;
//   for (let i = 0; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

// app.get("/", function (req, res) {
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send("ans is " + ans);
// });

// app.listen(3001);

// hospital aplication

const express = require("express");

const app = express();

var users = [
  {
    name: "john",
    kidneys: [
      {
        healty: false,
      },
    ],
  },
];
app.use(express.json());

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numOfHealtyKidney = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healty) {
      numOfHealtyKidney = numOfHealtyKidney + 1;
    }
  }
  const numOfUnHealtyKidneys = numberOfKidneys - numOfHealtyKidney;
  res.json({
    numberOfKidneys,
    numOfHealtyKidney,
    numOfUnHealtyKidneys,
  });
});
app.post("/", function (req, res) {
  const isHealty = req.body.isHealty;
  users[0].kidneys.push({
    healty: isHealty,
  });
  res.json({
    msg: "done",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healty = true;
  }
  res.json({});
});

app.delete("/", function (req, res) {
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys.healty) {
      newKidneys.push({
        healty: true,
      });
    }
  }
  res.json({ msg: "done from delete" });
});

app.listen(3000);
