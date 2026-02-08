// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";


// const connectDB = async() => {
//     try {
//         const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${ DB_NAME }`)
//         console.log(`/n MongoDB connected !! DB HOST: ${connectioninstance.connection.host}`);
//     } catch (error) {
//         console.log("MONGODB connection error", error);
//         process.exit(1)
//     }
// }

// export default connectDB

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    const connectioninstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\nMongoDB connected !! DB HOST: ${connectioninstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
