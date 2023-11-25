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

        {/* About Start */}
<div className="section">

  <div className="section-padding-02 mt-n0">
    <div className="container">
      {/* About Items Wrapper Start */}
      <div className="about-items-wrapper">
        <div className="row">
          <div className="col-lg-4">
            {/* About Item Start */}
            <div className="about-item">
              <div className="item-icon-title">
                <div className="item-icon">
                  <i className="flaticon-tutor" />
                </div>
                <div className="item-title">
                  <h3 className="title">Top Instructors</h3>
                </div>
              </div>
              <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived.</p>
              <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make.</p>
            </div>
            {/* About Item End */}
          </div>
          <div className="col-lg-4">
            {/* About Item Start */}
            <div className="about-item">
              <div className="item-icon-title">
                <div className="item-icon">
                  <i className="flaticon-coding" />
                </div>
                <div className="item-title">
                  <h3 className="title">Portable Program</h3>
                </div>
              </div>
              <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived.</p>
              <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make.</p>
            </div>
            {/* About Item End */}
          </div>
          <div className="col-lg-4">
            {/* About Item Start */}
            <div className="about-item">
              <div className="item-icon-title">
                <div className="item-icon">
                  <i className="flaticon-increase" />
                </div>
                <div className="item-title">
                  <h3 className="title">Improve Quickly</h3>
                </div>
              </div>
              <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived.</p>
              <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make.</p>
            </div>
            {/* About Item End */}
          </div>
        </div>
      </div>
      {/* About Items Wrapper End */}
    </div>
  </div>
</div>
{/* About End */}


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
        {/* Testimonial End */}
        <div className="section section-padding-02 mt-n1">
          <div className="container">
            {/* Section Title Start */}
            <div className="section-title shape-03 text-center">
              <h5 className="sub-title">
                O que nossos alunos falam sobre a WCQI
              </h5>
              <h2 className="main-title">
                Feedback dos nossos <span> clientes</span>
              </h2>
            </div>
            {/* Section Title End */}
            {/* Testimonial Wrapper End */}
            <div className="testimonial-wrapper testimonial-active">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {/* Single Testimonial Start */}
                  <div className="single-testimonial swiper-slide">
                    <div className="testimonial-author">
                      <div className="author-thumb">
                        <img
                          src="assets/images/author/author-06.jpg"
                          alt="Author"
                        />
                        <i className="icofont-quote-left" />
                      </div>
                      <span className="rating-star">
                        <span className="rating-bar" style={{ width: "80%" }} />
                      </span>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Gostei muito do curso e sinceramente acho que todas as
                        empresa deveriam adotar o sistema de reciclagem em
                        alguns cursos neste método, o conteúdo e de fácil
                        similação e a avaliação também contribui para o
                        aprendizado.
                      </p>
                      <h4 className="name">Alexandre Sara</h4>
                      <span className="designation">
                        Gerente Fábrica, Klabin
                      </span>
                    </div>
                  </div>
                  {/* Single Testimonial End */}
                  {/* Single Testimonial Start */}
                  <div className="single-testimonial swiper-slide">
                    <div className="testimonial-author">
                      <div className="author-thumb">
                        <img
                          src="assets/images/author/author-07.jpg"
                          alt="Author"
                        />
                        <i className="icofont-quote-left" />
                      </div>
                      <span className="rating-star">
                        <span className="rating-bar" style={{ width: "80%" }} />
                      </span>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        O Curso é excelente em todos os sentidos: conteúdo,
                        método de ensino e avaliações. Será de grande valia na
                        execução dos nossos trabalhos.
                      </p>
                      <h4 className="name">Melissa Roberts</h4>
                      <span className="designation">
                        Coordenadora Segurança, Airjet
                      </span>
                    </div>
                  </div>
                  {/* Single Testimonial End */}
                  {/* Single Testimonial Start */}
                  <div className="single-testimonial swiper-slide">
                    <div className="testimonial-author">
                      <div className="author-thumb">
                        <img
                          src="assets/images/author/author-03.jpg"
                          alt="Author"
                        />
                        <i className="icofont-quote-left" />
                      </div>
                      <span className="rating-star">
                        <span className="rating-bar" style={{ width: "80%" }} />
                      </span>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Gostei muito do curso e sinceramente acho que todas as
                        empresa deveriam adotar o sistema de reciclagem em
                        alguns cursos neste método, o conteúdo e de fácil
                        similação e a avaliação também contribui para o
                        aprendizado.
                      </p>
                      <h4 className="name">Sara Alexander</h4>
                      <span className="designation">Product Designer, USA</span>
                    </div>
                  </div>
                  {/* Single Testimonial End */}
                </div>
                {/* Add Pagination */}
                <div className="swiper-pagination" />
              </div>
            </div>
            {/* Testimonial Wrapper End */}
          </div>
        </div>
        {/* Testimonial End */}
        {/* Brand Logo Start */}
        <div className="section section-padding-02">
          <div className="container">
            {/* Brand Logo Wrapper Start */}
            <div className="brand-logo-wrapper">
              <img
                className="shape-1"
                src="assets/images/shape/shape-19.png"
                alt="Shape"
              />
              <img
                className="shape-2 animation-round"
                src="assets/images/shape/shape-20.png"
                alt="Shape"
              />
              {/* Section Title Start */}
              <div className="section-title shape-03">
                <h2 className="main-title">
                  Alguns dos nossos <span> clientes</span>
                </h2>
              </div>
              {/* Section Title End */}
              {/* Brand Logo Start */}
              <div className="brand-logo brand-active">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    {/* Single Brand Start */}
                    <div className="single-brand swiper-slide">
                      <img src="assets/images/brand/brand-01.png" alt="Brand" />
                    </div>
                    {/* Single Brand End */}
                    {/* Single Brand Start */}
                    <div className="single-brand swiper-slide">
                      <img src="assets/images/brand/brand-02.png" alt="Brand" />
                    </div>
                    {/* Single Brand End */}
                    {/* Single Brand Start */}
                    <div className="single-brand swiper-slide">
                      <img src="assets/images/brand/brand-03.png" alt="Brand" />
                    </div>
                    {/* Single Brand End */}
                    {/* Single Brand Start */}
                    <div className="single-brand swiper-slide">
                      <img src="assets/images/brand/brand-04.png" alt="Brand" />
                    </div>
                    {/* Single Brand End */}
                    {/* Single Brand Start */}
                    <div className="single-brand swiper-slide">
                      <img src="assets/images/brand/brand-05.png" alt="Brand" />
                    </div>
                    {/* Single Brand End */}
                    {/* Single Brand Start */}
                    <div className="single-brand swiper-slide">
                      <img src="assets/images/brand/brand-06.png" alt="Brand" />
                    </div>
                    {/* Single Brand End */}
                  </div>
                </div>
              </div>
              {/* Brand Logo End */}
            </div>
            {/* Brand Logo Wrapper End */}
          </div>
        </div>
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