const router = require("express").Router();
const { Dorm } = require("../models");

router.get("/dormChoices", async (req, res) => {
  try {
    const dormChoice = await Dorm.find({});
    res.json(dormChoice);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
