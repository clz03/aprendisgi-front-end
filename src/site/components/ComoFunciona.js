import React from "react";

class ComoFunciona extends React.Component {
    render() {
      return (
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
                <p>Obtenha seu certificado após a realização do treinamento</p>
              </div>
            </div>
            {/* Single Work End */}
          </div>
        </div>
      </div>
      );
    };
};

export default ComoFunciona;