import React from "react";
import "../Components/Button.css";
import Navbar from "./Navbar";

const Button = () => {
  const openWindow = () => {
    window.open("http://www.qaclickacademy.com");
  };
  // function myFunction() {
  //   myWin = window.open(
  //     "http://www.qaclickacademy.com/",
  //     "myWin",
  //     "width=1200, height=600, top=100, left=100, scrollbars=yes, resizable=yes"
  //   );
  // }
  function displayAlert() {
    var value = document.getElementById("name").value;
    alert(
      "Hello " + value + ", share this practice page and share your knowledge"
    );
    document.getElementById("name").value = "";
  }
  function displayConfirm() {
    var value = document.getElementById("name").value;
    window.confirm("Hello " + value + ", Are you sure you want to confirm?");
    document.getElementById("name").value = "";
  }
  function hideElement() {
    var x = document.getElementById("displayed-text");
    //style.visibility = "hidden";
    x.style.display = "none";
  }
  function showElement() {
    var x = document.getElementById("displayed-text");
    //style.visibility = "visible";
    x.style.display = "block";
  }

  return (
    <>
      <Navbar />
      <div classNameName="body-container1  ">
        <h1 className="mt-3 mb-5" style={{ paddingTop: "100px" }}>
          Automation Practice
        </h1>
        <div className="block large-row-spacer ">
          <div className="left-align" id="radio-btn-example">
            <fieldset>
              <legend>Radio Button Example</legend>
              <label for="radio1">
                <input
                  value="radio1"
                  name="radioButton"
                  className="radioButton"
                  type="radio"
                />{" "}
                Radio1
              </label>
              <label for="radio2">
                <input
                  value="radio2"
                  name="radioButton"
                  className="radioButton"
                  type="radio"
                />{" "}
                Radio2
              </label>
              <label for="radio3">
                <input
                  value="radio3"
                  name="radioButton"
                  className="radioButton"
                  type="radio"
                />{" "}
                Radio3
              </label>
            </fieldset>
          </div>
          <div className="cen-left-align" id="select-className-example">
            <fieldset>
              <legend>Suggession className Example</legend>
              <input
                type="text"
                id="autocomplete"
                className="inputs ui-autocomplete-input"
                placeholder="Type to Select Countries"
                autocomplete="off"
              />
            </fieldset>
          </div>
          <div className="cen-right-align">
            <fieldset>
              <legend>Dropdown Example</legend>
              <select
                id="dropdown-className-example"
                name="dropdown-className-example"
              >
                <option value="">Select</option>
                <option value="option1">Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
              </select>
            </fieldset>
          </div>
          <div className="right-align" id="checkbox-example">
            <fieldset>
              <legend>Checkbox Example</legend>
              <label for="bmw">
                <input
                  id="checkBoxOption1"
                  value="option1"
                  name="checkBoxOption1"
                  type="checkbox"
                />{" "}
                Option1
              </label>
              <label for="benz">
                <input
                  id="checkBoxOption2"
                  value="option2"
                  name="checkBoxOption2"
                  type="checkbox"
                />{" "}
                Option2
              </label>
              <label for="honda">
                <input
                  id="checkBoxOption3"
                  value="option3"
                  name="checkBoxOption3"
                  type="checkbox"
                />{" "}
                Option3
              </label>
            </fieldset>
          </div>
        </div>

        <div className="block large-row-spacer">
          <div className="left-align">
            <fieldset>
              <legend>Switch Window Example</legend>
              <button
                id="openwindow"
                className="btn-style className1"
                onClick={openWindow}
              >
                Open Window
              </button>
            </fieldset>
          </div>
          <div className="cen-align">
            <fieldset>
              <legend className="switch-tab">Switch Tab Example</legend>
              <a
                id="opentab"
                className="btn-style className1 className2"
                href="https://www.qaclickacademy.com"
                target="_blank"
              >
                Open Tab
              </a>
            </fieldset>
          </div>
          <div className="">
            <fieldset className="pull-right">
              <legend>Switch To Alert Example</legend>
              <input
                id="name"
                name="enter-name"
                className="inputs w-100"
                placeholder="Enter Your Name"
                type="text"
              />
              <input
                id="alertbtn"
                className="btn-style"
                value="Alert"
                onClick={displayAlert}
                type="submit"
              />
              <input
                id="confirmbtn"
                className="btn-style"
                value="Confirm"
                onClick={displayConfirm}
                type="submit"
              />
            </fieldset>
          </div>
        </div>

        <div className="block large-row-spacer">
          <div className="left-align">
            <fieldset>
              <legend>Web Table Example</legend>
              <table
                id="product"
                name="courses"
                className="table-display"
                border="1"
              >
                <tbody>
                  <tr>
                    <th>Instructor</th>
                    <th>Course</th>
                    <th>Price</th>
                  </tr>
                  <tr>
                    <td>Rahul Shetty</td>
                    <td>
                      Selenium Webdriver with Java Basics + Advanced + Interview
                      Guide
                    </td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Rahul Shetty</td>
                    <td>
                      Learn SQL in Practical + Database Testing from Scratch
                    </td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>Rahul Shetty</td>
                    <td>
                      Appium (Selenium) - Mobile Automation Testing from Scratch
                    </td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Rahul Shetty</td>
                    <td>
                      WebSecurity Testing for Beginners-QA knowledge to next
                      level
                    </td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>Rahul Shetty</td>
                    <td>
                      Learn JMETER from Scratch - (Performance + Load) Testing
                      Tool
                    </td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>Rahul Shetty</td>
                    <td>WebServices / REST API Testing with SoapUI</td>
                    <td>35</td>
                  </tr>
                  <tr>
                    <td>Rahul Shetty</td>
                    <td>
                      QA Expert Course :Software Testing + Bugzilla + SQL +
                      Agile
                    </td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>Rahul Shetty</td>
                    <td>
                      Master Selenium Automation in simple Python Language
                    </td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>Rahul Shetty</td>
                    <td>
                      Advanced Selenium Framework Pageobject, TestNG, Maven,
                      Jenkins,C
                    </td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>Rahul Shetty</td>
                    <td>
                      Write effective QA Resume that will turn to interview call
                    </td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </fieldset>
          </div>
          <div className="right-align">
            <fieldset>
              <legend>Element Displayed Example</legend>
              <input
                id="hide-textbox"
                className="btn-style className2"
                value="Hide"
                onClick={hideElement}
                type="submit"
              />
              <input
                id="show-textbox"
                className="btn-style className2"
                value="Show"
                onClick={showElement}
                type="submit"
              />
              <br />
              <input
                id="displayed-text"
                name="show-hide"
                className="inputs displayed-className"
                placeholder="Hide/Show Example"
                type="text"
              />
            </fieldset>
            <fieldset>
              <legend>Web Table Fixed header</legend>
              <div
                className="tableFixHead"
                style={{ overflowY: "auto", height: "195px" }}
              >
                <table id="product">
                  <thead>
                    <tr>
                      <th style={{ position: "sticky", top: "0" }}>Name</th>
                      <th style={{ position: "sticky", top: "0" }}>Position</th>
                      <th style={{ position: "sticky", top: "0" }}>City</th>
                      <th style={{ position: "sticky", top: "0" }}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alex</td>
                      <td>Engineer</td>
                      <td>Chennai</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <td>Ben</td>
                      <td>Mechanic</td>
                      <td>Bengaluru</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td>Dwayne</td>
                      <td>Manager</td>
                      <td>Kolkata</td>
                      <td>48</td>
                    </tr>
                    <tr>
                      <td>Ivory</td>
                      <td>Receptionist</td>
                      <td>Chennai</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>Jack</td>
                      <td>Engineer</td>
                      <td>Pune</td>
                      <td>32</td>
                    </tr>
                    <tr>
                      <td>Joe</td>
                      <td>Postman</td>
                      <td>Chennai</td>
                      <td>46</td>
                    </tr>
                    <tr>
                      <td>Raymond</td>
                      <td>Businessman</td>
                      <td>Mumbai</td>
                      <td>37</td>
                    </tr>
                    <tr>
                      <td>Ronaldo</td>
                      <td>Sportsman</td>
                      <td>Chennai</td>
                      <td>31</td>
                    </tr>
                    <tr>
                      <td>Smith</td>
                      <td>Cricketer</td>
                      <td>Delhi</td>
                      <td>33</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="totalAmount"> Total Amount Collected: 296 </div>
            </fieldset>
          </div>
        </div>
        <div className="block large-row-spacer">
          <div className="left-align">
            <fieldset style={{ marginBottom: "60px", height: "110px" }}>
              <legend>Mouse Hover Example</legend>
              <div className="mouse-hover">
                <button id="mousehover" className="btn btn-primary">
                  Mouse Hover
                </button>
                <div className="mouse-hover-content">
                  <a href="#top">Top</a>
                  <a href="">Reload</a>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="block large-row-spacer large-row-spacer-iframe">
          <fieldset>
            <legend>iFrame Example</legend>
            <iframe
              id="courses-iframe"
              src="https://www.rahulshettyacademy.com/"
              name="iframe-name"
              style={{ width: "100%", height: "600px" }}
              scrolling="yes"
              marginwidth="0"
              marginheight="0"
              vspace="0"
              hspace="0"
              frameborder="0"
            ></iframe>
          </fieldset>
        </div>

        {/* <!-- ==== CREDITS START == --> */}
        <div className="col-sm-8 text-center w-100 mb-2">
          © 2019 Powered by<strong> CGT</strong>
        </div>
        {/* <!-- ==== CREDITS END == --> */}

        <ul
          id="ui-id-1"
          tabindex="0"
          className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
          style={{ display: "none" }}
        ></ul>
        <div
          role="status"
          aria-live="assertive"
          aria-relevant="additions"
          className="ui-helper-hidden-accessible"
        ></div>
        <footer className="jumbotron text-center header_style"></footer>
      </div>
    </>
  );
};

export default Button;
