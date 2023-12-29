import React, { useState, useEffect } from "react";
import api from "../../services/api";
import carregando from "../../assets/loading.gif";
import MenuAdmin from "../components/menuAdmin";
import { useNavigate } from "react-router-dom";

export default function AdminEditarProduto() {
  const [titulo, setTitulo] = useState("");
  const [descr, setDescr] = useState("");
  const [loading, setLoading] = useState("");
  const userid = localStorage.getItem("sgiuserid");

  const url_string = window.location.href;
  const param = url_string.split("/");

  let navigate = useNavigate();

  async function loadProd() {
  
    const response = await api.get('/treinamentos/produto/'+param[4]);
    const data = await response.data;

    setTitulo(data[0].titulo);
    setDescr(data[0].descr);

  }

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();


    const dataobj = {
      titulo: titulo,
      descr: descr,
      data: new Date()
    };

    await api
      .post("/treinamentos/produto/", dataobj)
      .then((res) => {
        if (res.data.error != undefined) {
          alert(res.data.error);
          setLoading(false);
          return;
        } else {
          setLoading(false);
          navigate("/dashadminTreinamentos");
        }
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
        return;
      });
  }

  useEffect(() => {
    if (userid === null) window.location.href = "/login";
    loadProd();
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
              <img
                src="assets/images/logo-treinarsgi3.png"
                alt="Logo"
                width={200}
              />
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
        <div
          className="page-content-wrapper"
          style={{ paddingTop: 0, minHeight: 650 }}
        >
          {loading && (
            <div style={{ alignItems: "center", textAlign: "center" }}>
              <img src={carregando} width="80"></img>
            </div>
          )}
          <div className="container-fluid custom-container">
            {/* Admin Courses Tab Start */}
            <div className="admin-courses-tab">
              <h3 className="title">Novo Treinamento</h3>
            </div>
            <button
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#modal-newitem"
              type="button"
              style={{ marginRight: 8, float: "right" }}
            >
              Cancelar
            </button>
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#modal-newitem"
              type="button"
              style={{ marginRight: 8, float: "right" }}
            >
              Salvar
            </button>

            {/* Admin Courses Tab End */}
            {/* Admin Courses Tab Content Start */}
            <div className="admin-courses-tab-content">
              <div className="tab-content">
                <div className="form-group">
                  <label className="col-sm-2">
                    Titulo*
                  </label>
                  <div className="col-sm-4">
                    <input
                      id="nome"
                      placeholder="Nome do Treinamento"
                      className="form-control"
                      required
                      maxLength={60}
                      value={titulo}
                      onChange={(event) => setTitulo(event.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2">
                    Descricao*
                  </label>
                  <div className="col-sm-4">
                    <input
                      id="endereco"
                      placeholder="Descricao do Treinamento"
                      className="form-control"
                      required
                      maxLength={50}
                      value={descr}
                      onChange={(event) => setDescr(event.target.value)}
                    />
                  </div>
                </div>


              </div>
            </div>
                        <br></br><br></br>
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
