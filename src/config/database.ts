//import mongoose
import mongoose from "mongoose";

//import entorno
import config from "./entorno";

// connect to mongoose
async function connections() {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.log(error.message);
  }
}

export default connections;
