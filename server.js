import express from "express";
import cors from "cors";
// import connectDB from "./db.js";
import router from "./Routes/routes.js";
import "dotenv/config";
import mongoose from "mongoose";
mongoose.connect(
  "mongodb+srv://vadivelbabu:vadivel@cluster0.jg5ufpz.mongodb.net/user"
);
const database = mongoose.connection;

database.on("error", (err) => {
  console.log(err);
  database.close();
});
database.on("connected", () => console.log("db connected"));

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => console.log("listening..."));
