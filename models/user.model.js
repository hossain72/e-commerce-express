const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  user_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  profile_pic: {
    type: String,
    require: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
