import React, {useState, useEffect } from 'react'
import api from "../../services/api";
import carregando from "../../assets/loading.gif";
import DataTable from 'react-data-table-component';
import MenuAdmin from "../components/menuAdmin";
import { useNavigate } from 'react-router-dom';

export default function DashadminTreinamentos() {

  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState("");
  const [rowsSel, setRowsSel] = useState([]);
  const userid = localStorage.getItem('sgiuserid');

  let navigate = useNavigate();

  const columns = [
    {
        name: 'Titulo',
        selector: 'titulo'
    },
    {
        name: 'Descrição',
        selector: 'descr'
    }
];

async function loadTreinamentos() {
  setLoading(true);
  const query = '/treinamentos/produto';
  const response = await api.get(query);
  const data = await response.data;
  setUsuarios(data);
  setLoading(false);
};

const goToPage = (state) => {
  navigate("/treinamento/" + state._id);
};

const handleChange = (state) => {
  setRowsSel(state.selectedRows);
};

useEffect(() => {
  if(userid === null)
    window.location.href = "/login"; 
  loadTreinamentos();
}, []);

    return (
      <div className="main-wrapper main-wrapper-02">
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
                    <a className href="/">
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
          <div className="page-content-wrapper" style={{paddingTop:0, minHeight:650}}>
          {loading && 
                <div style={{ alignItems:'center', textAlign: 'center' }}>
                    <img src={carregando} width="80"></img>
                </div>
            }
            <div className="container-fluid custom-container">
                          {/* Admin Courses Tab Start */}
              <div className="admin-courses-tab">
                <h3 className="title">Treinamentos</h3>
              </div>
              {/* Admin Courses Tab End */}
              {/* Admin Courses Tab Content Start */}
              <div className="admin-courses-tab-content">
              <div class="tab-btn">
                    <a href="/treinamentoNovo" class="btn btn-primary btn-hover-dark">Novo Treinamento</a>
                </div>
              <div className="tab-content">
              
              <DataTable 
               columns={columns}
               data={usuarios}
               onRowClicked={goToPage}
               pointerOnHover
               highlightOnHover
               selectableRows // add for checkbox selection
               Clicked
               onSelectedRowsChange={handleChange}
               noDataComponent={""} />

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
      </div>
    );
}
