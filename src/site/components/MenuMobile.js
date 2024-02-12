import React from "react";
import { useState } from "react";

export default function MenuMobile(props) {
    var isActive = props.menu;

    const turnOffMenu = () => {
        document.getElementById("menu-mobile").className = "mobile-menu";
        document.getElementById("mobile-overlay").className = "overlay";
      };

    return (
        <>
        <div id='menu-mobile' className={isActive ? 'mobile-menu open' : 'mobile-menu'}>

          <a className="menu-close" href="javascript:void(0)" onClick={() => turnOffMenu()}>
            <i className="icofont-close-line" />
          </a>

          <div className="mobile-top">
            <p>
              <i className="flaticon-phone-call" />{" "}
              <a href="tel:9702621413">(11) 4591-3283</a>
            </p>
            <p>
              <i className="flaticon-email" />{" "}
              <a href="mailto:address@gmail.com">contato@treinarsgi.com.br</a>
            </p>
          </div>

          <div className="mobile-sign-in-up">
            <ul>
              <li>
                <a className="sign-in" href="https://treinarsgi-plataforma.netlify.app">
                  Acessar
                </a>
              </li>
            </ul>
          </div>

          <div className="mobile-menu-items">
            <ul className="nav-menu">
            <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/sobre">Quem Somos </a>
                    </li>
                    <li>
                      <a href="#">Módulos</a>
                      <ul class="sub-menu">
                      <li><a href="/treinamentos">- Treinamentos</a></li>
                        <li><a href="https://treinarsgi-plataforma.netlify.app">- Canal de Denúncias</a></li>
                        <li><a href="https://treinarsgi-plataforma.netlify.app">- Quizes</a></li>
                        <li><a href="https://treinarsgi-plataforma.netlify.app">- Canal de Sugestões e Melhorias</a></li>
                        <li><a href="https://treinarsgi-plataforma.netlify.app">- Código de Ética e Conduta</a></li>
                        <li><a href="https://treinarsgi-plataforma.netlify.app">- Avaliação de Competência e Desempenho</a></li>
                        <li><a href="https://treinarsgi-plataforma.netlify.app">- Integração</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="/contato">Contato</a>
                    </li>
            </ul>
          </div>

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

        </div>

        <div id='mobile-overlay' className={isActive ? 'overlay open' : 'overlay'} />
        </>

    );
  }


