const router = require("express").Router();

const { getUsers, newUser } = require("../../helpers/auth");

const isAuth = require("../../middleware/isAuth");

router.get("/", isAuth, getUsers);
router.post("/new-user", newUser);

module.exports = router;
