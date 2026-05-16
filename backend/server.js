const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});