const express = require("express");
const Player = require("../models/playerModel");

const router = express.Router();

// Getting all player
router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    players.length >= 1
      ? res.status(201).json({ data: players })
      : res.status(201).json("There is actually no players !");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// Post one
router.post("/", async (req, res) => {
  const { userName, time, move } = req.body;
  const player = new Player({
    userName,
    time,
    move,
    score: time * move,
  });

  try {
    const newPlayer = await player.save();
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
