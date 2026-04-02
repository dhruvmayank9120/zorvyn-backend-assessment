import mongoose from "mongoose";
import dns from "dns";
import dotenv from "dotenv";

dotenv.config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    return true; // ✅ IMPORTANT
  } catch (error) {
    console.error(`Error: ${error.message}`);

    return false; // ✅ IMPORTANT
  }
};

export default connectDB;
