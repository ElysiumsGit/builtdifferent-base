import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const version = "v1";
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(`/api/${version}/user`, userRoutes);
app.use(`/api/${version}/auth`, authRoutes);
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Connected to server on port ${PORT}`);
});
