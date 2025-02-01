import { NavLink } from "react-router-dom";
import Button from "../common/Button/Button";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo-wrapper">
        <h1>Foodies</h1>
      </div>

      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
        </ul>
      </div>

      <div className="btn-wrapper">
        <NavLink to={"/order-now"}>
          <Button text="Order Now" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
