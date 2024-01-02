import React from "react";

class MenuSup extends React.Component {
    render() {
      return (
        <>
        <div className="header-menu d-none d-lg-block">
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
                        <li><a href="/login">- Canal de Denúncias</a></li>
                        <li><a href="/login">- Quizes</a></li>
                        <li><a href="/login">- Canal de Sugestões e Melhorias</a></li>
                        <li><a href="/login">- Código de Ética e Conduta</a></li>
                        <li><a href="/login">- Avaliação de Competência e Desempenho</a></li>
                        <li><a href="/login">- Integração</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="/contato">Contato</a>
                    </li>
                  </ul>
          </div>
          <div className="header-sign-in-up d-none d-lg-block">
          <ul>
            <li>
              <a className="sign-up" href="/login">
                Acessar
              </a>
            </li>
          </ul>
        </div>
        </>
      );
    };
};

export default MenuSup;