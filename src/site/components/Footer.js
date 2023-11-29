import React from "react";

class Footer extends React.Component {
    render() {
      return (
        <div className="section footer-section">
        {/* Footer Widget Section Start */}
        <div className="footer-widget-section">
          <img
            className="shape-1 animation-down"
            src="assets/images/shape/shape-21.png"
            alt="Shape"
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 order-md-1 order-lg-1">
                {/* Footer Widget Start */}
                <div className="footer-widget">
                  <div className="widget-logo">
                    <a href="#">
                      <img src="assets/images/logo-treinarsgi3.png" alt="Logo" />
                    </a>
                  </div>
                  
                  <ul className="widget-info">
                    <li>
                      <p>
                        {" "}
                        <i className="flaticon-email" />{" "}
                        <a href="mailto:contato@treinarsgi.com.br">
                          contato@treinarsgi.com.br
                        </a>{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        <i className="flaticon-phone-call" />{" "}
                        <a href="tel:1145671413">(11) 4567-1413</a>{" "}
                      </p>
                    </li>
                  </ul>
                  <ul className="widget-social">
                    <li>
                      <a href="#">
                        <i className="flaticon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-skype" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer Widget End */}
              </div>
              <div className="col-lg-6 order-md-3 order-lg-2">
                {/* Footer Widget Link Start */}
                <div className="footer-widget-link"></div>
                {/* Footer Widget Link End */}
              </div>
              
            </div>
          </div>
          <img
            className="shape-2 animation-left"
            src="assets/images/shape/shape-22.png"
            alt="Shape"
          />
        </div>
        {/* Footer Widget Section End */}
        {/* Footer Copyright Start */}
        <div className="footer-copyright">
          <div className="container">
            {/* Footer Copyright Start */}
            <div className="copyright-wrapper">
              <div className="copyright-link">
                <a href="#">Termos de Serviço</a>
                <a href="#">Politica de Privacidade</a>
                <a href="#">Sitemap</a>
              </div>
              <div className="copyright-text">
                <p>© 2023 TreinarSGI</p>
              </div>
            </div>
            {/* Footer Copyright End */}
          </div>
        </div>
        {/* Footer Copyright End */}
      </div>
      );
    };
};

export default Footer;