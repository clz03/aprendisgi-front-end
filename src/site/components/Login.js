import React, {useState, useEffect } from 'react'
import api from "../../services/api";
import carregando from "../../assets/loading.gif";
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';

  export default function Login({ history }) {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [loading, setLoading] = useState("");

    let navigate = useNavigate();

    async function handleSubmit(event) {
        
      setLoading(true);
      event.preventDefault();

      
  
      //const hashEmail = CryptoJS.AES.encrypt(email, skey).toString();
      const hashPwd = CryptoJS.SHA3(pwd).toString();

      const dataobj = { 
          email: email,
          senha: hashPwd
        };

      await api.post('/treinamentos/admauthenticate', dataobj)
      .then((res) => {
          if(res.data.error != undefined){
              alert(res.data.error);
              setLoading(false);
              return;
          }else{
              localStorage.setItem('sgiuseremail', email);
              localStorage.setItem('sgiusernome', res.data.nome);
              localStorage.setItem('sgiuserid', res.data._id);
              localStorage.setItem('sgiadmin', res.data.isadmin);

              setLoading(false);
              navigate('/dashcliente');
          }
      }).catch((error) => {
          alert(error);
          setLoading(false);
          return;
      });    
    };

    useEffect(() => {
      if(localStorage.getItem('sgiuserid') != null){
        navigate('/dashcliente');
        return;
      }
    }, []);

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
                    <form onSubmit={handleSubmit}>
                
                      <div className="single-form">
                        <input type="email" placeholder="Email" value={email} required onChange={event => setEmail(event.target.value)} />
                      </div>
                
                      <div className="single-form">
                        <input type="password" placeholder="Senha" value={pwd} required onChange={event => setPwd(event.target.value)} />
                      </div>
                
                      <div className="single-form">
                      <button type="submit" className="btn btn-primary btn-hover-dark w-100">Entrar</button>
                      </div>

                      {loading && 
                            <div style={{ alignItems:'center', textAlign: 'center' }}>
                                <img src={carregando} width="80"></img>
                            </div>
                        }

                      {/* <div className="single-form">
                        <button className="btn btn-primary btn-hover-dark w-100"><a href="/dashadmin">Entrar Admin</a></button>
                      </div> */}
                
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
