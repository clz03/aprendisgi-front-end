import React from "react";
import { useState } from "react";
import MenuSup from "../components/MenuSup";
import MenuMobile from "../components/MenuMobile";
import Footer from "../components/Footer";
import LoginComp from "../components/Login";

export default function Contato() {
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

      {/* Contact Start */}
<div className="section section-padding">
  <div className="container">
    {/* Contact Wrapper Start */}
    <div className="contact-wrapper">
      <div className="row align-items-center">
        <div className="col-lg-12">
          {/* Contact Info Start */}
          <div className="contact-info">
            <img className="shape animation-round" src="assets/images/shape/shape-12.png" alt="Shape" />
            {/* Single Contact Info Start */}
            <div className="single-contact-info">
              <div className="info-icon">
                <i className="flaticon-phone-call" />
              </div>
              <div className="info-content">
                <h6 className="title">Telefone No.</h6>
                <p><a href="tel:88193326867">(11) 4591-3283</a></p>
              </div>
            </div>
            {/* Single Contact Info End */}
            {/* Single Contact Info Start */}
            <div className="single-contact-info">
              <div className="info-icon">
                <i className="flaticon-email" />
              </div>
              <div className="info-content">
                <h6 className="title">E-mail</h6>
                <p><a href="mailto:edule100@gmail.com">contato@treinarsgi.com.br</a></p>
              </div>
            </div>
            {/* Single Contact Info End */}
            {/* Single Contact Info Start */}
            <div className="single-contact-info">
              <div className="info-icon">
                <i className="flaticon-WhatsApp" />
              </div>
              <div className="info-content">
                <h6 className="title">WhatsApp</h6>
                <p>(11) 97267-6151</p>
              </div>
            </div>
            {/* Single Contact Info End */}
          </div>
          {/* Contact Info End */}
        </div>

      </div>
    </div>
    {/* Contact Wrapper End */}
  </div>
</div>
{/* Contact End */}


      <Footer />

      {/*Back To Start*/}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up" />
      </a>
      {/*Back To End*/}
    </div>
  );
}
