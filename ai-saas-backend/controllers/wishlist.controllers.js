const User = require("../models/User");

exports.addToWishlist = async (req, res) => {
  try {
    const { packageId } = req.body;

    if (!packageId) {
      return res.status(400).json({ message: "packageId is required" });
    }

    const user = await User.findById(req.userId);

    if (user.wishlist.includes(packageId)) {
      return res.json({ message: "Already in wishlist" });
    }

    user.wishlist.push(packageId);
    await user.save();

    res.json({ message: "Added to wishlist" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getWishlist = async (req, res) => {
  const user = await User.findById(req.userId)
    .populate("wishlist");

  res.json(user.wishlist);
};

exports.removeFromWishlist = async (req, res) => {
  const user = await User.findById(req.userId);

  user.wishlist = user.wishlist.filter(
    id => id.toString() !== req.params.id
  );

  await user.save();

  res.json({ message: "Removed from wishlist" });
};
