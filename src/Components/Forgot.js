import React from "react";
import { Link } from "react-router-dom";

const Forgot = () => {
  function hide() {
    document.getElementById("hide").style.display = "block";
  }
  return (
    <div className="body-container2">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="form1">
            <h2>Forgot password</h2>
            <p id="hide">
              Please use temporary password 'CGT Academy' to Login.
            </p>
            <input
              type="text"
              className="mb-2"
              placeholder="Name"
              _mstplaceholder="43069"
            />
            <input
              type="text"
              className="mb-2"
              placeholder="Email"
              _mstplaceholder="58058"
            />
            <input
              type="text"
              className="mb-2"
              placeholder="Phone Number"
              _mstplaceholder="176917"
            />
            <div className="forgot-pwd-btn-conainer">
              <Link to="/" className="go-to-login-btn">
                {" "}
                Go to Login
              </Link>
              <Link className="reset-pwd-btn" onClick={hide}>
                {" "}
                Reset Login
              </Link>
            </div>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>CGT Academy</h1>
              <p>
                World className Tutorials on Selenium, Rest Assured, Protractor,
                SoapUI, Appium, Cypress, Jmeter, Cucumber, Jira and many more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
