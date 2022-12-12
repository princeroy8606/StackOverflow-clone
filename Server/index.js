// const express = require('express')
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a stack overflow clone api");
});

app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

const CONNECTION_URL =
  "mongodb+srv://Princeroy:123atAdgjmptw@stack-overflow-clone.bfyrx8m.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server Rynnin ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
