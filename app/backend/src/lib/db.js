import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDb ${connect.connection.host}`);
  } catch (error) {
    console.log("Failed connecting to MongoDb", error);
    process.exit(1); //1 is failure and zero is success message
  }
};
