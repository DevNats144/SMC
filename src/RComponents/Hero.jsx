import heroVideo from "../assets/Introduzindo a SMC.mp4";
import "./Hero.css";
import CustomToggle from "./CustomToggle";

function Hero() {
  return (
    <div className="hero" id="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="overlay">
        <div className="text-center text-white d-flex flex-column justify-content-center  h-100 ">

        

          <CustomToggle title="Sobre nòs">
            <div className="about-content" id="content">
              <p style={{fontWeight: "bold"}}>
                A Social Midea Company é uma agência criativa especializada em marketing digital, gestão de
                redes sociais e design gráfico. Transformamos ideias em marcas fortes, conectando
                empresas ao seu público com estratégias modernas e conteúdo de alto impacto.
              </p>

         <br />

              <div className="about-item bg-blue-300 ">
                <strong>Valores</strong>
                <p>
                  Criatividade, inovação, profissionalismo e transparência. Comprometemo-nos com resultados
                  e foco no cliente em todas as etapas do trabalho.
                </p>
              </div>
    <hr />
              <div className="about-item">
                <strong>Missão</strong>
                <p>
                  Impulsionar marcas através de estratégias digitais criativas e eficazes, gerando crescimento,
                  visibilidade e impacto mensurável.
                </p>
              </div>
   <hr />
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