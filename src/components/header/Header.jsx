import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import logo from "./logo.png";

const Header = () => {
  // const { pathname } = useLocation();

  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      {/* <div className="top-bar">
        <div className="container marhead" > */}
      <div className="row">
        <div className="col-12 ">

        </div>
      </div>
      {/* </div>
      </div> */}
      {/* <div className="float-right">
                <a href="#" className="">
                  <span className="mr-2  icon-twitter"></span>{" "}
                  <span className="d-none d-md-inline-block">Twitter</span>
                </a>
                <span className="mx-md-2 d-inline-block"></span>
                <a href="#" className="">
                  <span className="mr-2  icon-facebook"></span>{" "}
                  <span className="d-none d-md-inline-block">Facebook</span>
                </a>
              </div> */}


      <header
        className="site-navbar js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-3">
              <img
                src={logo}
                alt="..."
                style={{
                  resizeMode: "contain",
                  height: 70,
                }}
              />


            </div>
            <div className="col-3">
              
              <div className="disco"><a href="#" className="">
                      <span className="mr-4  icon-envelope-open-o"></span>
                          <span className="d-none d-md-inline-block">
                              <a href="mailto:info@ByeByeBedbugs.com"> info@byebyebedbugs.ca </a>
                          </span>
                    </a>
               </div>

               <div className="disco">
                  <a href="#" className="">
                    <span className="mr-2  icon-phone"></span>
                  </a>
                  <a href="#" className="">
                  <span className="d-none d-md-inline-block"> &nbsp;&nbsp;&nbsp; +16473346669</span>
                  </a>

              </div>

            </div>




            <div className="col-6 mob">
              <nav
                className="site-navigation text-right ml-auto "
                role="navigation"
              >
                <ul id="pade" className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block pade">
                  <li>
                    <Link to="/" className="nav-link">
                      <h5>Home</h5>
                    </Link>
                  </li>
                  {/* {pathname === "/" ? (
                    <li>
                      <a href="#services" className="nav-link">
                        <h5>Services</h5>
                      </a>
                    </li>
                  ) : (
                    ""
                  )} */}

                  <li>
                    <Link to="/rental" className="nav-link">
                      <h5>Rentals/Buy</h5>
                    </Link>
                  </li>

                

                  <li>
                    <Link to="/aboutus" className="nav-link">
                      <h5>FAQ’s</h5>
                    </Link>
                  </li>

                  {/* <li>
                    <a href="#blog-section" className="nav-link">
                     <h5> Blog</h5>
                    </a>
                  </li> */}
                  <li>
                    <Link to="/contactus" className="nav-link">
                      <h5>Contact</h5>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="toggle-button d-inline-block d-lg-none">
              <a
                href="#"
                className="site-menu-toggle py-5 js-menu-toggle text-black"
              >
                <span className="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
