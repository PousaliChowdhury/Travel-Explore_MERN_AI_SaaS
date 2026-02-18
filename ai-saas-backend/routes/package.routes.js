const router = require("express").Router();
const Package = require("../models/Package");

router.get("/", async (req, res) => {
  const packages = await Package.find();
  res.json(packages);
});

router.get("/:id", async (req, res) => {
  const pkg = await Package.findById(req.params.id);
  res.json(pkg);
});

module.exports = router;
