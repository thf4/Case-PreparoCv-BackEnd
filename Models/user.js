const mongoose = require("../Server/index");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  telephone: {
    type: String,
    require: true,
  },
  image: {
    type: Buffer,
  },
  imageData: {
    type: String,
  },
  linkedin: {
    type: String,
    require: false,
  },
  behance: {
    type: String,
    require: false,
  },
  github: {
    type: String,
    require: false,
  },
  city: {
    type: String,
    require: true,
  },
  statee: {
    type: String,
    require: true,
  },
  zip: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  complement: {
    type: String,
    require: true,
  },
  district: {
    type: String,
    require: false,
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
