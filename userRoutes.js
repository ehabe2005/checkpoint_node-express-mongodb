const express = require ("express");
const router = express.Router()
const { user } = require("./models");


router.post("/users", async(req,res) => {
  const {name, age} = req.body
  const users = new user({ name, age})
  await users.save();
  return res.status(201).json(users);
});

router.get("/", async (req, res) => {
    return res.json({ message: "Hello World" });
  });

  router.get("/users", async (req, res) => {
    const allusers = await user.find()
    return res.status(200).json(allusers);
  });

  router.delete("/users/:id", async (req, res) => {
    const { id } = req.params;
    const deleteuser = await user.findByIdAndDelete(id);
    return res.status(200).json(deleteuser);
  })


module.exports = router