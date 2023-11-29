import React from "react";
import { useState } from "react";
import MenuSup from "../components/MenuSup";
import MenuMobile from "../components/MenuMobile";
import ComoFunciona from "../components/ComoFunciona";
import BaixarApp from "../components/BaixarApp";
import Footer from "../components/Footer";

export default function Detalhe() {
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

      <br></br><br></br><br></br>

      {/* About Start */}
      <div className="section">
        <br></br><br></br>
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
                        <h3 className="title">BPF - Alimentos</h3>
                      </div>
                    </div>
                    <p>
                    As Boas Práticas de Fabricação (BPF), referem-se à um conjunto de práticas que asseguram as condições higiênico-sanitárias essenciais para a fabricação de alimentos, garantindo um ambiente seguro e adequado. 
                    </p>
                    <p>
                    As boas práticas ou programas de pré-requisitos são imprescindíveis para dar sustentação ao conjunto das medidas de controle, quando falamos em Plano APPCC (análise de perigos e pontos críticos de controle).

Para que não haja nenhuma confusão, é importante salientar que PPR e BPF são, basicamente, a mesma coisa, certo?

Portanto, de acordo com a ISO 22000, a BPF (ou PPR) tem papel fundamental em fatores como controle de pragas, higiene e saúde dos colaboradores, higiene do ambiente, equipamentos, superfície de contato, etc. Em suma, o objetivo é garantir as condições higiênico-sanitárias dos estabelecimentos de produção, armazenagem e transporte dos alimentos.

Bom, até aqui já é possível notar que estamos tratando de um assunto sério e práticas imprescindíveis na indústria alimentícia não é mesmo?
                    </p>
                    <p>Clique no botao "Acessar" e faça seu login para iniciar o treinamento</p>
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
