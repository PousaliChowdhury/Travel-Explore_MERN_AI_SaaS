const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} = require("../controllers/wishlist.controllers");

router.post("/", auth, addToWishlist);
router.get("/", auth, getWishlist);
router.delete("/:id", auth, removeFromWishlist);

module.exports = router;
