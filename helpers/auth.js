const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const User = require("../models/User");

// gets all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ date: -1 });
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// registers a new user
exports.newUser = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  try {
    // determines if user has no already registered
    let newUser = await User.findOne({ email });

    if (newUser) {
      return res.status(400).json({ msg: "invalid credentials" });
    }

    // checks if the password matching the confirm password
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ msg: "password does not match the confirm-password" });
    }

    // checks if the password follows conventions
    function isValid(p) {
      return /\d/.test(p) && /[A-Z]/.test(p);
    }

    const validPassword = await isValid(password);

    if (!validPassword) {
      return res.status(400).send({
        msg: "password must have a number and an uppercase letter",
      });
    }

    // creates avatar
    const avatar = gravatar.url(email, {
      s: "200",
      r: "pg",
      d: "mm",
    });

    // creates user object
    newUser = new User({
      username,
      email,
      avatar,
      password,
    });

    // hashes the password
    const salt = await bcrypt.genSalt(10);

    newUser.password = await bcrypt.hash(password, salt);

    // saves new-user object
    await newUser.save();

    const payload = {
      newUser: {
        id: newUser.id,
      },
    };

    jwt.sign(payload, jwtSecret, { expiresIn: "5 days" }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "server error" });
  }
};

// signs in a new user
