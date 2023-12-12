import React from "react";
import { useState } from "react";
import YouTube from 'react-youtube';

export default function Treinamento() {
  const [video, setVideo] = useState("RjKsC4CPJvQ");

  const onVideoEnd = (event) => {
    alert(video + " Acabou");
  }

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      rel: 0,
    }, 
  };

    return (
      <div className="main-wrapper">
        {/* Login Header Start */}
        <div className="section login-header">
          {/* Login Header Wrapper Start */}
          <div className="login-header-wrapper navbar navbar-expand">
            {/* Header Logo Start */}
            <div className="login-header-logo logo-2">
              <a href="/dashcliente">
                <img src="assets/images/logo-treinarsgi3.png" alt="Logo" width={150} />
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
        {/* Courses Enroll Start */}
        <div className="section">
          {/* Courses Enroll Wrapper Start */}
          <div className="courses-enroll-wrapper">
            {/* Courses Video Player Start */}
            <div className="courses-video-player">
              {/* Courses Video Container Start */}
              {/* <div className="vidcontainer"> */}

                <YouTube videoId={video} opts={opts} onEnd={onVideoEnd} className={"vidcontainer"} />
              
              </div>
              {/* Courses Video Container End */}

            {/* </div> */}
            {/* Courses Video Player End */}
            {/* Courses Video Playlist Start */}
            <div className="courses-video-playlist">
              <div className="playlist-title">
                <h3 className="title">HACCP</h3>
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
                      <p>1 - Introdução</p>
                      <span className="total-duration">4 minutos</span>
                    </button>
                    <div
                      id="collapseOne"
                      className="accordion-collapse"
                      data-bs-parent="#videoPlaylist"
                    >
                      <nav className="vids">
                        <a
                          className="link active"
                          href="#"
                          onClick={() => setVideo("RjKsC4CPJvQ")}
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
                      className="accordion-collapse"
                      data-bs-parent="#videoPlaylist"
                    >
                      <nav className="vids">
                        <a
                          className="link"
                          href="#"
                          onClick={() => setVideo("ZFcoo0udMQY")}
                        >
                          <p>01. Perigos com Alimentos</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                       
                      </nav>
                    </div>
                  </div>
                  <a style={{float: 'right', paddingTop:30, paddingRight:30}} href="/dashcliente">Voltar</a>
                </div>
              </div>
              {/* Video Playlist End  */}
            </div>
            {/* Courses Video Playlist End */}
          </div>
          {/* Courses Enroll Wrapper End */}
        </div>
        {/* Courses Enroll End */}
       
      </div>
    );
}
