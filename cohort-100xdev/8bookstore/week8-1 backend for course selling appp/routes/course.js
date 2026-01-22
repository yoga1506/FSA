const { Router } = require("express");
const courseRouter = Router();
courseRouter.get("/purchase", function (req, res) {
  res.json({
    message: "course need to purchase",
  });
});

courseRouter.get("/preview", function (req, res) {
  res.json({
    message: "all courses in the platform",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
