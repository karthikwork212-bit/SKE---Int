const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

router.post("/contact", async (req, res) => {

  try {

    console.log(req.body);

    const newContact = new Contact({
      name: req.body.name,
      phone: req.body.phone,
      requirement: req.body.requirement,
      message: req.body.message
    });

    await newContact.save();

    console.log("Data Saved");

    res.status(200).json({
      success: true
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;