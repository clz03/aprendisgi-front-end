import React from "react";
import { useState } from "react";
import MenuSup from "../components/MenuSup";
import MenuMobile from "../components/MenuMobile";
import ComoFunciona from "../components/ComoFunciona";
import BaixarApp from "../components/BaixarApp";
import Footer from "../components/Footer";

export default function Sobre() {
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
      <br></br><br></br><br></br>

      {/* About Start */}
      <div className="section">
        <div className="section-padding-02 mt-n0">
          <div className="container">
            {/* About Items Wrapper Start */}
            <div className="about-items-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  {/* About Item Start */}
                  <div className="about-item">
                    <div className="item-icon-title">
                      <div className="item-icon">
                        <i className="flaticon-tutor" />
                      </div>
                      <div className="item-title">
                        <h3 className="title">Sobre a Treinar SGI</h3>
                      </div>
                    </div>
                    <p>
                      Somos uma equipe de especialistas com mais de 20 anos de
                      experiência e atuamos em implementação e manutenção de
                      sistemas de gestão integrados - Qualidade, Meio Ambiente,
                      Saúde e Segurança do Trabalho, Segurança de Alimentos,
                      Ética e Responsabilidade Social, ESG, Programa de
                      Integridade. Atuamos em diversos segmentos da indústria e
                      também no setor verejista e de serviços.{" "}
                    </p>
                    <p>
                      Desenvolvemos em empresas de todos os segmentos, projetos
                      de Melhoria Contínua, com a aplicação da filosofia Kaizen
                      e das ferramentas do Lean Manufacturing, possibiltando o
                      aprimoramento da gestão, o alcance de resultados e o
                      desenvolvimento de pessoas. Somos especialistas em
                      certificações e homologação de produtos, embalagens para
                      produtos perigosos, colchão, panelas e utensílios, escadas
                      e purificadores de água.{" "}
                    </p>
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
