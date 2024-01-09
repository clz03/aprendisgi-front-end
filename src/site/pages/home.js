import React from "react";
import { useState } from "react";
import MenuSup from "../components/MenuSup";
import MenuMobile from "../components/MenuMobile";
import ListaTreinamentos from "../components/ListaTreinamentos";
import ComoFunciona from "../components/ComoFunciona";
import BaixarApp from "../components/BaixarApp";
import Testemunhos from "../components/Testemunhos";
import Footer from "../components/Footer";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <div className="main-wrapper">
      <div className="header-section">
        <div className="header-main">
          <div className="container g-0">
            <div className="header-main-wrapper">
              <div className="header-logo">
                <a href="index.html">
                  <img src="assets/images/logo-treinarsgi2.png" alt="Logo" width={200} />
                </a>
              </div>

              <MenuSup />

              <div className="header-toggle d-lg-none">
                <a class="menu-toggle" href="javascript:void(0)" onClick={handleClick}>
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
      
      <div className="section slider-section">
        <div className="container">
          {/* Slider Content Start */}
          <div className="slider-content">
            <h4 className="sub-title">Revolucione seu sistema de Gestão</h4>
            <h2 className="main-title">
              Escola de Treinamentos Corporativa, 24 horas para treinar e desenvolver sua equipe
              
            </h2>
            {/* <p>It has survived not only five centuries but also the leap into electronic typesetting.</p> */}
            {/* <a class="btn btn-primary btn-hover-dark" href="#">Start A Course</a> */}
          </div>
          {/* Slider Content End */}
        </div>
        {/* Slider Courses Box Start */}
        <div className="slider-courses-box">
          <img
            className="shape-1 animation-left"
            src="assets/images/shape/shape-5.png"
            alt="Shape"
          />
          {/* <div className="box-content">
            <div className="box-wrapper">
              <i className="flaticon-open-book" />
              <span className="count">+1000</span>
              <p>alunos</p>
            </div>
          </div> */}
          {/* <img
            className="shape-2"
            src="assets/images/shape/shape-6.png"
            alt="Shape"
          /> */}
        </div>
        {/* Slider Courses Box End */}
        {/* Slider Images Start */}
        <div className="slider-images">
          <div className="images">
            <img src="assets/images/slider/slider-5.png" alt="Slider" />
          </div>
        </div>
        {/* Slider Images End */}
        {/* Slider Video Start */}
        <div className="slider-video">
          <img
            className="shape-1"
            src="assets/images/shape/shape-9.png"
            alt="Shape"
          />
          {/* <div className="video-play">
            <img src="assets/images/shape/shape-10.png" alt="Shape" />
            <a
              href="https://www.youtube.com/watch?v=BRvyWfuxGuU"
              className="play video-popup"
            >
              <i className="flaticon-play" />
            </a>
          </div> */}
        </div>
        {/* Slider Video End */}
      </div>
      
      <ComoFunciona />
      
      <ListaTreinamentos />

      <BaixarApp />
      
      <Testemunhos />

      <Footer />

      {/*Back To Start*/}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up" />
      </a>
      {/*Back To End*/}
    </div>
  );
}
