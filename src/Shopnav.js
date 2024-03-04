import React from "react";
import { useState } from "react";
import Navbarshop from "./Navbarshop";
import Shop from "./Shop";

const Shopnav = ({ setShow, setShopShow }) => {
  const handleHome = () => {
    setShopShow(false);
    setShow(true);
  };
  const handleShop = () => {
    setShopShow(true);
    setShow(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg  w-100  bg-dark ">
        <div className="container-fluid">
          <h1>ProtoCommerce</h1>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-3  ">
              <li className="nav-item   ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href=""
                  onClick={handleHome}
                >
                  Home
                </a>
              </li>
              <li className="nav-item  mx-5">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={handleShop}
                >
                  Shop
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Navbarshop show={show}/> */}
      <Shop setShow={setShow} />
    </div>
  );
};

export default Shopnav;
