const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

<<<<<<< HEAD

=======
>>>>>>> 103fe74c906e4974ad8a17b309671e9f6a940f02
app.get("/", (req, res) => {
  res.send("Welcome to the AI SaaS Backend!");
});

app.use("/api", userRoutes);
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/user", require("./routes/user.routes"));
app.use("/api/test", require("./routes/test.routes"));
app.use("/api/cart", require("./routes/cart.routes"));
app.use("/api/wishlist", require("./routes/wishlist.routes"));
app.use("/api/packages", require("./routes/package.routes"));
app.use("/api/ai", require("./routes/ai.routes"));


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
