import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Shop.css";
import Shopnav from "./Shopnav";
import Shop from "./Shop";
import Navbar from "./Components/Navbar";

const Navbarshop = () => {
  const [show, setShow] = useState(true);
  const [shopshow, setShopShow] = useState(false);
  return (
    <>
      <Navbar />
      {show && (
        <div style={{ marginTop: "75px" }}>
          <Shopnav setShow={setShow} setShopShow={setShopShow} />
          <div className=" heroPage">
            <h1 className="heading">Protractor Tutorial</h1>
            <h4 className="text-center">by QAClick Academy</h4>
            <p className="text-center">
              <b>
                {" "}
                This is a demo eCommerce web appplication developed using
                Angular 5 to help QAClick Academy students learn Protractor
                framework for testing Angular applications.
              </b>
            </p>
            <p className="text-center">
              Be assured that product you ordered in this site will never
              arrive, Instead we hope your takeaway will be in learning
              Protractor!
            </p>
          </div>

          <form className="w-100">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="w-100  form-control"
                id="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check ">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>

            <label className="form-check-label " for="exampleCheck1">
              Gender
            </label>

            <div className="dropdown ">
              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>

            <div class="form-check form-check-inline">
              <label for="exampleInputPassword1" className="form-label">
                Employment Status
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                Student
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Employed
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
                disabled
              />
              <label class="form-check-label" for="inlineRadio3">
                Entrepreneur (disabled)
              </label>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  DOB
                </label>
                <input
                  type="date"
                  className="w-100  form-control"
                  id="name"
                  aria-describedby="emailHelp"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Two way binding
                </label>
                <input
                  type="text"
                  className="w-100  form-control"
                  id="name"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </form>
          <footer>Copyright © ProtoCommerce 2018</footer>
        </div>
      )}

      <Shop shopshow={shopshow} />
    </>
  );
};

export default Navbarshop;
