const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: String,
    image: String,
    location: String,
    duration: String,
    basePrice: {
      type: Number,
      required: true,
    },

    pricing: {
      hotel: { type: Number, default: 0 },
      transport: { type: Number, default: 0 },
      food: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Package", packageSchema);
