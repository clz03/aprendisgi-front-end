import React from "react";
import MenuSup from "../components/MenuSup";

class Sobre extends React.Component {
  render() {
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
                
               
                
                {/* Header Mobile Toggle Start */}
                <div className="header-toggle d-lg-none">
                  <a className="menu-toggle" href="javascript:void(0)">
                    <span />
                    <span />
                    <span />
                  </a>
                </div>
                {/* Header Mobile Toggle End */}
              </div>
              {/* Header Main End */}
            </div>
          </div>
          {/* Header Main End */}
        </div>
        {/* Header Section End */}
        {/* Mobile Menu Start */}
        <div className="mobile-menu">
          {/* Menu Close Start */}
          <a className="menu-close" href="javascript:void(0)">
            <i className="icofont-close-line" />
          </a>
          {/* Menu Close End */}
          {/* Mobile Top Medal Start */}
          <div className="mobile-top">
            <p>
              <i className="flaticon-phone-call" />{" "}
              <a href="tel:9702621413">(970) 262-1413</a>
            </p>
            <p>
              <i className="flaticon-email" />{" "}
              <a href="mailto:address@gmail.com">address@gmail.com</a>
            </p>
          </div>
          {/* Mobile Top Medal End */}
          {/* Mobile Sing In & Up Start */}
          <div className="mobile-sign-in-up">
            <ul>
              <li>
                <a className="sign-in" href="login.html">
                  Sign In
                </a>
              </li>
              <li>
                <a className="sign-up" href="register.html">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          {/* Mobile Sing In & Up End */}
          {/* Mobile Menu Start */}
          <div className="mobile-menu-items">
            <ul className="nav-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">All Course</a>
                <ul className="sub-menu">
                  <li>
                    <a href="courses.html">Courses</a>
                  </li>
                  <li>
                    <a href="courses-details.html">Courses Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages </a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="404-error.html">404 Error</a>
                  </li>
                  <li>
                    <a href="after-enroll.html">After Enroll</a>
                  </li>
                  <li>
                    <a href="courses-admin.html">
                      Instructor Dashboard (Course List)
                    </a>
                  </li>
                  <li>
                    <a href="overview.html">
                      Instructor Dashboard (Performance)
                    </a>
                  </li>
                  <li>
                    <a href="students.html">Students</a>
                  </li>
                  <li>
                    <a href="reviews.html">Reviews</a>
                  </li>
                  <li>
                    <a href="engagement.html">Course engagement</a>
                  </li>
                  <li>
                    <a href="traffic-conversion.html">
                      Traffic &amp; conversion
                    </a>
                  </li>
                  <li>
                    <a href="messages.html">Messages</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Blog</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog-grid.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Blog Details</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog-details-left-sidebar.html">
                          Blog Details Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-details-right-sidebar.html">
                          Blog Details Right Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          {/* Mobile Menu End */}
          {/* Mobile Menu End */}
          <div className="mobile-social">
            <ul className="social">
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
          {/* Mobile Menu End */}
        </div>
        {/* Mobile Menu End */}
        {/* Overlay Start */}
        <div className="overlay" />
        {/* Overlay End */}

       {/* Register & Login Start */}
<div className="section section-padding">
  <div className="container">
    {/* Register & Login Wrapper Start */}
    <div className="register-login-wrapper">
      <div className="row align-items-center">
        <div className="col-lg-6">
          {/* Register & Login Images Start */}
          <div className="register-login-images">
            <div className="shape-1">
              <img src="assets/images/shape/shape-26.png" alt="Shape" />
            </div>
            <div className="images">
              <img src="assets/images/register-login.png" alt="Register Login" />
            </div>
          </div>
          {/* Register & Login Images End */}
        </div>
        <div className="col-lg-6">
          {/* Register & Login Form Start */}
          <div className="register-login-form">
            <h3 className="title">Login <span>Now</span></h3>
            <div className="form-wrapper">
              <form action="#">
                {/* Single Form Start */}
                <div className="single-form">
                  <input type="email" placeholder="Username or Email" />
                </div>
                {/* Single Form End */}
                {/* Single Form Start */}
                <div className="single-form">
                  <input type="password" placeholder="Password" />
                </div>
                {/* Single Form End */}
                {/* Single Form Start */}
                <div className="single-form">
                  <button className="btn btn-primary btn-hover-dark w-100">Login</button>
                  <a className="btn btn-secondary btn-outline w-100" href="#">Login with Google</a>
                </div>
                {/* Single Form End */}
              </form>
            </div>
          </div>
          {/* Register & Login Form End */}
        </div>
      </div>
    </div>
    {/* Register & Login Wrapper End */}
  </div>
</div>
{/* Register & Login End */}



        {/* Footer Start  */}
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
                        <img src="assets/images/logo-wcqi.png" alt="Logo" />
                      </a>
                    </div>
                    <div className="widget-address">
                      <h4 className="footer-widget-title">WCQI Consultoria</h4>
                      <p>Itupeva, SP.</p>
                    </div>
                    <ul className="widget-info">
                      <li>
                        <p>
                          {" "}
                          <i className="flaticon-email" />{" "}
                          <a href="mailto:address@gmail.com">
                            contato@wcqi.com.br
                          </a>{" "}
                        </p>
                      </li>
                      <li>
                        <p>
                          {" "}
                          <i className="flaticon-phone-call" />{" "}
                          <a href="tel:9702621413">(11) 4567-1413</a>{" "}
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
                <div className="col-lg-3 col-md-6 order-md-2 order-lg-3">
                  {/* Footer Widget Start */}
                  <div className="footer-widget">
                    <h4 className="footer-widget-title">Inscreva-se</h4>
                    <div className="widget-subscribe">
                      <p>
                        Receba as novidades da WCQI em seu e-mail
                        automaticamente.
                      </p>
                      <div className="widget-form">
                        <form action="#">
                          <input type="text" placeholder="Seu Email aqui" />
                          <button className="btn btn-primary btn-hover-dark">
                            Gravar
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Footer Widget End */}
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
                  <p>© 2023 WCQI</p>
                </div>
              </div>
              {/* Footer Copyright End */}
            </div>
          </div>
          {/* Footer Copyright End */}
        </div>
        {/* Footer End */}
        {/*Back To Start*/}
        <a href="#" className="back-to-top">
          <i className="icofont-simple-up" />
        </a>
        {/*Back To End*/}
      </div>
    );
  }
}

export default Sobre;