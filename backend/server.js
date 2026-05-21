const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

require("dotenv").config();

const Contact = require("./models/Contact");

const app = express();

app.use(cors({
  origin: "https://ske-int.vercel.app"
}));

app.use(express.json());

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

    const savedData = await newContact.save();

    console.log(savedData);

    try {

  // Email temporarily disabled

} catch (mailError) {

  console.log("MAIL ERROR:");
  console.log(mailError);

};

    } catch (mailError) {

      console.log("MAIL ERROR:");
      console.log(mailError);

    }

    res.status(200).json({
      success: true,
      message: "Inquiry submitted successfully"
    });

  } catch (error) {

    console.log("SAVE ERROR:");
    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {

  console.log("MongoDB Connected");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

})
.catch((err) => {
  console.log(err);
});