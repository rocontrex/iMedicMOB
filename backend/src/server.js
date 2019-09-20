const express = require("express");
const mongoose = require("mongoose");

const server = express();

mongoose.connect("mongodb+srv://dbiMedic:imedic123@cluster0-atihd.mongodb.net/iMEDIC?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.get("/", (req, res) => {
    return res.send(`Hello ${req.query.name}`);
});

server.listen(3333);