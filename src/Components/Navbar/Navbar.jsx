import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="svg">
        <img src={logo} />
      </div>

      <ul className="nav-menu">
        <NavLink to="/home" className="nav-a ">
          ANA SAYFA
        </NavLink>
        <NavLink to="/product" className="nav-a ">
          MEGA
        </NavLink>
        <NavLink to="/about" className="nav-a ">
          HAKKIMIZDA
        </NavLink>
        <NavLink to="/contact" className="nav-contact">
          İLETİŞİM
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
