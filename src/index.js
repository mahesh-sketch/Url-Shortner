import express from "express";
import router from "../routes/index.js";
import dbConnection from "../db/dbconnection.js";
import staticRoutes from "../routes/staticRoutes.js";
import path from "path"
const app = express();

//Database Connection
dbConnection("mongodb://127.0.0.1:27017/shorturl");

//Alert the express that ejs engine are used
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Middleware Plugin
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", staticRoutes);

app.use("/shorturl", router);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is listening at ${process.env.PORT}`);
});
