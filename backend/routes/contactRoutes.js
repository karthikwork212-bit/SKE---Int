const express = require("express");

const router = express.Router();

const Contact = require("../models/Contact");

const nodemailer = require("nodemailer");

// EMAIL TRANSPORTER
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/", async (req, res) => {

  try {

    const {
      name,
      phone,
      requirement,
      message
    } = req.body;

    // SAVE TO MONGODB
    const newContact = new Contact({
      name,
      phone,
      requirement,
      message
    });

    await newContact.save();

    // SEND EMAIL NOTIFICATION
    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "New Interior Design Enquiry",

      text: `
New enquiry received from website

Name: ${name}

Phone: ${phone}

Requirement: ${requirement}

Message: ${message}
      `,

    });

    res.status(201).json({
      success: true,
      message: "Inquiry Submitted Successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

});

module.exports = router;