import { useEffect, useState } from "react";
import heroVideo from "../assets/Introduzindo a SMC.mp4";
import responsiveHeroVideo from "../assets/social-midea-intro-1080x1920.mp4";
import "./Hero.css";
import CustomToggle from "./CustomToggle";

const responsiveBreakpoint = "(max-width: 768px)";

function getHeroVideo() {
  if (typeof window === "undefined") return heroVideo;
  return window.matchMedia(responsiveBreakpoint).matches ? responsiveHeroVideo : heroVideo;
}

function Hero() {
  const [activeHeroVideo, setActiveHeroVideo] = useState(getHeroVideo);

  useEffect(() => {
    const mediaQuery = window.matchMedia(responsiveBreakpoint);
    const updateHeroVideo = (event) => {
      setActiveHeroVideo(event.matches ? responsiveHeroVideo : heroVideo);
    };

    mediaQuery.addEventListener("change", updateHeroVideo);
    return () => mediaQuery.removeEventListener("change", updateHeroVideo);
  }, []);

  return (
    <div className="hero" id="hero">
      <video
        key={activeHeroVideo}
        className="hero-video"
        src={activeHeroVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="overlay">
        <div className="text-center text-white d-flex flex-column justify-content-center  h-100 ">

        

          <CustomToggle title="Sobre nós">
            <div className="about-content" id="content">
              <p>
                A Social Midea Company é uma agência criativa especializada em marketing digital, gestão de
                redes sociais e design gráfico. Transformamos ideias em marcas fortes, conectando
                empresas ao seu público com estratégias modernas e conteúdo de alto impacto.
              </p>

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