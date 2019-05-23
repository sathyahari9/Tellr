const mongoose = require("mongoose");

// User Schema/Model
var Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;
var UserSchema = new Schema({
  userId:   { type: String, required: true, unique: true },
  password: { type: String, required: true },
  code:     { type: String, unique: true },
  amount:   { type: Number }
});

// Password hashing middleware
UserSchema.pre("save", function(next) {
  var user = this;
  if(!user.isModified("password")) return next();
  bcrypt.genSalt(saltRounds, function(err, salt) {
    if(err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// Verify password
UserSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
