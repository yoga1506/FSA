const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const SECRET_CODE = "yogaraj";
const app = express();

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function jwtSignup(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  } else {
    const token = jwt.sign({ username }, SECRET_CODE);

    return token;
  }
}

const ans = jwtSignup("yoga@gmail.com", "qjsssssshj");
console.log(ans);

app.listen(3000);
