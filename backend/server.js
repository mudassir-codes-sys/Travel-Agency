import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./Routes/AuthRoutes.js";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use(cors());

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

//*Login Signup routes
app.use("/", authRouter);
app.use("/", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
