import React from "react";
import { useState } from "react";
import MenuSup from "../components/MenuSup";
import MenuMobile from "../components/MenuMobile";
import Footer from "../components/Footer";
import LoginComp from "../components/Login";

export default function Login() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <div className="main-wrapper">
      <div className="header-section">
        <div className="header-main">
          <div className="container">
            <div className="header-main-wrapper">
              <div className="header-logo">
                <a href="index.html">
                  <img src="assets/images/logo-aprendisgi.png" alt="Logo" />
                </a>
              </div>

              <MenuSup />

              <div className="header-toggle d-lg-none">
                <a
                  class="menu-toggle"
                  href="javascript:void(0)"
                  onClick={handleClick}
                >
                  <span />
                  <span />
                  <span />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MenuMobile menu={isActive} />



      <LoginComp />


      <Footer />

      {/*Back To Start*/}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up" />
      </a>
      {/*Back To End*/}
    </div>
  );
}

