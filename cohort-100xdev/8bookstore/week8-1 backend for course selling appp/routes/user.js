const { Router } = require("express");
const { userModel } = require("../db");
const { JWT_USER_SECRET } = require("../config");

const jwt = require("jsonwebtoken");

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;
  await userModel.create({
    email,
    password,
    firstName,
    lastName,
  });

  res.json({
    message: "signup succesfully",
  });
});
// SIGNIN

userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_SECRET
    );
    res.json({
      token: token,
    });
  } else
    res.json({
      message: "incorrect credentials for user page",
    });
});
userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "purchased coursed ",
  });
});

module.exports = {
  userRouter: userRouter,
};
