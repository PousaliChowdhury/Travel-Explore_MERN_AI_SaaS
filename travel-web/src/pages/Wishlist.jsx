import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CartWish.css";


export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("https://travel-explore-backend.onrender.com/api/wishlist", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then(res => res.json())
      .then(setWishlist);
  }, []);

  const remove = async (id) => {
    await fetch(`https://travel-explore-backend.onrender.com/api/wishlist/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setWishlist(wishlist.filter(i => i._id !== id));
  };

  const addToCart = async (pkg) => {
    await fetch("https://travel-explore-backend.onrender.com/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ packageId: pkg._id }),
    });
    alert("Added to cart");
  };

  return (
    <><div className="cart-page">
      <Navbar />

      <h1 className="page-title">Your Wishlist</h1>

      <div className="cart-container">
  {wishlist.map(pkg => (
    <div key={pkg._id} className="cart-card">
      <img src={pkg.image} alt={pkg.title} />

      <div className="cart-info">
        <h3>{pkg.title}</h3>
        <p>{pkg.location}</p>
        <p>{pkg.duration}</p>
        <p>₹{pkg.basePrice}</p>

        <div className="cart-actions">
          <button className="btn-cart" onClick={() => addToCart(pkg)}>🛒 Add to Cart</button>
          <button className="btn-remove" onClick={() => remove(pkg._id)}>💔 Remove</button>
        </div>
      </div>
    </div>
  ))}
</div>
<Footer/>
</div>
    </>
  );
}
