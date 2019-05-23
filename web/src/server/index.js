const express = require("express");
const path = require("path");
const querystring = require("querystring");
const request = require("request");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var User = require("./user-model");
const app = express();
const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.static('dist'));

// Connect to MongoDB
const uri = 'mongodb+srv://user-1:9KZSZ3zwmDEYPhxj@cluster0-rsces.mongodb.net/test?retryWrites=true';
mongoose.connect(uri, { useNewUrlParser: true });
var db = mongoose.connection;

// DB connection feedback
db.once("open", () => console.log("Connected to DB."));
db.on("error", console.error.bind(console, "Connection error:"));

// Submit voice file, authenticate, and complete
app.post("/authenticate", (req, res) => {
});

app.listen(port || () => console.log(`Listening on port ${port}!`));
