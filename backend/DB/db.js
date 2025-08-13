import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function ConnectDB() {
  try {
    await mongoose.connect(process.env.MONGODBURL);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error", err);
    throw err;
  }
}
export default ConnectDB;
