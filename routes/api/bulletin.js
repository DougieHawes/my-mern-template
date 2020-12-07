const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("bulletin route");
});

module.exports = router;
