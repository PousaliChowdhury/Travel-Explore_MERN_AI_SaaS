const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.userId)
    .populate("cart")
    .populate("wishlist")
    .populate("saveForLater");

  res.json({
    cart: user.cart,
    wishlist: user.wishlist,
    saveForLater: user.saveForLater
  });
});

module.exports = router;
