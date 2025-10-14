const express = require("express");
const jwt = require("jsonwebtoken");
const SECRET_CODE = "iloveindia";
const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://testreact92:vvM0pIMUV7qJkhWw@cluster0.c1rbc.mongodb.net/todo-app-database"
);

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  await UserModel.create({
    email: email,
    name: name,
    password: password,
  });
  console.log(email, password);

  res.json({
    message: "you are signed in",
  });
});
app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      SECRET_CODE
    );
    res.json({
      token,
    });
  } else {
    res.json({
      message: "invalid credentials",
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, SECRET_CODE);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Invalid Credentials",
    });
  }
}

app.post("/todo", auth, (req, res) => {
  const userId = req.userId;
  res.json({
    userId: userId,
  });
});
app.get("/todos", (req, res) => {});

app.listen(3000);
