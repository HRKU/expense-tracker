import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      // If a connection is already established, reuse it
      return;
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
      dbName: "expense-tracker",
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

export default dbConnect;
