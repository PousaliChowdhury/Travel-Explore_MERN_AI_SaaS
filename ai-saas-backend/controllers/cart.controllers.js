const User = require("../models/User");

exports.getCart = async (req, res) => {
  const user = await User.findById(req.userId)
    .populate("cart");

  res.json(user.cart);
};

exports.addToCart = async (req, res) => {
  try {
    const { packageId } = req.body;

    if (!packageId) {
      return res.status(400).json({ message: "packageId is required" });
    }

    const user = await User.findById(req.userId);

    if (user.cart.includes(packageId)) {
      return res.json({ message: "Already in cart" });
    }

    user.cart.push(packageId);
    await user.save();

    res.json({ message: "Added to cart" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.removeFromCart = async (req, res) => {
  const user = await User.findById(req.userId);

  user.cart = user.cart.filter(
    id => id.toString() !== req.params.id
  );

  await user.save();

  res.json({ message: "Removed from cart" });
};

exports.moveToSaveForLater = async (req, res) => {
  const user = await User.findById(req.userId);
  const id = req.params.id;

  user.cart = user.cart.filter(
    item => item.toString() !== id
  );

  user.saveForLater.push(id);

  await user.save();

  res.json({ message: "Moved to save for later" });
};


exports.moveToCart = async (req, res) => {
  const user = await User.findById(req.userId);
  const id = req.params.id;

  if (user.cart.includes(id)) {
    return res.status(400).json({ message: "Already in cart" });
  }

  user.saveForLater = user.saveForLater.filter(
    item => item.toString() !== id
  );

  user.cart.push(id);

  await user.save();

  res.json({ message: "Moved to cart" });
};



