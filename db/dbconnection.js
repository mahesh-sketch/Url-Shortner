import mongoose from "mongoose";

async function dbConnection(path) {
  return await mongoose
    .connect(path)
    .then(() => {
      console.log("Database connection is Successful");
    })
    .catch((err) => {
      console.log("Error occurss", err);
    });
}

export default dbConnection;
