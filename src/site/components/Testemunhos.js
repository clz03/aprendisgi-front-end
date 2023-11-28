import React from "react";

class Testemunhos extends React.Component {
    render() {
      return (
        <div className="section section-padding-02 mt-n1">
        <div className="container">
          {/* Section Title Start */}
          <div className="section-title shape-03 text-center">
            <h5 className="sub-title">
              O que nossos alunos falam sobre a WCQI
            </h5>
            <h2 className="main-title">
              Feedback dos nossos <span> clientes</span>
            </h2>
          </div>
          {/* Section Title End */}
          {/* Testimonial Wrapper End */}
          <div className="testimonial-wrapper testimonial-active">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {/* Single Testimonial Start */}
                <div className="single-testimonial swiper-slide">
                  <div className="testimonial-author">
                    <div className="author-thumb">
                      <img
                        src="assets/images/author/author-06.jpg"
                        alt="Author"
                      />
                      <i className="icofont-quote-left" />
                    </div>
                    <span className="rating-star">
                      <span className="rating-bar" style={{ width: "80%" }} />
                    </span>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      Gostei muito do curso e sinceramente acho que todas as
                      empresa deveriam adotar o sistema de reciclagem em alguns
                      cursos neste método, o conteúdo e de fácil similação e a
                      avaliação também contribui para o aprendizado.
                    </p>
                    <h4 className="name">Alexandre Sara</h4>
                    <span className="designation">Gerente Fábrica, Klabin</span>
                  </div>
                </div>
                {/* Single Testimonial End */}
                {/* Single Testimonial Start */}
                <div className="single-testimonial swiper-slide">
                  <div className="testimonial-author">
                    <div className="author-thumb">
                      <img
                        src="assets/images/author/author-07.jpg"
                        alt="Author"
                      />
                      <i className="icofont-quote-left" />
                    </div>
                    <span className="rating-star">
                      <span className="rating-bar" style={{ width: "80%" }} />
                    </span>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      O Curso é excelente em todos os sentidos: conteúdo, método
                      de ensino e avaliações. Será de grande valia na execução
                      dos nossos trabalhos.
                    </p>
                    <h4 className="name">Melissa Roberts</h4>
                    <span className="designation">
                      Coordenadora Segurança, Airjet
                    </span>
                  </div>
                </div>
                {/* Single Testimonial End */}
                {/* Single Testimonial Start */}
                <div className="single-testimonial swiper-slide">
                  <div className="testimonial-author">
                    <div className="author-thumb">
                      <img
                        src="assets/images/author/author-03.jpg"
                        alt="Author"
                      />
                      <i className="icofont-quote-left" />
                    </div>
                    <span className="rating-star">
                      <span className="rating-bar" style={{ width: "80%" }} />
                    </span>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      Gostei muito do curso e sinceramente acho que todas as
                      empresa deveriam adotar o sistema de reciclagem em alguns
                      cursos neste método, o conteúdo e de fácil similação e a
                      avaliação também contribui para o aprendizado.
                    </p>
                    <h4 className="name">Sara Alexander</h4>
                    <span className="designation">Product Designer, USA</span>
                  </div>
                </div>
                {/* Single Testimonial End */}
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination" />
            </div>
          </div>
          {/* Testimonial Wrapper End */}
        </div>
      </div>
      );
    };
};

export default Testemunhos;