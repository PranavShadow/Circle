import express from "express";
import cookieParser from "cookie-parser"
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.route.js";
import { connectDb } from "./lib/db.js";


dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)

app.listen(port, () => {
    console.log("Server is running on port: " + port);
    connectDb();
});
