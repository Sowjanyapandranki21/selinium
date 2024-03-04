import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // alert("hi");
    if (name == "cgtacademy" && password == "cgt@123") {
      alert("Logged in successfully");
      navigate("/home");
    } else {
      alert("Please enter valid username and password");
    }
    console.log(name);
  };
  return (
    <div className="body-container2">
      <div className="login-container">
        <div className="login-page-container">
          <div className="container" id="container">
            <div className="form-container sign-in-container">
              <form className="form" onSubmit={handleSubmit}>
                <h1>Sign in</h1>

                <input
                  type="text"
                  placeholder="cgtacademy"
                  id="inputUsername"
                  className="w-100"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  _mstplaceholder="113997"
                />

                <input
                  type="password"
                  placeholder="cgt@123"
                  name="inputPassword"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  //   _mstplaceholder="117572"
                  className="w-100 mt-3"
                />
                <div className="checkbox-container">
                  <span>
                    <input
                      type="checkbox"
                      id="chkboxOne"
                      name="chkboxOne"
                      value="rmbrUsername"
                    />
                    <label for="chkboxOne"> Remember my username</label>
                  </span>
                  <span>
                    <input
                      type="checkbox"
                      id="chkboxTwo"
                      name="chkboxTwo"
                      value="agreeTerms"
                    />
                    <label for="chkboxTwo">
                     
                      I agree to the
                      <a href="#"> terms </a> and <a href="#">privacy policy</a>
                      .
                    </label>
                  </span>
                </div>
                <div className="forgot-pwd-container">
                  <Link to="/forgot">Forgot your password?</Link>
                </div>
                <button className="submit signInBtn" type="submit">
                  Sign In
                </button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-right">
                  <h1>CGT Academy</h1>
                  <p>An Academy to Learn Earn &amp; Shine in your QA Career</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
