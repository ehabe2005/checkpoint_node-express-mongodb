const mongoose= require("mongoose");
const express = require ("express");

const { user } = require("./models");

const app= express();
app.use(express.json());

module.exports = (app) => {
app.get("/", async (req, res) => {
    return res.json({ message: "Hello World" });
  });

  app.get("/users", async (req, res) => {
    const allusers = await user.find()
    return res.status(200).json(allusers);
  });

  app.get("/users/:id", async (req,res) => {
    const {id}= req.params;
    const user = await user.findById(id);
    return res.status(200).json(user);
  });

  app.post("/users",async(req,res) => {
    const newUser = new user({...req.body});
    const inserteduser= await newUser.save();
    return res.status(201).json(inserteduser);
  });

  app.put("/users/:id", async (req, res) => {
    const { id } = req.params;
    await user.updateOne({ id }, req.body);
    const updateduser = await user.findById(id);
    return res.status(200).json(updateduser);
  });

  app.delete("/user/:id", async (req, res) => {
    const { id } = req.params;
    const deleteduser = await user.findByIdAndDelete(id);
    return res.status(200).json(deleteuser);
  })};

