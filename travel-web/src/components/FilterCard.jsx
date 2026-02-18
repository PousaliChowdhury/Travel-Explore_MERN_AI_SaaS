import Button from "react-bootstrap/Button";

const FilterCard = ({ item, addToCart, addToWishlist }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {item.map((Val) => (
          <div
            className="col-md-3 col-sm-4 card m-3 p-3 border-5"
            key={Val._id || Val.id}
          >
            <div className="card-img-top text-center">
              <img
                src={Val.img || Val.image || "/placeholder.jpg"}
                alt={Val.title}
                className="photo w-105"
                style={{ height: "200px", objectFit: "cover" }}
              />
            </div>

            <div className="card-body">
              <div
                className="card-title fw-bold fs-4"
                style={{ color: "darkblue" }}
              >
                {Val.title}
              </div>

              <div className="card-text" style={{ color: "darkblue" }}>
                {Val.desc1 || `Starting from ₹${Val.basePrice}/-`}
              </div>

              <div className="card-text" style={{ color: "darkblue" }}>
                {Val.desc2 || Val.duration || Val.days}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => addToWishlist(Val)}
                >
                  ❤️ Wishlist
                </Button>

                <Button
                  variant="success"
                  size="sm"
                  onClick={() => addToCart(Val)}
                >
                  🛒 Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCard;
