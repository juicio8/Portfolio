import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IsOpenContext } from "../context/IsOpenContext";
import "../styles/Navbar.css";

export default function Navbar() {
  const { burger, handleBurger } = useContext(IsOpenContext);
  const logo = "<deni.dev/>";

  let classList = burger ? "open" : "";
  return (
    <nav className="relative">
      <div className="nav-mobile">
        <div className="logo">
          <NavLink to="/">{logo}</NavLink>
        </div>
        <div className={`menu-btn ${classList}`} onClick={handleBurger}>
          <div className="menu-btn__burger"></div>
        </div>
      </div>
      <div className={`links-section ${classList}`}>
        <div>
          <NavLink to="/about">About</NavLink>
        </div>
        <div>
          <NavLink to="/works">My Works</NavLink>
        </div>
        <div>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
