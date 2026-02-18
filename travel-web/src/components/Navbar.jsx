import { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.jpeg";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleAuthClick = () => {
    const isLoggedIn = localStorage.getItem("token");

    if (isLoggedIn) {
      localStorage.removeItem("token");
      localStorage.removeItem("loggedInUser");
      window.location.href = "/login";
    } else {
      window.location.href = "/login";
    }
  };

  handleProtectedNav = (path) => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    } else {
      window.location.href = path;
    }
  };




  render() {
    const isLoggedIn = !!localStorage.getItem("token");

    return (
      <div className="NavbarItems">
        <img src={logo} className="navbar-logo" alt="logo" />

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li><Link to="/" className="nav-links">Home</Link></li>
          <li><Link to="/about" className="nav-links">About</Link></li>
          <li><Link to="/gallery" className="nav-links">Gallery</Link></li>
          <li><Link to="/reviews" className="nav-links">Reviews</Link></li>
          <li><Link to="/packages" className="nav-links">Book Now</Link></li>
          <li><button className="icon-btn" onClick={() => this.handleProtectedNav("/wishlist")}>❤️</button></li>          
          <li><button className="icon-btn" onClick={() => this.handleProtectedNav("/cart")}>🛒</button></li>            
          <li><button className="icon-btn" onClick={this.handleAuthClick}>{isLoggedIn ? "🚪" : "🔐"}</button></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
