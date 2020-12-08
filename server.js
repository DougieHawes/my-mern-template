require("dotenv").config();

const chalk = require("chalk");

// mongo databse connection
const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(chalk.magenta("mongo database connected"))
);

// express server setup
const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () =>
  console.log(chalk.green(`express app running on port:${port}`))
);

// express routes
app.use(express.json());

const bulletinRoute = require("./routes/api/bulletin.js");
const postRoute = require("./routes/api/post.js");
const profileRoute = require("./routes/api/profile.js");
const userRoute = require("./routes/api/user.js");

app.use("/api/bulletin", bulletinRoute);
app.use("/api/profile", profileRoute);
app.use("/api/post", postRoute);
app.use("/api/user", userRoute);
