const { Router } = require('express')
const User = require('../models/user')
const router = Router()

router.post('/', async (req, res) => {
  
  try {
    const user = new User({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    });

    const result = await user.save();

    res.json(result)
  } catch(error) {
    res.json(error)
  }
})

router.get("/", async (req, res) => {
  try {

    const result = await User.find();
    res.json(result);

  } catch (error) {
    res.json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const result = await User.findById(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router