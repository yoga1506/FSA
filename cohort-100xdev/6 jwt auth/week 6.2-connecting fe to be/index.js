const express = require("express");
const jwt = require("jsonwebtoken");
const SECRET_JWT = "india";
const app = express();

app.use(express.json());

// works as virtual db
const users = [];
console.log(users);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username,
    password,
  });
  res.json({
    message: "signed up sucessfully",
  });
  console.log(users);
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let founduser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      founduser = users[i];
    }
  }

  if (!founduser) {
    res.json({
      message: "invalid credentials",
    });
    return;
  } else {
    const token = jwt.sign(
      {
        username,
      },
      SECRET_JWT
    );
    res.json({
      token,
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, SECRET_JWT);

  if (decodedData.username) {
    req.username = decodedData.username;
    next();
  } else {
    res.json({
      message: "invalid credential",
    });
  }
}

app.get("/me", auth, (req, res) => {
  const currentUser = req.username;
  let founduser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === currentUser) {
      founduser = users[i];
    }
    res.json({
      username: founduser.username,
      password: founduser.password,
    });
  }
});

app.listen(3000);
