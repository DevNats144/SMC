import Container from "react-bootstrap/Container";
import "./Hero.css";
import CustomToggle from "./CustomToggle";

function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="overlay">
        <div className="text-center text-white d-flex flex-column justify-content-center  h-100 ">

          <h1 className="fw-bold display-4">
            Social Midea Company<br />
          </h1>

          <p className="mt-3 lead">
            Seja bem-vindo à Social Midea Company, a sua parceira de confiança em marketing e promoção
          </p>

          <CustomToggle title="Sobre nòs">
            <div className="about-content">
              <p style={{fontWeight: "bold"}}>
                A Social Midea Company é uma agência criativa especializada em marketing digital, gestão de
                redes sociais e design gráfico. Transformamos ideias em marcas fortes, conectando
                empresas ao seu público com estratégias modernas e conteúdo de alto impacto.
              </p>

         <br />

              <div className="about-item">
                <strong>Valores</strong>
                <p>
                  Criatividade, inovação, profissionalismo e transparência. Comprometemo-nos com resultados
                  e foco no cliente em todas as etapas do trabalho.
                </p>
              </div>

              <div className="about-item">
                <strong>Missão</strong>
                <p>
                  Impulsionar marcas através de estratégias digitais criativas e eficazes, gerando crescimento,
                  visibilidade e impacto mensurável.
                </p>
              </div>

              <div className="about-item">
                <strong>Visão</strong>
                <p>
                  Ser referência em marketing digital e comunicação visual em Angola e além das nossas
                  fronteiras.
                </p>
              </div>
            </div>
          </CustomToggle>

        </div>
      </div>
    </div>
  );
}

export default Hero;