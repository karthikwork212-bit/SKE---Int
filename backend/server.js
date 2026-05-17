const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Contact = require("./models/Contact");

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

    const newContact = new Contact({
      name: req.body.name,
      phone: req.body.phone,
      requirement: req.body.requirement,
      message: req.body.message
    });

    await newContact.save();

    console.log("Data Saved Successfully");

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
  console.log(`Server running on port ${PORT}`);
});