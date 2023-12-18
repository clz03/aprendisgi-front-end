import React, {useState, useEffect } from 'react'
import api from ".././services/api";
import carregando from ".././assets/loading.gif";

  export default function Dashcliente() {

    const [treinamentos, setTreinamentos] = useState([]);
    const [loading, setLoading] = useState("");
    const userid = localStorage.getItem('sgiuserid');

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
                <img src="assets/images/logo-treinarsgi3.png" alt="Logo" width={200} />
              </a>
            </div>
            
            {/* Header Logo End */}
           
            {/* Header Action Start */}
            <div className="login-header-action ml-auto">
              <a className="action author" href="#">
                <img src="assets/images/author/author-15.jpg" alt="Usuario" />
              </a>
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
          <div className="sidebar-wrapper">
            <div className="menu-list">
              <a className="active" href="/dashcliente">
                <img src="assets/images/menu-icon/icon-1.png" alt="Icon" />
              </a>
              {/* <a href="messages.html">
                <img src="assets/images/menu-icon/icon-2.png" alt="Icon" />
              </a>
              <a href="overview.html">
                <img src="assets/images/menu-icon/icon-3.png" alt="Icon" />
              </a>
              <a href="engagement.html">
                <img src="assets/images/menu-icon/icon-4.png" alt="Icon" />
              </a>
              <a href="traffic-conversion.html">
                <img src="assets/images/menu-icon/icon-5.png" alt="Icon" />
              </a> */}
            </div>
          </div>
          {/* Sidebar Wrapper End */}
          {/* Page Content Wrapper Start */}
          
          <div className="page-content-wrapper">
            {loading && 
                <div style={{ alignItems:'center', textAlign: 'center' }}>
                    <img src={carregando} width="80"></img>
                </div>
            }
            <div className="container-fluid custom-container">
              <div className="admin-courses-tab">
                <h3 className="title">Seus Treinamentos</h3>
              </div>
              {/* Admin Courses Tab End */}
              {/* Admin Courses Tab Content Start */}
              
                <div className="admin-courses-tab-content">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab1">
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
                          {/* <div className="content-box">
                            <p>Progreso</p>
                            <span className="count">20%</span>
                          </div> */}
                          <div className="content-box">
                            <p>Status</p>
                            <span className="count">Ativo</span>
                          </div>
                          {/* <div className="content-box">
                            <p>Avaliação</p>
                            <span className="count">
                              4.5
                              <span className="rating-star">
                                <span
                                  className="rating-bar"
                                  style={{ width: "80%" }}
                                />
                              </span>
                            </span>
                          </div> */}
                          
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
