const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  addToCart,
  getCart,
  removeFromCart,
  moveToCart,
  moveToSaveForLater
} = require("../controllers/cart.controllers");

router.post("/", auth, addToCart);
router.get("/", auth, getCart);
router.delete("/:id", auth, removeFromCart);
router.put("/save/:id", auth, moveToSaveForLater);
router.put("/move/:id", auth, moveToCart);


module.exports = router;
