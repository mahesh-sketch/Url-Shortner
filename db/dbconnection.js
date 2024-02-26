import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/urlshortner`
    );
    console.log(
      `\n MongoDB connected !! 
      DB Host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDb Error: ", error);
    process.exit(1);
  }
};

export default dbConnection;
