import Container from "react-bootstrap/Container";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="overlay">
        <div className="text-center text-white d-flex flex-column justify-content-center  h-100 ">

          <h1 className="fw-bold display-3">
            Social Midea Company<br />
          </h1>

          <p className="mt-3 lead">
            Desenvolvemos soluções completas em marketing e promoção, 
            conectando marcas ao seu público atravéz de estratégias 
            inteligentes, criativas e geram resultados.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Hero;