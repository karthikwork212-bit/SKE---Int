const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "https://ske-int.vercel.app"
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/api/contact", async (req, res) => {
  try {
    console.log(req.body);

    res.status(200).json({
      success: true,
      message: "Form submitted"
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});