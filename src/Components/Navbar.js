import React from "react";
import { Nav, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav  ">
        <h1>CGT</h1>
        <ul className="navbar">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>

          <li>
            <NavLink to="/greenkart">GreenKart</NavLink>
          </li>
          <li>
            <NavLink to="/form">Form</NavLink>
          </li>
          <li>
            <NavLink to="/buttons">Buttons</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
