const express = require("express");
const jwt = require("jsonwebtoken");
const SECRET_CODE = "iloveindia";
const { UserModel, TodoModel } = require("./db");
const bCrypt = require("bcrypt");
const { z } = require("zod");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://testreact92:vvM0pIMUV7qJkhWw@cluster0.c1rbc.mongodb.net/todo-app-database"
);

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const reqiredBody = z.object({
    email: z.string(),
    name: z.string(),
    password: z.string(),
  });

  const parsedDataWithSuccess = reqiredBody.safeParse(req.body);
  if (!parsedDataWithSuccess) {
    res.json({
      message: "Incorect Format",
    });
    return;
  }

  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  if (!email.includes("@")) {
    res.json({
      message: "invliad @ is not",
    });
    return;
  }

  const hashedPassword = await bCrypt.hash(password, 5);

  let errorThrown = false;
  try {
    await UserModel.create({
      email: email,
      name: name,
      password: hashedPassword,
    });
    console.log(email, password);
  } catch (e) {
    res.json({
      message: `${e.error} already email exits`,
    });
    errorThrown = true;
  }

  if (!errorThrown) {
    res.json({
      message: "you are signed in",
    });
  }
});
app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
  });

  if (!response) {
    res.json({
      message: "Invalid credential",
    });
  }

  const passwordCheck = await bCrypt.compare(password, response.password);

  if (passwordCheck) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
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
