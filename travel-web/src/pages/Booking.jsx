import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Checkout.css";

export default function Booking() {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [user, setUser] = useState(null);
  const [persons, setPersons] = useState(1);

  useEffect(() => {
    fetch(`https://travel-explore-backend.onrender.com/api/packages/${id}`)
      .then(res => res.json())
      .then(setPkg);

    fetch("https://travel-explore-backend.onrender.com/api/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(res => res.json())
      .then(setUser);
  }, [id]);

  if (!pkg) return <p>Loading...</p>;

  const totalAmount = pkg.basePrice * persons;

  const handleConfirm = () => {
    alert(`🎉 Purchase Successful! Total Amount Paid: ₹${totalAmount}`);
  };

  return (
    <>
      <Navbar />

      <div className="checkout-container">
        <h1 className="checkout-title">💳 Checkout</h1>

        <div className="checkout-card">
          <div className="checkout-product">
            <img src={pkg.image} alt={pkg.title} />
            <p>{pkg.title} - ₹{pkg.basePrice} 
              <br/> {pkg.duration}</p>
          </div>
          <h6>Total: ₹{totalAmount}</h6>

          <label>No. of Travellers</label>
          <input
            type="number"
            min="1"
            value={persons}
            onChange={(e) => setPersons(Number(e.target.value))}
          />


          <input
            type="text"
            placeholder="Full Name"
            defaultValue={user?.name} required
          />

          <input
            type="email"
            placeholder="Email"
            defaultValue={user?.email} required
          />

          <input type="text" placeholder="Phone Number" required/>

          <textarea placeholder="Shipping Address" required></textarea>

          <div className="payment-options">
            <label><input type="radio" name="payment" defaultChecked /> Credit Card</label>
            <label><input type="radio" name="payment" /> Debit Card</label>
            <label><input type="radio" name="payment" /> UPI</label>
            <label><input type="radio" name="payment" /> COD</label>
          </div>

          <button className="confirm-btn" onClick={handleConfirm}>
            Confirm Purchase
          </button>
        </div>
      </div>
    </>
  );
}
