import React, { useState, useEffect } from "react";
import FilterCard from "./FilterCard";
import Buttons from "./Buttons";
import "./Source.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carddes from "./Carddes.json"; 

const Source = () => {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);

  useEffect(() => {
    fetch("https://travel-explore-backend.onrender.com/api/packages")
      .then(res => res.json())
      .then(data => {
        setPackages(data);
        setFilteredPackages(data);
      });
  }, []);

  const filterItem = (category) => {
    if (category === "All") {
      setFilteredPackages(packages);
    } else {
      setFilteredPackages(
        packages.filter(p => p.category === category)
      );
    }
  };

  const addToCart = async (pkg) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Login first");

    const res = await fetch("https://travel-explore-backend.onrender.com/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ packageId: pkg._id }),
    });

    const data = await res.json();
    alert(data.message);
  };

  const addToWishlist = async (pkg) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Login first");

    const res = await fetch("https://travel-explore-backend.onrender.com/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ packageId: pkg._id }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <>
      <div className="full">
        <h1 className="section-title">Explore Top Packages</h1>
        <div className="row package-grid">
          {Carddes.map(card => (
            <div className="package-item" key={card.id}>
              <Card style={{ width: "18rem", margin:"50px", marginLeft: "90px" }}>
                <Card.Img
                  variant="top"
                  src={require(`../Assets/${card.img}.jpg`)}
                  style={{ height: "20vh", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() =>
                      document
                        .getElementById("packages-by-interest")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <div id="packages-by-interest" className="container-fluid">
          <h1 className="section-title">Packages By Interest</h1>

          <Buttons
  filterItem={filterItem}
  menuItems={[...new Set(packages.map(p => p.category)), "All"]}
/>


          <FilterCard
            item={filteredPackages}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        </div>

      </div>
    </>
  );
};

export default Source;
