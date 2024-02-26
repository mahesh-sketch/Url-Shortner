import express from "express";
import router from "../routes/index.js";
import dbConnection from "../db/dbconnection.js";
import staticRoutes from "../routes/staticRoutes.js";
import path from "path";
import useRouter from "../routes/user.js";
import cookieParser from "cookie-parser";
import authMiddleware from "../middlewares/auth.js";
import dotenv from "dotenv";

const app = express();

dotenv.config({
  path: "./.env",
});

//Database Connection
dbConnection()
  .then(() => {
    app.listen(process.env.PORT || 8001, () => {
      console.log(`Server is listening at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connecttin Failed !!", err);
  });

//Alert the express that ejs engine are used
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Middleware Plugin
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", authMiddleware.checkOut, staticRoutes);
app.use("/shorturl", authMiddleware.restrictToLoggedinUserOnly, router);
app.use("/user", useRouter);
