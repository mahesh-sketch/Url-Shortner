import express from "express";
import router from "../routes/index.js";
import dbConnection from "../db/dbconnection.js";

const app = express();

//Database Connection
dbConnection("mongodb://127.0.0.1:27017/shorturl");

//Middleware Plugin
app.use(express.json());

app.use("/shorturl", router);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is listening at ${process.env.PORT}`);
});
