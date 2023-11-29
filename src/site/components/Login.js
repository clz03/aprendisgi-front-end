import React from "react";

class Login extends React.Component {
    render() {
      return (

        
        <div className="section section-padding">
                <br></br><br></br>
                <br></br><br></br>
        <div className="container">
          
          <div className="register-login-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6">
          
                <div className="register-login-images">
                  <div className="shape-1">
                    <img src="assets/images/shape/shape-26.png" alt="Shape" />
                  </div>
                  <div className="images">
                    <img src="assets/images/register-login.png" alt="Register Login" />
                  </div>
                </div>
                
              </div>
              <div className="col-lg-6">
                
                <div className="register-login-form">
                  <h3 className="title">Acesse <span>Aqui</span></h3>
                  <div className="form-wrapper">
                    <form action="#">
                
                      <div className="single-form">
                        <input type="email" placeholder="Email" />
                      </div>
                
                      <div className="single-form">
                        <input type="password" placeholder="Senha" />
                      </div>
                
                      <div className="single-form">
                        <button className="btn btn-primary btn-hover-dark w-100"><a href="/dashcliente">Entrar</a></button>
                      </div>

                      <div className="single-form">
                        <button className="btn btn-primary btn-hover-dark w-100"><a href="/dashadmin">Entrar Admin</a></button>
                      </div>
                
                    </form>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
      );
    };
};

export default Login;