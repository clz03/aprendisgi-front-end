import React, {useState, useEffect } from 'react'
import api from "../services/api";
import carregando from ".././assets/loading.gif";
import MenuAdmin from "./components/menuAdmin";

  export default function Dashcliente() {

    const [treinamentos, setTreinamentos] = useState([]);
    const [progresso, setProgresso] = useState("0");
    const [loading, setLoading] = useState("");
    const [usernome, setUsernome] = useState(localStorage.getItem('sgiusernome'));
    const userid = localStorage.getItem('sgiuserid');

    async function loadProgresso() {
      setLoading(true);
      const query = '/treinamentos/progresso/usuario/' + userid;
      const response = await api.get(query);
      const data = await response.data;
      if(data[0]?.progresso){
        setProgresso(data[0].progresso);
      }
      setLoading(false);
    };

    async function loadTreinamentos() {
      setLoading(true);
      const query = '/treinamentos/usuarios/' + userid;
      const response = await api.get(query);
      const data = await response.data;
      const treinamentos = data[0].idtreinamentos
      
      //usar variavel treinamentos para buscar treinamentos e listar

      const query2 = '/treinamentos/produto/idlist';
      const response2 = await api.post(query2,treinamentos);
      const data2 = await response2.data;
      setTreinamentos(data2);
      setLoading(false);
    };

    useEffect(() => {
      if(userid === null)
        window.location.href = "/login"; 
        loadProgresso();
        loadTreinamentos();
    }, []);
   
    function handleLogout(event) {
      event.preventDefault();
      localStorage.clear();
      window.location.href = "/login";
    };

    return (
      <div className="main-wrapper main-wrapper-02">
        {/* {userid && */}
        <>
        {/* Login Header Start */}
        <div className="section login-header">
          {/* Login Header Wrapper Start */}
          <div className="login-header-wrapper navbar navbar-expand">
            {/* Header Logo Start */}
            
            <div className="login-header-logo">
              <a href="/">
                {/* <img src="assets/images/logo-treinarsgi3.png" alt="Logo" width={200} /> */}
                <img src="assets/images/supergelados.png" alt="Logo" width={200} />
              </a>
            </div>
            
            {/* Header Logo End */}
           
            {/* Header Action Start */}
            <div className="login-header-action ml-auto">
              <a className="action author" href="#">
                <img src="assets/images/author/author-15.jpg" alt="Usuario" />
              </a>
              <span>Seja bem vindo(a) {usernome}</span>
              <div className="dropdown">
                <button className="action more" data-bs-toggle="dropdown">
                  <span />
                  <span />
                  <span />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className href="#">
                      <i className="icofont-user" /> Editar Perfil
                    </a>
                  </li>
                  <li>
                    <a className href="#" onClick={handleLogout}>
                      <i className="icofont-logout" /> Sair
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Header Action End */}
          </div>
          {/* Login Header Wrapper End */}
        </div>
        {/* Login Header End */}
        {/* Courses Admin Start */}
        <div className="section overflow-hidden position-relative" id="wrapper">
          {/* Sidebar Wrapper Start */}

          <MenuAdmin></MenuAdmin>
          
          {/* Sidebar Wrapper End */}
          {/* Page Content Wrapper Start */}
          
          <div className="page-content-wrapper">
            {loading && 
                <div style={{ alignItems:'center', textAlign: 'center' }}>
                    <img src={carregando} width="80"></img>
                </div>
            }
            <div className="container-fluid custom-container">
              <br></br>
              <p>Bem vindo(a) ao ambiente de treinamentos da Supergelados Jundiaí.
                <br></br>Abaixo você encontrará os treinamentos que seu gestor designou a você. Clique sobre eles para realizar o treinamento e liberar a avaliação.
                <br></br> Após finalizar a avaliação, seu certificado ficará disponivel no sistema.
              </p>
              <div className="admin-courses-tab">
                <h3 className="title">Meus Treinamentos</h3>
              </div>
              {/* Admin Courses Tab End */}
              {/* Admin Courses Tab Content Start */}
              
                <div className="admin-courses-tab-content">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" style={{minHeight:400}} id="tab1">
                      {/* Courses Item Start */}

                      {/* Item Start */}
                      {treinamentos.map(item => (
                        <div className="courses-item">
                        <div className="item-thumb">
                          <a href="/treinamentoManipulador">
                            <img
                              src="assets/images/BPFManipulador.jpeg"
                              alt="Courses"
                              style={{width:280}}
                            />
                          </a>
                        </div>
                        <div className="content-title">
                          <div className="meta">
                            <a href="/treinamentoManipulador" className="action">
                              Treinamento Online
                            </a>
                          </div>
                          <h3 className="title">
                            <a href="/treinamentoManipulador">
                              {item.titulo}
                            </a>
                          </h3>
                        </div>
                        <div className="content-wrapper">
                          <div className="content-box">
                            <p>Progresso</p>
                            <span className="count">{progresso}%</span>
                          </div>
                          <div className="content-box">
                            <p>Status</p>
                            <span className="count">Ativo</span>
                          </div>
                          {progresso == "100" &&
                          <div className="content-box">
                            <p>Realizar</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXa6NsyPv9dtHt6VVgh0XjlojVFCSU3jpNkN3oaOUkh7sKWw/viewform?usp=sf_link" target='_blank' style={{textDecoration:"underline"}}><span className="count">Avaliação</span></a>
                          </div>
                          }
                        </div>
                      </div>
                      ))}

                      {/* Item End */}
                      
                    </div>

                  </div>
                </div>
             
              {/* Admin Courses Tab Content End */}

            </div>
          </div>
           
          {/* Page Content Wrapper End */}
        </div>
        {/* Courses Admin End */}
        

        {/*Back To Start*/}
        <a href="#" className="back-to-top">
          <i className="icofont-simple-up" />
        </a>
        {/*Back To End*/}
        </>
      {/* } */}
      </div>
    );
  }
