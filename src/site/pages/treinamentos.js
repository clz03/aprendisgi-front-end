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

        {/* All Courses Start */}
        <div className="section section-padding-02">
          <div className="container">
            {/* All Courses Tabs Menu Start
              <div class="courses-tabs-menu courses-active">
                  <div class="swiper-container">
                      <ul class="swiper-wrapper nav">
                          <li class="swiper-slide"><button class="active" data-bs-toggle="tab" data-bs-target="#tabs1">Segurança</button></li>
                          <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs2">Development</button></li>
                          <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs3">Data Science</button></li>
                          <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs4">Business</button></li>
                          <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs5">Financial</button></li>
                          <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs6">Marketing</button></li>
                          <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs7">Design</button></li>
                      </ul>
                  </div>
    
    
                  <div class="swiper-button-next"><i class="icofont-rounded-right"></i></div>
                  <div class="swiper-button-prev"><i class="icofont-rounded-left"></i></div>
              </div>
              All Courses Tabs Menu End */}
            {/* All Courses tab content Start */}
            <div className="tab-content courses-tab-content">
              <div className="tab-pane fade show active" id="tabs1">
                {/* All Courses Wrapper Start */}
                <div className="courses-wrapper">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      {/* Single Courses Start */}
                      <div className="single-courses">
                        <div className="courses-images">
                          <a href="courses-details.html">
                            <img
                              src="assets/images/courses/cipa.png"
                              alt="Courses"
                            />
                          </a>
                        </div>
                        <div className="courses-content">
                          <h4 className="title">
                            <a href="courses-details.html">NR05 - CIPA</a>
                          </h4>
                          <div className="courses-meta">
                            <span>
                              {" "}
                              <i className="icofont-clock-time" /> 02 hr 15 mins
                            </span>
                            <span>
                              {" "}
                              <i className="icofont-read-book" /> 29 Palestras{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Single Courses End */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* Single Courses Start */}
                      <div className="single-courses">
                        <div className="courses-images">
                          <a href="courses-details.html">
                            <img
                              src="assets/images/courses/altura.jpeg"
                              alt="Courses"
                            />
                          </a>
                        </div>
                        <div className="courses-content">
                          <h4 className="title">
                            <a href="courses-details.html">
                              NR035 - Trabalho em Altura
                            </a>
                          </h4>
                          <div className="courses-meta">
                            <span>
                              {" "}
                              <i className="icofont-clock-time" /> 02 hr 15 mins
                            </span>
                            <span>
                              {" "}
                              <i className="icofont-read-book" /> 29 Palestras{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Single Courses End */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* Single Courses Start */}
                      <div className="single-courses">
                        <div className="courses-images">
                          <a href="courses-details.html">
                            <img
                              src="assets/images/courses/nr20.jpeg"
                              alt="Courses"
                            />
                          </a>
                        </div>
                        <div className="courses-content">
                          <h4 className="title">
                            <a href="courses-details.html">NR20 - Básico</a>
                          </h4>
                          <div className="courses-meta">
                            <span>
                              {" "}
                              <i className="icofont-clock-time" /> 02 hr 15 mins
                            </span>
                            <span>
                              {" "}
                              <i className="icofont-read-book" /> 29 Palestras{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Single Courses End */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* Single Courses Start */}
                      <div className="single-courses">
                        <div className="courses-images">
                          <a href="courses-details.html">
                            <img
                              src="assets/images/courses/nr10.jpeg"
                              alt="Courses"
                            />
                          </a>
                        </div>
                        <div className="courses-content">
                          <h4 className="title">
                            <a href="courses-details.html">NR10 - Básico</a>
                          </h4>
                          <div className="courses-meta">
                            <span>
                              {" "}
                              <i className="icofont-clock-time" /> 02 hr 15 mins
                            </span>
                            <span>
                              {" "}
                              <i className="icofont-read-book" /> 29 Palestras{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Single Courses End */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* Single Courses Start */}
                      <div className="single-courses">
                        <div className="courses-images">
                          <a href="courses-details.html">
                            <img
                              src="assets/images/courses/civil.png"
                              alt="Courses"
                            />
                          </a>
                        </div>
                        <div className="courses-content">
                          <h4 className="title">
                            <a href="courses-details.html">
                              NR18 - Contrução Civil
                            </a>
                          </h4>
                          <div className="courses-meta">
                            <span>
                              {" "}
                              <i className="icofont-clock-time" /> 02 hr 15 mins
                            </span>
                            <span>
                              {" "}
                              <i className="icofont-read-book" /> 29 Palestras{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Single Courses End */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* Single Courses Start */}
                      <div className="single-courses">
                        <div className="courses-images">
                          <a href="courses-details.html">
                            <img
                              src="assets/images/courses/nr13.png"
                              alt="Courses"
                            />
                          </a>
                        </div>
                        <div className="courses-content">
                          <h4 className="title">
                            <a href="courses-details.html">
                              NR13 - Operador de Caldeiras
                            </a>
                          </h4>
                          <div className="courses-meta">
                            <span>
                              {" "}
                              <i className="icofont-clock-time" /> 02 hr 15 mins
                            </span>
                            <span>
                              {" "}
                              <i className="icofont-read-book" /> 29 Palestras{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Single Courses End */}
                    </div>
                  </div>
                </div>
                {/* All Courses Wrapper End */}
              </div>
            </div>
            {/* All Courses tab content End */}
            {/* All Courses BUtton Start */}
            <div className="courses-btn text-center">
              <a href="#" className="btn btn-secondary btn-hover-primary">
                + Mais Treinamentos
              </a>
            </div>
            {/* All Courses BUtton End */}
          </div>
        </div>
        {/* All Courses End */}
        {/* How It Work End */}
        <div className="section section-padding mt-n1">
          <div className="container">
            {/* Section Title Start */}
            <div className="section-title shape-03 text-center">
              <h2 className="main-title">
                Como funciona o <span> treinamento ?</span>
              </h2>
            </div>
            {/* Section Title End */}
            {/* How it Work Wrapper Start */}
            <div className="how-it-work-wrapper">
              {/* Single Work Start */}
              <div className="single-work">
                <img
                  className="shape-1"
                  src="assets/images/shape/shape-15.png"
                  alt="Shape"
                />
                <div className="work-icon">
                  <i className="flaticon-transparency" />
                </div>
                <div className="work-content">
                  <h3 className="title">Escolha seu curso</h3>
                  <p>Encontre o treinamento que se adeque a sua necessidade</p>
                </div>
              </div>
              {/* Single Work End */}
              {/* Single Work Start */}
              <div className="work-arrow">
                <img
                  className="arrow"
                  src="assets/images/shape/shape-17.png"
                  alt="Shape"
                />
              </div>
              {/* Single Work End */}
              {/* Single Work Start */}
              <div className="single-work">
                <img
                  className="shape-2"
                  src="assets/images/shape/shape-15.png"
                  alt="Shape"
                />
                <div className="work-icon">
                  <i className="flaticon-forms" />
                </div>
                <div className="work-content">
                  <h3 className="title">Registre-se</h3>
                  <p>Realize seu cadastro / pedido junto a WCQI</p>
                </div>
              </div>
              {/* Single Work End */}
              {/* Single Work Start */}
              <div className="work-arrow">
                <img
                  className="arrow"
                  src="assets/images/shape/shape-17.png"
                  alt="Shape"
                />
              </div>
              {/* Single Work End */}
              {/* Single Work Start */}
              <div className="single-work">
                <img
                  className="shape-3"
                  src="assets/images/shape/shape-16.png"
                  alt="Shape"
                />
                <div className="work-icon">
                  <i className="flaticon-badge" />
                </div>
                <div className="work-content">
                  <h3 className="title">Seja certificado</h3>
                  <p>
                    Obtenha seu certificado após a realização do treinamento
                  </p>
                </div>
              </div>
              {/* Single Work End */}
            </div>
          </div>
        </div>
        {/* How It Work End */}
        {/* Download App Start */}
        <div className="section section-padding download-section">
          <div className="app-shape-1" />
          <div className="app-shape-2" />
          <div className="app-shape-3" />
          <div className="app-shape-4" />
          <div className="container">
            {/* Download App Wrapper Start */}
            <div className="download-app-wrapper mt-n6">
              {/* Section Title Start */}
              <div className="section-title section-title-white">
                <h5 className="sub-title">Pronto para começar ?</h5>
                <h2 className="main-title">
                  Baixe nosso aplicativo em seu celular
                </h2>
              </div>
              {/* Section Title End */}
              <img
                className="shape-1 animation-right"
                src="assets/images/shape/shape-14.png"
                alt="Shape"
              />
              {/* Download App Button End */}
              <div className="download-app-btn">
                <ul className="app-btn">
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/google-play.png"
                        alt="Google Play"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/images/app-store.png" alt="App Store" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Download App Button End */}
            </div>
            {/* Download App Wrapper End */}
          </div>
        </div>
        {/* Download App End */}

        {/* Brand Logo End */}
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