import React from "react";

class ListaTreinamentos extends React.Component {
    render() {
      return (
        <div className="section section-padding-02">
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
                        <a href="/detalhe">
                          <img
                            src="assets/images/BPF.jpeg"
                            alt="Courses"
                          />
                        </a>
                      </div>
                      <div className="courses-content">
                        <h4 className="title">
                          <a href="/detalhe">BPF - Alimentos</a>
                        </h4>
                        <div className="courses-meta">
                          <span>
                            {" "}
                            <i className="icofont-clock-time" /> 02 hr 15 mins
                          </span>
                          <span>
                            {" "}
                            <i className="icofont-read-book" /> 455 alunos{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Single Courses End */}
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
      );
    };
};

export default ListaTreinamentos;