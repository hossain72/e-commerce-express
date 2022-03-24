const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function getToken(user) {
  return jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
}

exports.signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  const isUser = await User.findOne({
    $or: [{ email: email }, { user_name: username }],
  });

  if (isUser) {
    return res.status(403).json({
      status: "error",
      message: "Already exists user.",
    });
  }

  const passwordEncript = await bcrypt.hash(password, 12);

  const newUser = await User.create({
    user_name: username,
    email: email,
    password: password,
    profile_pic: "",
  });

  newUser.password = undefined;

  const token = getToken(newUser);

  res.status(200).json({
    status: "success",
    token: token,
    data: newUser,
  });
};
