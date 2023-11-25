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
                <img src="assets/images/logo-wcqi.png" alt="Logo" />
              </a>
            </div>
            {/* Header Logo End */}
            {/* Header Action Start */}
            <div className="login-header-action action-2 ml-auto">
              <div className="dropdown">
                <button
                  className="action notification"
                  data-bs-toggle="dropdown"
                >
                  <i className="flaticon-notification" />
                  <span className="active" />
                </button>
                <div className="dropdown-menu dropdown-notification">
                  <ul className="notification-items-list">
                    <li className="notification-item">
                      <span className="notify-icon bg-success text-white">
                        <i className="icofont-ui-user" />
                      </span>
                      <div className="dropdown-body">
                        <a href="#">
                          <p>
                            <strong>Martin</strong> has added a{" "}
                            <strong>customer</strong> Successfully
                          </p>
                        </a>
                      </div>
                      <span className="notify-time">3:20 am</span>
                    </li>
                    <li className="notification-item">
                      <span className="notify-icon bg-success text-white">
                        <i className="icofont-shopping-cart" />
                      </span>
                      <div className="dropdown-body">
                        <a href="#">
                          <p>
                            <strong>Jennifer</strong> purchased Light Dashboard
                            2.0.
                          </p>
                        </a>
                      </div>
                      <span className="notify-time">3:20 am</span>
                    </li>
                    <li className="notification-item">
                      <span className="notify-icon bg-danger text-white">
                        <i className="icofont-book-mark" />
                      </span>
                      <div className="dropdown-body">
                        <a href="#">
                          <p>
                            <strong>Robin</strong> marked a{" "}
                            <strong>ticket</strong> as unsolved.
                          </p>
                        </a>
                      </div>
                      <span className="notify-time">3:20 am</span>
                    </li>
                    <li className="notification-item">
                      <span className="notify-icon bg-success text-white">
                        <i className="icofont-heart-alt" />
                      </span>
                      <div className="dropdown-body">
                        <a href="#">
                          <p>
                            <strong>David</strong> purchased Light Dashboard
                            1.0.
                          </p>
                        </a>
                      </div>
                      <span className="notify-time">3:20 am</span>
                    </li>
                    <li className="notification-item">
                      <span className="notify-icon bg-success text-white">
                        <i className="icofont-image" />
                      </span>
                      <div className="dropdown-body">
                        <a href="#">
                          <p>
                            <strong> James.</strong> has added a
                            <strong>customer</strong> Successfully
                          </p>
                        </a>
                      </div>
                      <span className="notify-time">3:20 am</span>
                    </li>
                  </ul>
                  <a className="all-notification" href="#">
                    See all notifications <i className="icofont-simple-right" />
                  </a>
                </div>
              </div>
              <a className="action author" href="#">
                <img src="assets/images/author/author-07.jpg" alt="Author" />
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
                      <i className="icofont-user" /> Perfil
                    </a>
                  </li>
                  <li>
                    <a className href="#">
                      <i className="icofont-inbox" /> Inbox
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
                <video id="myvid" />
                <div className="video-play-bar">
                  <div className="topControl">
                    <div className="progress">
                      <span className="bufferBar" />
                      <span className="timeBar" />
                    </div>
                    <div className="time">
                      <span className="current" /> /
                      <span className="duration" />
                    </div>
                  </div>
                  <div className="controllers">
                    <div className="controllers-left">
                      <button
                        className="prevvid disabled"
                        title="Previous video"
                      >
                        <i className="icofont-ui-previous" />
                      </button>
                      <button className="btnPlay" title="Play/Pause video" />
                      <button className="nextvid" title="Next video">
                        <i className="icofont-ui-next" />
                      </button>
                      <button
                        className="sound sound2"
                        title="Mute/Unmute sound"
                      />
                      <div className="volume" title="Set volume">
                        <span className="volumeBar" />
                      </div>
                    </div>
                    <div className="controllers-right">
                      <button className="btnspeed" title="Video speed">
                        <i className="fa fa-gear" />
                      </button>
                      <ul className="speedcnt">
                        <li className="spdx50">1.5</li>
                        <li className="spdx25">1.25</li>
                        <li className="spdx1 selected">Normal</li>
                        <li className="spdx050">0.5</li>
                      </ul>
                      <button className="btnFS" title="full screen" />
                    </div>
                  </div>
                </div>
                <div className="bigplay" title="play the video">
                  <i className="fa fa-play" />
                </div>
                <div className="loading">
                  <div className="spinner-border spinner">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
              {/* Courses Video Container End */}
              {/* Courses Enroll Content Start */}
              <div className="courses-enroll-content">
                {/* Courses Enroll Title Start */}
                <div className="courses-enroll-title">
                  <h2 className="title">NR-10 - Curso Basico</h2>
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
                <h3 className="title">Conteúdo do Treinamento</h3>
                <span>25 Etapas (8h 15m)</span>
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
                      <span className="total-duration">01 hour 48 minutes</span>
                    </button>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#videoPlaylist"
                    >
                      <nav className="vids">
                        <a
                          className="link active"
                          href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&profile_id=119"
                        >
                          <p>01. The Complete Medicine Masterclass</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&profile_id=119"
                        >
                          <p>02. Standard dummy text ever since the</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&profile_id=119"
                        >
                          <p>03. Printer took a galley of type and scrambled</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&profile_id=119"
                        >
                          <p>04. It to make a type specimen book &amp; break</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                        >
                          <p>
                            05. Survived not only five centuries also the leap
                          </p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                        >
                          <p>06. Into typesettingremaining essentially</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                        >
                          <p>07. Unchanged. It was popularised in the 1960s</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                        >
                          <p>08. The release of Letraset sheets containing</p>
                          <span className="total-duration">08 minutes</span>
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
                      <p>Etapa-02: Proteção pessoal e equipamentos</p>
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
                          href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&profile_id=119"
                        >
                          <p>09. The Complete Medicine Masterclass</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&profile_id=119"
                        >
                          <p>10. Standard dummy text ever since the</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&profile_id=119"
                        >
                          <p>11. Printer took a galley of type and scrambled</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&profile_id=119"
                        >
                          <p>12. It to make a type specimen book &amp; break</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                        >
                          <p>
                            13. Survived not only five centuries also the leap
                          </p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                        >
                          <p>14. Into typesettingremaining essentially</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                        >
                          <p>15. Unchanged. It was popularised in the 1960s</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                        >
                          <p>16. The release of Letraset sheets containing</p>
                          <span className="total-duration">08 minutes</span>
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
                      data-bs-target="#collapseThree"
                    >
                      <p>Etapa-03: Uso Seguro de Escadas</p>
                      <span className="total-duration">01 hour 48 minutes</span>
                    </button>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#videoPlaylist"
                    >
                      <nav className="vids">
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&profile_id=119"
                        >
                          <p>17. The Complete Medicine Masterclass</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&profile_id=119"
                        >
                          <p>18. Standard dummy text ever since the</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&profile_id=119"
                        >
                          <p>19. Printer took a galley of type and scrambled</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&profile_id=119"
                        >
                          <p>20. It to make a type specimen book &amp; break</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                        >
                          <p>
                            21. Survived not only five centuries also the leap
                          </p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                        >
                          <p>22. Into typesettingremaining essentially</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                        >
                          <p>23. Unchanged. It was popularised in the 1960s</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                        >
                          <p>24. The release of Letraset sheets containing</p>
                          <span className="total-duration">08 minutes</span>
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
                      data-bs-target="#collapseFour"
                    >
                      <p>Etapa-04: Como reportar desvios</p>
                      <span className="total-duration">01 hour 48 minutes</span>
                    </button>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#videoPlaylist"
                    >
                      <nav className="vids">
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&profile_id=119"
                        >
                          <p>25. The Complete Medicine Masterclass</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&profile_id=119"
                        >
                          <p>26. Standard dummy text ever since the</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&profile_id=119"
                        >
                          <p>27. Printer took a galley of type and scrambled</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&profile_id=119"
                        >
                          <p>28. It to make a type specimen book &amp; break</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                        >
                          <p>
                            29. Survived not only five centuries also the leap
                          </p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                        >
                          <p>30. Into typesettingremaining essentially</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                        >
                          <p>31. Unchanged. It was popularised in the 1960s</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                        >
                          <p>32. The release of Letraset sheets containing</p>
                          <span className="total-duration">08 minutes</span>
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
                      data-bs-target="#collapseFive"
                    >
                      <p>
                        Etapa-05: Proteção contra tempestades e rede elétrica
                      </p>
                      <span className="total-duration">01 hour 48 minutes</span>
                    </button>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#videoPlaylist"
                    >
                      <nav className="vids">
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&profile_id=119"
                        >
                          <p>33. The Complete Medicine Masterclass</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&profile_id=119"
                        >
                          <p>34. Standard dummy text ever since the</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&profile_id=119"
                        >
                          <p>35. Printer took a galley of type and scrambled</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&profile_id=119"
                        >
                          <p>36. It to make a type specimen book &amp; break</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                        >
                          <p>
                            37. Survived not only five centuries also the leap
                          </p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                        >
                          <p>38. Into typesettingremaining essentially</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                        >
                          <p>39. Unchanged. It was popularised in the 1960s</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                        >
                          <p>40. The release of Letraset sheets containing</p>
                          <span className="total-duration">08 minutes</span>
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
                      data-bs-target="#collapseSix"
                    >
                      <p>Etapa-06: Como realizar inspeção na rede elétrica</p>
                      <span className="total-duration">01 hour 48 minutes</span>
                    </button>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      data-bs-parent="#videoPlaylist"
                    >
                      <nav className="vids">
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&profile_id=119"
                        >
                          <p>41. The Complete Medicine Masterclass</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&profile_id=119"
                        >
                          <p>42. Standard dummy text ever since the</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&profile_id=119"
                        >
                          <p>43. Printer took a galley of type and scrambled</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&profile_id=119"
                        >
                          <p>44. It to make a type specimen book &amp; break</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                        >
                          <p>
                            45. Survived not only five centuries also the leap
                          </p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                        >
                          <p>46. Into typesettingremaining essentially</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                        >
                          <p>47. Unchanged. It was popularised in the 1960s</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                        >
                          <p>48. The release of Letraset sheets containing</p>
                          <span className="total-duration">08 minutes</span>
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
                      data-bs-target="#collapseSaven"
                    >
                      <p>Etapa-07: Avaliação</p>
                      <span className="total-duration">01 hour 48 minutes</span>
                    </button>
                    <div
                      id="collapseSaven"
                      className="accordion-collapse collapse"
                      data-bs-parent="#videoPlaylist"
                    >
                      <nav className="vids">
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&profile_id=119"
                        >
                          <p>49. The Complete Medicine Masterclass</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&profile_id=119"
                        >
                          <p>50. Standard dummy text ever since the</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&profile_id=119"
                        >
                          <p>51. Printer took a galley of type and scrambled</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&profile_id=119"
                        >
                          <p>52. It to make a type specimen book &amp; break</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                        >
                          <p>
                            53. Survived not only five centuries also the leap
                          </p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                        >
                          <p>54. Into typesettingremaining essentially</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                        >
                          <p>55. Unchanged. It was popularised in the 1960s</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                        <a
                          className="link"
                          href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                        >
                          <p>56. The release of Letraset sheets containing</p>
                          <span className="total-duration">08 minutes</span>
                        </a>
                      </nav>
                    </div>
                  </div>
                  {/* Accordion Items End  */}
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
