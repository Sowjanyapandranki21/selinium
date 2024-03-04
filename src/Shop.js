import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import Shopnav from "./Shopnav";
import Navbar from "./Components/Navbar";

const Shop = ({ shopshow, setShow }) => {
  return (
    <>
      <Navbar />
      {shopshow && (
        <div style={{ marginTop: "80px" }}>
          <Shopnav />
          <div>
            <h4 className="proto text-white ">ProtoCommerceHome</h4>
          </div>

          <div class="container3">
            <div class="row">
              <div class="col-lg-3">
                <h1 class="my-4">Shop Name</h1>
                <div class="list-group">
                  <a class="list-group-item">Category 1</a>
                  <a class="list-group-item">Category 2</a>
                  <a class="list-group-item">Category 3</a>
                </div>
              </div>

              <div class="col-lg-9">
                <div
                  class="carousel slide my-4"
                  data-ride="carousel"
                  id="carouselExampleIndicators"
                >
                  <ol class="carousel-indicators">
                    <li
                      class=""
                      data-slide-to="0"
                      data-target="#carouselExampleIndicators"
                    ></li>
                    <li
                      class="active"
                      data-slide-to="1"
                      data-target="#carouselExampleIndicators"
                    ></li>
                    <li
                      class=""
                      data-slide-to="2"
                      data-target="#carouselExampleIndicators"
                    ></li>
                  </ol>
                  <div class="carousel-inner" role="listbox">
                    <div class="carousel-item">
                      <img
                        alt="First slide"
                        class="d-block img-fluid"
                        src="https://placehold.co/900x350"
                      />
                    </div>
                    <div class="carousel-item active">
                      <img
                        alt="Second slide"
                        class="d-block img-fluid"
                        src="https://placehold.co/900x350"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        alt="Third slide"
                        class="d-block img-fluid"
                        src="https://placehold.co/900x350"
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    data-slide="prev"
                    role="button"
                  >
                    <span
                      aria-hidden="true"
                      class="carousel-control-prev-icon"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    data-slide="next"
                    role="button"
                  >
                    <span
                      aria-hidden="true"
                      class="carousel-control-next-icon"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>

                <app-card-list class="row" _nghost-c2="">
                  <app-card _ngcontent-c2="" class="col-lg-3 col-md-6 mb-3">
                    <div class="card h-100">
                      <a>
                        <img alt="" class="card-img-top" src="./Assets/1.jpg" />
                      </a>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a>iphone X</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet numquam aspernatur! Lorem ipsum dolor sit
                          amet.
                        </p>
                      </div>
                      <div class="card-footer">
                        <button class="btn btn-info">
                          Add <i class="zmdi zmdi-shopping-cart"></i>
                        </button>
                        <small class="text-muted">★ ★ ★ ★ ☆</small>
                      </div>
                    </div>
                  </app-card>
                  <app-card _ngcontent-c2="" class="col-lg-3 col-md-6 mb-3">
                    <div class="card h-100">
                      <a>
                        <img alt="" class="card-img-top" src="./Assets/2.jpg" />
                      </a>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a>Samsung Note 8</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet numquam aspernatur! Lorem ipsum dolor sit
                          amet.
                        </p>
                      </div>
                      <div class="card-footer">
                        <button class="btn btn-info">
                          Add <i class="zmdi zmdi-shopping-cart"></i>
                        </button>
                        <small class="text-muted">★ ★ ★ ★ ☆</small>
                      </div>
                    </div>
                  </app-card>
                  <app-card _ngcontent-c2="" class="col-lg-3 col-md-6 mb-3">
                    <div class="card h-100">
                      <a>
                        <img alt="" class="card-img-top" src="./Assets/3.jpg" />
                      </a>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a>Nokia Edge</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet numquam aspernatur! Lorem ipsum dolor sit
                          amet.
                        </p>
                      </div>
                      <div class="card-footer">
                        <button class="btn btn-info">
                          Add <i class="zmdi zmdi-shopping-cart"></i>
                        </button>
                        <small class="text-muted">★ ★ ★ ★ ☆</small>
                      </div>
                    </div>
                  </app-card>
                  <app-card _ngcontent-c2="" class="col-lg-3 col-md-6 mb-3">
                    <div class="card h-100">
                      <a>
                        <img alt="" class="card-img-top" src="./Assets/4.jpg" />
                      </a>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a>Blackberry</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet numquam aspernatur! Lorem ipsum dolor sit
                          amet.
                        </p>
                      </div>
                      <div class="card-footer">
                        <button class="btn btn-info">
                          Add <i class="zmdi zmdi-shopping-cart"></i>
                        </button>
                        <small class="text-muted">★ ★ ★ ★ ☆</small>
                      </div>
                    </div>
                  </app-card>
                </app-card-list>
              </div>
            </div>
          </div>

          <footer class="py-5 bg-dark">Copyright © ProtoCommerce 2018</footer>
        </div>
      )}
    </>
  );
};

export default Shop;
