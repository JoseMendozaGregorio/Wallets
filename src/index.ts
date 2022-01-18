//import express
import express from "express";
//import morgan
import morgan from "morgan";
//import cors
import cors from "cors";
//import database
import * as db from "./config/database";
//import entorno
import config from "./config/entorno";
//import routes
import routes from "./routes/wallets.routes";

//instance of express
const app = express();

//set port
app.set("port", config.PORT || 3000);

//connect to database
db.default();

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(routes);

//server listen
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
