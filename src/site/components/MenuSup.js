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
                      <a href="/treinamentos">Treinamentos</a>
                    </li>
                    <li>
                      <a href="/sobre">Sobre </a>
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