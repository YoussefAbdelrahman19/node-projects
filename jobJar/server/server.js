import express from "express";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import reviewRoute from "./routes/review.route.js";
import messageRoute from "./routes/message.route.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/error.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "HEAD", "POST"],
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

//routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/messages", messageRoute);
//middleware
app.use(errorHandler);

const start = async () => {
  try {
    let conn = await connectDB;
    console.log(`mongodb connect on port ${conn.connection.host}`);
    app.listen(port, () => {
      console.log(`app listening on ${port}`);
    });
  } catch (error) {
    console.log("error in connection ", error);
  }
};
start();
