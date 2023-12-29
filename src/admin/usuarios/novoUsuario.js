import React, { useState, useEffect } from "react";
import api from "../../services/api";
import carregando from "../../assets/loading.gif";
import MenuAdmin from "../components/menuAdmin";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

export default function AdminNovoUsuarios() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [telefone, setTelefone] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState("");
  const [empresas, setEmpresas] = useState([]);
  const [treinamentos, setTreinamentos] = useState([]);
  const [idempresa, setIdempresa] = useState("");
  const [idtreinamento, setIdtreinamento] = useState("");
  const [newitem, setNewItem] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle;
  const userid = localStorage.getItem("sgiuserid");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");

  let navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function loadEmpresas() {
    const query = "/treinamentos/empresa";
    const response = await api.get(query);
    const data = await response.data;
    setEmpresas(data);
    setLoading(false);
  }

  async function loadTreinamentos() {
    setLoading(true);
    const query = "/treinamentos/produto";
    const response = await api.get(query);
    const data = await response.data;
    setTreinamentos(data);
    setLoading(false);
  }

  async function addNewItem() {
    setLoading(true);

    const dataobj = {
      nome: newitem,
    };

    //await api.post("/checklistcompitemManual", dataobj);
    setLoading(false);
  }

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();

    const hashPwd = CryptoJS.SHA3(pwd).toString();

    const dataobj = {
      nome: nome,
      email: email,
      pwd: hashPwd,
      telefone: telefone,
      isAdmin,
      idempresa,
    };

    await api
      .post("/treinamentos/usuarios/", dataobj)
      .then((res) => {
        if (res.data.error != undefined) {
          alert(res.data.error);
          setLoading(false);
          return;
        } else {
          setLoading(false);
          navigate("/dashadminUsuarios");
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
    loadEmpresas();
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
              <h3 className="title">Novo Usuário</h3>
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
                  <label className="col-sm-2" htmlFor="nome">
                    Nome*
                  </label>
                  <div className="col-sm-4">
                    <input
                      id="nome"
                      placeholder="Nome Completo do Usuário"
                      className="form-control"
                      required
                      maxLength={60}
                      value={nome}
                      onChange={(event) => setNome(event.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2" htmlFor="preco">
                    E-mail*
                  </label>
                  <div className="col-sm-4">
                    <input
                      id="email"
                      placeholder="E-mail do Usuário"
                      className="form-control"
                      required
                      maxLength={50}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2" htmlFor="nome">
                    Senha*
                  </label>
                  <div className="col-sm-4">
                    <input
                      id="nome"
                      type="password"
                      placeholder="Senha do Usuário"
                      className="form-control"
                      required
                      maxLength={20}
                      value={pwd}
                      onChange={(event) => setPwd(event.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2" htmlFor="preco">
                    Telefone
                  </label>
                  <div className="col-sm-4">
                    <input
                      id="email"
                      placeholder="Telefone do Usuário"
                      className="form-control"
                      required
                      maxLength={14}
                      value={telefone}
                      onChange={(event) => setTelefone(event.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2" htmlFor="idcompressor">
                    Empresa*
                  </label>
                  <div className="col-sm-4">
                    <select
                      id="idcompressor"
                      value={idempresa}
                      placeholder="Empresa do usuário"
                      className="form-control select2"
                      required
                      onChange={(event) => setIdempresa(event.target.value)}
                    >
                      <option key="" value="" disabled>
                        -- Selecione --
                      </option>
                      {empresas.map((empresa) => (
                        <option key={empresa._id} value={empresa._id}>
                          {empresa.nome}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2" htmlFor="preco">
                    Área de Acesso*
                  </label>
                  <div className="col-sm-4">
                    <label style={{ paddingLeft: 1 }}>
                      <input
                        id="isAdmin"
                        type="checkbox"
                        checked={isAdmin === true ? "checked" : ""}
                        onChange={(event) => {
                          setIsAdmin(!isAdmin);
                        }}
                      />
                       &nbsp;Administrador
                    </label>
                  </div>
                </div>
              </div>
            </div>
                        <br></br><br></br>
            {/* Admin Courses Tab Content End */}
            <div className="tab-content">
            <div className="tab-pane active" id="tab_1">
              <div className="row">
                <div className="col-xs-12">
                  <div className="box">
                    {/* /.box-header */}
                    <div className="box-body table-responsive no-padding">
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <th>Treinamento</th>
                            <th>Data</th>
                            {/* <th>Status</th> */}
                          </tr>

                          {treinamentos &&
                            treinamentos.map((item) => (
                              <tr>
                                <td>{item.titulo}</td>
                                <td>{"22/12/2023"}</td>
                                {/* <td>
                                              {item.nome == 0 && (
                                                <span className="label label-success">
                                                  Bom
                                                </span>
                                              )}
                                              {item.nome == 1 && (
                                                <span className="label label-danger">
                                                  Ruim
                                                </span>
                                              )}
                                              {item.nome == 2 && (
                                                <span className="label label-warning">
                                                  Faltando
                                                </span>
                                              )}
                                            </td> */}
                              </tr>
                            ))}
                        </tbody>
                      </table>
                      <br></br>
                    </div>

                    <button
                      className="btn btn-success"
                      data-toggle="modal"
                      data-target="#modal-newitem"
                      type="button"
                      style={{ marginRight: 8 }}
                      onClick={openModal}
                    >
                      + Adicionar Treinamento
                    </button>

                    <p>&nbsp;</p>
                    {/* /.box-body */}
                  </div>
                  {/* /.box */}
                </div>
              </div>
            </div>
          </div>
          </div>

        </div>

        {/* Page Content Wrapper End */}
      </div>
      {/* Courses Admin End */}

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h3 ref={(_subtitle) => (subtitle = _subtitle)}>Adicionar Treinamento ao Usuario</h3>
          <div className="form-group">
                  <label>
                    Qual Treinamento ?
                  </label>
                  <div>
                    <select
                      id="idcompressor"
                      value={idtreinamento}
                      placeholder="Empresa do usuário"
                      className="form-control select2"
                      required
                      onChange={(event) => setIdtreinamento(event.target.value)}
                    >
                      <option key="" value="" disabled>
                        -- Selecione --
                      </option>
                      {treinamentos.map((treinamento) => (
                        <option key={treinamento._id} value={treinamento._id}>
                          {treinamento.titulo}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <br></br>
          <button className="btn btn-success" onClick={closeModal}>Adicionar</button>
          
        </Modal>
      </div>

      {/*Back To Start*/}
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up" />
      </a>
      {/*Back To End*/}
    </div>
  );
}
