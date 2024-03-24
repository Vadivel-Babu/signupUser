import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import router from "./Routes/routes.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
connectDB();
app.use("/api", router);

app.listen(PORT, () => console.log("listening..."));
