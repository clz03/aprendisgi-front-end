import React, {useState, useEffect } from 'react'
import api from "../services/api";
import carregando from ".././assets/loading.gif";
import MenuAdmin from "./components/menuAdmin";
import DataTable from 'react-data-table-component';

  export default function Dashgestor() {

    const CustomAvaliacao = ({ row }) =>
      ( "0 tentativas" );

    const CustomCertificado = ({ row }) =>
      ( "Não disponível" );

    const columns = [
      {
          name: 'Nome',
          selector: 'nome'
      },
      {
          name: 'Progresso',
          selector: 'progresso'
      },
      {
        name: 'Avaliação',
        cell: (row) => <CustomAvaliacao row={row} />,
      },
      {
        name: 'Certificado',
        cell: (row) => <CustomCertificado row={row} />,
      }
  ];
  

    const [usuarios, setUsuarios] = useState([]);
    const [procusuarios, setProcsuarios] = useState([]);
    const [treinamentos, setTreinamentos] = useState([]);
    const [treinamento, setTreinamento] = useState([]);
    const [progresso, setProgresso] = useState([]);
    const [loading, setLoading] = useState(false);
    const [usernome, setUsernome] = useState(localStorage.getItem('sgiusernome'));
    const userid = localStorage.getItem('sgiuserid');
    const empresaid = localStorage.getItem('sgiempresaid');
    

    async function loadUsuarios() {
      setLoading(true);
      const query = '/treinamentos/usuarios/empresa/tenantid';
      const response = await api.get(query,{headers: {'x-tenantid' : empresaid }});
      const data = await response.data;
      setUsuarios(data);
      setLoading(false);
    };

    async function loadTreinamentos() {
      setLoading(true);
      const query = '/treinamentos/produto';
      const response = await api.get(query);
      const data = await response.data;
      setTreinamentos(data);
      setLoading(false);
    };

    async function loadProgresso(selectedValue) {
      setTreinamento(selectedValue);
      if(selectedValue.length > 0){
        setLoading(true);
        
        let cloneArr = [];
        let index = 0;
        for (const element of usuarios) {
        //usuarios.forEach(async function (element, index) {
          const query = '/treinamentos/progresso/usuario/' + element._id + '/treinamento/' + selectedValue
          const response = await api.get(query);
          const data = await response.data;
          cloneArr[index] = {
            nome: "",
            progresso: ""
          };
          if(data[0]?.progresso){
            cloneArr[index].nome = element.nome;
            cloneArr[index].progresso = data[0].progresso + "%";
          } else {
            cloneArr[index].nome = element.nome;
            cloneArr[index].progresso = "0%";
          }
          index ++;
        };
        setProcsuarios(cloneArr);
        setLoading(false);
      }
    };

    useEffect(() => {
      if(userid === null)
        window.location.href = "/login"; 
      loadUsuarios();
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
              <div className="admin-courses-tab">
                <h3 className="title">Acompanhamento Progresso</h3>
              </div>
              {/* Admin Courses Tab End */}
              {/* Admin Courses Tab Content Start */}
              
                <div className="admin-courses-tab-content">
                  <div className="tab-content">
                  <div className="single-form">
                    <select
                          id="idtreinamentos"
                          value={treinamento}
                          style={{borderColor: "#a1a1a1", height: 50}}
                          placeholder="Escolha o treinamento"
                          onChange={event =>
                            loadProgresso(event.target.value)
                          }
                        >
                          <option
                              key=''
                              value=''
                              disabled
                            >
                              -- Selecione --
                            </option>
                          {treinamentos.map(item => (
                            <option
                              key={item._id}
                              value={item._id}
                            >
                              {item.titulo}
                            </option>
                          ))}
                        </select>
                  </div>
                    <div className="tab-pane fade show active" style={{minHeight:400}} id="tab1">
                      {/* Courses Item Start */}

                      <DataTable columns={columns} data={procusuarios} noDataComponent="Selecione o treinamento" />
                      
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
