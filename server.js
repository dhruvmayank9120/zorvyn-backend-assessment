import app from "./app.js";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ DB Connected successfully!");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("❌ DB Not Connected, server not started");
    console.error(error.message);
  }
};

startServer();
