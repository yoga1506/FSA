import express from "express";

import { ENV } from "./config/env";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
const app = express();

app.use(cors({ origin: ENV.FRONTEND_URL }));
app.use(clerkMiddleware()); //auth obj will be attached to the req
app.use(express.json()); //parses JSON request bodies
app.use(express.urlencoded()); //parses form data ( like HTML forms)

app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to productify Api - Powered by PostgreSQL, Drizzle ORM & Clerk Auth",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
      comments: "/api/comments",
    },
  });
});
app.listen(ENV.PORT, () => console.log("server is running in port 3000"));
