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
          <div className="header-sign-in-up d-none d-lg-block">
          <ul>
            <li>
              <a className="sign-up" href="https://treinarsgi-plataforma.netlify.app">
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