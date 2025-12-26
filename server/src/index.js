import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
const version = "v1";
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(`/api/${version}/user`, userRoutes);
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, async () => {
  await connectDB();
  console.log("Hello Server");
});
