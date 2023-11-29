import React from "react";
import { useState } from "react";
import MenuSup from "../components/MenuSup";
import MenuMobile from "../components/MenuMobile";
import ComoFunciona from "../components/ComoFunciona";
import ListaTreinamentos from "../components/ListaTreinamentos";
import BaixarApp from "../components/BaixarApp";
import Footer from "../components/Footer";

export default function Treinamentos() {
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
                  <img src="assets/images/logo-treinarsgi2.png" alt="Logo" width={200} />
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
      <br></br><br></br>
      <br></br><br></br>
      <ListaTreinamentos />

      <ComoFunciona />

      <BaixarApp />

      <Footer />

      {/*Back To Start*/}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up" />
      </a>
      {/*Back To End*/}
    </div>
  );
}
