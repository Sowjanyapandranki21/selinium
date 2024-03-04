import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="landingpage">
      <div className="bg-back"></div>
      <div>
        <Navbar />
      </div>
      <div class="details">
        <p>I'AM ANURAG</p>
        <h1>WELCOME TO JAVA SELENIUM COURSE </h1>
        {/* <a href="Login.html" class="btn">GO TO LOGIN PAGE</a> */}
      </div>
    </div>
  );
};

export default Home;
