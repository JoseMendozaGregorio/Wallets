//import dotenv
import dotenv from "dotenv";

// instance of dotenv
dotenv.config();

//variables
export default {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost/wallets",
};
