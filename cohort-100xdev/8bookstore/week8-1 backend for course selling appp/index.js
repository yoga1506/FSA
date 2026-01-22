const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function main() {
  mongoose.connect(
    "mongodb+srv://testreact92:vvM0pIMUV7qJkhWw@cluster0.c1rbc.mongodb.net/bookselling-app"
  );
  app.listen(3000);
  console.log("connected on port 300");
}

main();
