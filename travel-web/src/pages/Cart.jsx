import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "./CartWish.css";

export default function Cart() {
   const [cart, setCart] = useState([]);
  const [saved, setSaved] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await fetch("http://localhost:7000/api/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await res.json();
    setCart(data.cart);
    setSaved(data.saveForLater);
  };
  
  const addToWishlist = async (pkg) => {
    await fetch("http://localhost:7000/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ packageId: pkg._id }),
    });
    alert("Added to wishlist");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const remove = async (id) => {
    await fetch(`http://localhost:7000/api/cart/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    fetchData();
  };

  const saveForLater = async (id) => {
    await fetch(`http://localhost:7000/api/cart/save/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    fetchData();
  };

  const moveToCart = async (id) => {
    await fetch(`http://localhost:7000/api/cart/move/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    fetchData();
  };


  return (
    <>
    <div className="cart-page">
      <Navbar />

      <h1 className="page-title">Your Cart</h1>

      <div className="cart-container">
  {cart.map(pkg => (
    <div key={pkg._id} className="cart-card">
      <img src={pkg.image} alt={pkg.title} />

      <div className="cart-info">
        <h3>{pkg.title}</h3>
        <p>{pkg.location}</p>
        <p>{pkg.duration}</p>
        <p>₹{pkg.basePrice}</p>

        <div className="cart-actions">
          <button className="btn-wishlist" onClick={() => addToWishlist(pkg)}>❤️ Wishlist</button>
          <button className="btn-save" onClick={() => saveForLater(pkg._id)}>⏳ Save for later</button>
          <button className="btn-remove" onClick={() => remove(pkg._id)}>💔 Remove</button>
          <button className="btn-buy" onClick={() => navigate(`/booking/${pkg._id}`)}>💳 Buy</button>
        </div>
      </div>
    </div>
  ))}
</div>

<hr/>
      {saved.length > 0 && (
        <>
          <h2 className="page-subtitle">Saved for Later</h2>

          <div className="cart-container">
            {saved.map(pkg => (
              <div key={pkg._id} className="cart-card">
                <img src={pkg.image} alt={pkg.title} />
                <div className="cart-info">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.location}</p>
                  <p>{pkg.duration}</p>
                <p>₹{pkg.basePrice}</p>

                  <div className="cart-actions">
                    <button className="btn-move" onClick={() => moveToCart(pkg._id)}>
                      🛒 Move to Cart
                    </button>

                    <button className="btn-remove" onClick={() => remove(pkg._id)}>💔 Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <Footer/></div>
    </>
  );
}
