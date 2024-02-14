import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoute from "./routes/productRoute.js";

const app = express();
dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoute);
//rest api

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MOD} mode on port ${PORT}`
  );
});
