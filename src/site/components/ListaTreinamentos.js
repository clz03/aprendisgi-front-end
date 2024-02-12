import React from "react";

class ListaTreinamentos extends React.Component {
    render() {
      return (
<>
        {/* Call to Action Start */}
        <div className="section section-padding-02">
        <div className="container">
          {/* Call to Action Wrapper Start */}
          <div className="call-to-action-wrapper">
            <img className="cat-shape-01 animation-round" src="assets/images/shape/shape-12.png" alt="Shape" />
            <img className="cat-shape-02" src="assets/images/shape/shape-13.svg" alt="Shape" />
            <img className="cat-shape-03 animation-round" src="assets/images/shape/shape-12.png" alt="Shape" />
            <div className="row align-items-center">
              <div className="col-md-6">
                {/* Section Title Start */}
                <div className="section-title shape-02">
                  <h5 className="sub-title">Seu sistema de treinamentos online</h5>
                  <h2 className="main-title">Acesse ao lado para criar seu <span>ambiente</span></h2>
                </div>
                {/* Section Title End */}
              </div>
              <div className="col-md-6">
                <div className="call-to-action-btn">
                  <a className="btn btn-primary btn-hover-dark" href="https://treinarsgi-plataforma.netlify.app">Acessar</a>
                </div>
              </div>
            </div>
          </div>
          {/* Call to Action Wrapper End */}
        </div>
        </div>
        {/* Call to Action End */}


        <div className="section section-padding-01">
        <div className="container">
          {/* All Courses Tabs Menu Start
          <div class="courses-tabs-menu courses-active">
              <div class="swiper-container">
                  <ul class="swiper-wrapper nav">
                      <li class="swiper-slide"><button class="active" data-bs-toggle="tab" data-bs-target="#tabs1">Segurança</button></li>
                      <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs2">Development</button></li>
                      <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs3">Data Science</button></li>
                      <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs4">Business</button></li>
                      <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs5">Financial</button></li>
                      <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs6">Marketing</button></li>
                      <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs7">Design</button></li>
                  </ul>
              </div>


              <div class="swiper-button-next"><i class="icofont-rounded-right"></i></div>
              <div class="swiper-button-prev"><i class="icofont-rounded-left"></i></div>
          </div>
          All Courses Tabs Menu End */}
          {/* All Courses tab content Start */}
          <div className="tab-content courses-tab-content">
            <div className="tab-pane fade show active" id="tabs1">
              {/* All Courses Wrapper Start */}
              <div className="courses-wrapper">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    {/* Single Courses Start */}
                    <div className="single-courses">
                      <div className="courses-images">
                        <a href="https://treinarsgi-plataforma.netlify.app">
                          <img
                            src="assets/images/BPF.jpeg"
                            alt="Courses"
                          />
                        </a>
                      </div>
                      <div className="courses-content">
                        <h4 className="title">
                          <a href="https://treinarsgi-plataforma.netlify.app">BPF - Alimentos</a>
                        </h4>
                        <div className="courses-meta">
                          <span>
                            {" "}
                            <i className="icofont-clock-time" /> 02 hr 15 mins
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Single Courses End */}
                  </div>
                  <div className="col-lg-4 col-md-6">
                    {/* Single Courses Start */}
                    <div className="single-courses">
                      <div className="courses-images">
                        <a href="https://treinarsgi-plataforma.netlify.app">
                          <img
                            src="assets/images/BPFManipulador.jpeg"
                            alt="Courses"
                          />
                        </a>
                      </div>
                      <div className="courses-content">
                        <h4 className="title">
                          <a href="https://treinarsgi-plataforma.netlify.app">BPF - Manipulador</a>
                        </h4>
                        <div className="courses-meta">
                          <span>
                            {" "}
                            <i className="icofont-clock-time" /> 24 mins
                          </span>
                          
                        </div>
                      </div>
                    </div>
                    {/* Single Courses End */}
                  </div>

                  {/* Single Courses Start */}
                  <div className="col-lg-4 col-md-6">
                  <div className="single-courses">
                      <div className="courses-images">
                        <a href="https://treinarsgi-plataforma.netlify.app">
                          <img
                            src="assets/images/HACCP.png"
                            alt="Courses"
                          />
                        </a>
                      </div>
                      <div className="courses-content">
                        <h4 className="title">
                          <a href="https://treinarsgi-plataforma.netlify.app">HACCP</a>
                        </h4>
                        <div className="courses-meta">
                          <span>
                            {" "}
                            <i className="icofont-clock-time" /> 44 mins
                          </span>
                          
                        </div>
                      </div>
                    </div>
                    </div>
                    {/* Single Courses End */}
                     {/* Single Courses Start */}
                  <div className="col-lg-4 col-md-6">
                  <div className="single-courses">
                      <div className="courses-images">
                        <a href="https://treinarsgi-plataforma.netlify.app">
                          <img
                            src="assets/images/nr06.png"
                            alt="Courses"
                          />
                        </a>
                      </div>
                      <div className="courses-content">
                        <h4 className="title">
                          <a href="https://treinarsgi-plataforma.netlify.app">NR 06 EPI</a>
                        </h4>
                        <div className="courses-meta">
                          <span>
                            {" "}
                            <i className="icofont-clock-time" /> 44 mins
                          </span>
                          
                        </div>
                      </div>
                    </div>
                    </div>
                    {/* Single Courses End */}
                     {/* Single Courses Start */}
                  <div className="col-lg-4 col-md-6">
                  <div className="single-courses">
                      <div className="courses-images">
                        <a href="https://treinarsgi-plataforma.netlify.app">
                          <img
                            src="assets/images/brigada.jpg"
                            alt="Courses"
                          />
                        </a>
                      </div>
                      <div className="courses-content">
                        <h4 className="title">
                          <a href="https://treinarsgi-plataforma.netlify.app">Brigada de Incêndio</a>
                        </h4>
                        <div className="courses-meta">
                          <span>
                            {" "}
                            <i className="icofont-clock-time" /> 44 mins
                          </span>
                          
                        </div>
                      </div>
                    </div>
                    </div>
                    {/* Single Courses End */}
                    <div className="col-lg-4 col-md-6">
                  <div className="single-courses">
                      <div className="courses-images">
                        <a href="https://treinarsgi-plataforma.netlify.app">
                          <img
                            src="assets/images/foodDefense.jpg"
                            alt="Courses"
                          />
                        </a>
                      </div>
                      <div className="courses-content">
                        <h4 className="title">
                          <a href="https://treinarsgi-plataforma.netlify.app">Food Defense</a>
                        </h4>
                        <div className="courses-meta">
                          <span>
                            {" "}
                            <i className="icofont-clock-time" /> 32 mins
                          </span>
                          
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
              </div>
              {/* All Courses Wrapper End */}
            </div>
          </div>
          {/* All Courses tab content End */}
          {/* All Courses BUtton Start */}
          {/* <div className="courses-btn text-center">
            <a href="#" className="btn btn-secondary btn-hover-primary">
              + Mais Treinamentos
            </a>
          </div> */}
          {/* All Courses BUtton End */}
        </div>
      </div>
      </>
      );
    };
};

export default ListaTreinamentos;