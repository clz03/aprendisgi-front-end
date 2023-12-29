import React from "react";

class ComoFunciona extends React.Component {
    render() {
      return (
        <div className="section section-padding mt-n1">
        <div className="container">
          {/* Section Title Start */}
          <div className="section-title shape-03 text-center">
            <h2 className="main-title">
            Gestão da educação corporativa do 
            <span> inicio ao fim</span>
            </h2>
            <br></br>
            <p>Crie seu próprio ambiente de gestão de treinamentos, com sua identidade visual e controle </p>
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
                <i className="flaticon-forms" />
              </div>
              <div className="work-content">
                <h5>Crie e envie treinamento aos seus colaboradores</h5>
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
                <i className="flaticon-transparency" />
              </div>
              <div className="work-content">
              <h5>Gerencie prazos para conclusão do treinamento</h5>
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
                <i className="flaticon-increase" />
              </div>
              <div className="work-content">
              <h5>Acompanhe o desempenho de cada colaborador</h5>
              </div>
            </div>
            {/* Single Work End */}
            <div className="work-arrow">
              <img
                className="arrow"
                src="assets/images/shape/shape-17.png"
                alt="Shape"
              />
            </div>
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
              <h5>Envie certificados personalizados</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    };
};

export default ComoFunciona;