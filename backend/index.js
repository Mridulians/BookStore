import express from "express";
import { PORT, MONGODBURL } from "./config.js";
import mongoose from "mongoose";
// import { Book } from "./models/bookModels.js";
import BookRoutes from "./Routes/bookRoutes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    orign: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json()); // Middleware for parsing JSON bodies
// Connect to MongoDB database using Mongoose

app.get("/", (req, res) => {
  res.send("Hello World dddddddddddddddddddddd!");
});

app.use("/books", BookRoutes);

mongoose
  .connect(MONGODBURL)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log(`our server is now running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
