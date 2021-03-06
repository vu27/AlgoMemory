const router = require("express").Router();

let User = require("../models/User");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ` + err));
});

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const points = req.body.points;

  const newUser = User({ email, password, points });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch(err => res.status(400).json(`Error: ` + err));
});

module.exports = router;
