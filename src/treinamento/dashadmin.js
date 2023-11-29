import React from "react";
import DataTable from 'react-data-table-component';
import MenuAdmin from "./components/menuAdmin";

export default function dashadmin() {

  const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
];

    return (
      <div className="main-wrapper main-wrapper-02">
        {/* Login Header Start */}
        <div className="section login-header">
          {/* Login Header Wrapper Start */}
          <div className="login-header-wrapper navbar navbar-expand">
            {/* Header Logo Start */}
            <div className="login-header-logo">
              <a href="index.html">
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
          <div className="page-content-wrapper" style={{paddingTop:0}}>
            <div className="container-fluid custom-container">
                          {/* Admin Courses Tab Start */}
              <div className="admin-courses-tab">
                <h3 className="title">Usuarios Cadastrados</h3>
              </div>
              {/* Admin Courses Tab End */}
              {/* Admin Courses Tab Content Start */}
              <div className="admin-courses-tab-content">
              <div className="tab-content">
              
              <DataTable columns={columns} data={data} />

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
