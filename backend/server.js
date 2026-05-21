const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const twilio = require("twilio");

require("dotenv").config();

const Contact = require("./models/Contact");

const app = express();
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

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

   client.messages
  .create({
    from: process.env.TWILIO_WHATSAPP_NUMBER,
    to: "whatsapp:+917675979639",
    body:
      "New Inquiry Received\n\n" +
      "Name: " + req.body.name + "\n" +
      "Phone: " + req.body.phone + "\n" +
      "Requirement: " + req.body.requirement + "\n" +
      "Message: " + req.body.message,
  })
  .then(message => console.log(message.sid))
  .catch(error => console.log(error));
    

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