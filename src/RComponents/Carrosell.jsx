import './Carrosell.css';
import Reveal from './Reveal';
import giraffrica from '../assets/Socialimg3.png';
import cctv from '../assets/Socialimg9.png';
import telvivo from '../assets/Socialimg10.png';
import businessCentral from '../assets/Socialimg11.png';
import aricayCampaign from '../assets/WhatsApp Image 2026-09-29 at 8.42.19 AM.jpeg';
import prestiCenter from '../assets/WhatsApp Image 2026-09-29 at 8.42.26 AM.jpeg';
import prestiConsulting from '../assets/WhatsApp Image 2026-09-29 at 8.42.27 AM.jpeg';
import aricayTravel from '../assets/WhatsApp Image 2026-09-29 at 8.42.30 AM.jpeg';
import aquaLink from '../assets/WhatsApp Image 2026-09-29 at 8.42.39 AM.jpeg';
import skyfly from '../assets/WhatsApp Image 2026-09-29 at 8.42.41 AM.jpeg';

const projects = [
  {
    name: 'Centro de Medicina Natural Giráfrica',
    category: 'Comunicação para saúde',
    image: giraffrica,
    alt: 'Peça promocional do Centro de Medicina Natural Giráfrica',
  },
  {
    name: 'AB Informática Solutions',
    category: 'Sistemas de videovigilância',
    image: cctv,
    alt: 'Peça de divulgação de sistemas CCTV da AB Informática Solutions',
  },
  {
    name: 'Telvivo',
    category: 'Assistência técnica',
    image: telvivo,
    alt: 'Peça promocional de assistência técnica da Telvivo',
  },
  {
    name: 'Business Central Company',
    category: 'Equipamentos de filmagem',
    image: businessCentral,
    alt: 'Peça de divulgação de equipamento audiovisual da Business Central Company',
  },
  {
    name: 'Aricay Viagens',
    category: 'Campanha de viagens',
    image: aricayCampaign,
    alt: 'Campanha de viagens da Aricay com proposta de contacto e reservas',
  },
  {
    name: 'PrestiCenter',
    category: 'Formação profissional',
    image: prestiCenter,
    alt: 'Peça promocional de formação em Excel do PrestiCenter',
  },
  {
    name: 'Presticonsulting',
    category: 'Identidade visual e contabilidade',
    image: prestiConsulting,
    alt: 'Logótipo da Presticonsulting, consultoria de contabilidade',
  },
  {
    name: 'Aricay Viagens',
    category: 'Comunicação de marca',
    image: aricayTravel,
    alt: 'Peça institucional da Aricay Viagens com apresentação da marca',
  },
  {
    name: 'AquaLink',
    category: 'Tratamento de água e sistemas hidráulicos',
    image: aquaLink,
    alt: 'Apresentação dos serviços de tratamento de água da Aqualink',
  },
  {
    name: 'Skyfly Transitários',
    category: 'Logística e transporte internacional',
    image: skyfly,
    alt: 'Peça de divulgação dos parceiros globais da Skyfly Transitários',
  },
];

function CarouselFade() {
  return (
    <section className="work-section" id="trabalhos" aria-labelledby="work-title">
      <div className="work-inner">
        <header className="work-header">
          <div>
            <p className="work-eyebrow">Portefólio SMC</p>
            <h2 id="work-title">Trabalho que dá nas vistas.</h2>
            <p className="work-intro">
              Uma seleção de marcas e projetos que ganharam forma com a nossa equipa.
            </p>
          </div>
        </header>

        <div className="work-grid">
          {projects.map((project) => (
            <Reveal key={`${project.name}-${project.category}`}>
              <article className="work-card">
                <div className="work-image-wrap">
                  <img
                    className="work-image"
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                  />
                </div>
                <div className="work-card-info">
                  <h3>{project.name}</h3>
                  <p>{project.category}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarouselFade;