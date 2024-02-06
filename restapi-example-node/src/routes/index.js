const { Router } =require('express')
const router = Router()

//routes
router.get("/", (req, res) => {
  res.json({ title: "hello world" });
});

router.get("/test", (req, res) => {
  const data = {
    "name": "Paz",
    "website": "paz.com"
  }
  res.json(data);
});

module.exports = router
