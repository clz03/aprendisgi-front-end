import React from "react";

class Treinamento extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        {/* Login Header Start */}
        <div className="section login-header">
          {/* Login Header Wrapper Start */}
          <div className="login-header-wrapper navbar navbar-expand">
            {/* Header Logo Start */}
            <div className="login-header-logo logo-2">
              <a href="/">
                <img src="assets/images/logo-aprendisgi.png" alt="Logo" />
              </a>
            </div>
            {/* Header Logo End */}
            {/* Header Action Start */}
            <div className="login-header-action action-2 ml-auto">

              <a className="action author" href="#">
                <img src="assets/images/author/author-15.jpg" alt="Author" />
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
                      <i className="icofont-user" /> Edit Perfil
                    </a>
                  </li>
                  <li>
                    <a className href="index.html">
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
        {/* Courses Enroll Start */}
        <div className="section">
          {/* Courses Enroll Wrapper Start */}
          <div className="courses-enroll-wrapper">
            {/* Courses Video Player Start */}
            <div className="courses-video-player">
              {/* Courses Video Container Start */}
              <div className="vidcontainer">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZFcoo0udMQY?si=WfK3uSjVXXd4firm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              {/* Courses Video Container End */}
              {/* Courses Enroll Content Start */}
              <div className="courses-enroll-content">
                {/* Courses Enroll Title Start */}
                <div className="courses-enroll-title">
                  <h2 className="title">BPF - Alimentos</h2>
                  <p>
                    <i className="icofont-eye-alt" /> <span>8,350</span>{" "}
                    visualizações
                  </p>
                </div>
                {/* Courses Enroll Title End */}
              </div>
              {/* Courses Enroll Content End */}
            </div>
            {/* Courses Video Player End */}
            {/* Courses Video Playlist Start */}
            <div className="courses-video-playlist">
              <div className="playlist-title">
                <h3 className="title">BPF - Alimentos</h3>
                <span>2 Etapas (15m)</span>
              </div>
              {/* Video Playlist Start  */}
              <div className="video-playlist">
                <div className="accordion" id="videoPlaylist">
                  {/* Accordion Items Start  */}
                  <div className="accordion-item">
                    <button
                      className="collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      <p>Etapa-01: Introdução ao tema</p>
                      <span className="total-duration">4 minutos</span>
                    </button>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#videoPlaylist"
                    >
                      <nav className="vids">
                        <a
                          className="link active"
                          href="#"
                        >
                          <p>01. Video Introducao</p>
                          <span className="total-duration">04 minutos</span>
                        </a>

                      </nav>
                    </div>
                  </div>
                  {/* Accordion Items End  */}
                  {/* Accordion Items Start  */}
                  <div className="accordion-item">
                    <button
                      className="collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                    >
                      <p>Etapa-02: Cuidados</p>
                      <span className="total-duration">01 hour 48 minutes</span>
                    </button>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#videoPlaylist"
                    >
                      <nav className="vids">
                        <a
                          className="link"
                          href="#"
                        >
                          <p>01. Perigos com Alimentos</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                       
                      </nav>
                    </div>
                  </div>

                </div>
              </div>
              {/* Video Playlist End  */}
            </div>
            {/* Courses Video Playlist End */}
          </div>
          {/* Courses Enroll Wrapper End */}
        </div>
        {/* Courses Enroll End */}
        {/*Back To Start*/}
        <a href="#" className="back-to-top">
          <i className="icofont-simple-up" />
        </a>
        {/*Back To End*/}
      </div>
    );
  }
}

export default Treinamento;
