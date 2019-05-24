const express = require("express");
const path = require("path");
const querystring = require("querystring");
const request = require("request");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const actions = require("./actions");
var User = require("./user-model");

const userID = "";

const app = express();
const port = process.env.PORT || 8080;

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
  const query = User.where({
    code: req.body.data
  });
  query.findOne((err, obj) => {
    if(err) {
      console.log(err);
      res.send({ amount: null });
      return;
    }
    if(obj) {
      res.send({ amount: obj.amount });
      return;
    } else {
      res.send({ amount: -1 });
    }
  });
});

app.post("/code", (req, res) => {
  let authCode = actions.genCode();
  //let query = User.find({ code: authCode });
  /*while (query.length) {
    authCode = actions.genCode();
    query = User.find({ code: authCode });
  }*/
  let userId = req.body.userId;
  User.findOneAndUpdate(
    { userId: userId },
    {
      userId: userId,
      code: authCode,
      amount: req.body.amount
    },
    (err) => {
      console.log("Err in /code:" + err);
    }
  );
  res.json({ code: authCode });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
