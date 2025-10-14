const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_SECRET } = require("../config");

adminRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;
  await adminModel.create({
    email,
    password,
    firstName,
    lastName,
  });

  res.json({
    message: "admin signup succesfully",
  });
});

//sign in

adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email,
    password,
  });
  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_SECRET
    );
    res.json({
      token: token,
    });
  } else
    res.json({
      message: "incorrect creditentail for admin page",
    });
});

adminRouter.post("/course", function (req, res) {
  res.json({
    message: "admin created course succesfully",
  });
});
adminRouter.put("/course", function (req, res) {
  res.json({
    message: "admin new course upload",
  });
});

adminRouter.get("course/bulk", function (req, res) {
  res.json({
    message: "admin couses uploaded list",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
