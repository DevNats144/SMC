import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Style.css'
import WhatsButton from './RComponents/WhatsButton';
import Navegacao from './RComponents/Navbar';
import Hero from "./RComponents/Hero";
import Servos from "./RComponents/Services";
import CarouselFade from './RComponents/Carrosell';
import Divider from './RComponents/Divider';
import Team from "./RComponents/Team";
import Footer from './RComponents/Footer';






function App(){
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <WhatsButton />
      <Navegacao />
      <Hero />
      <div id="about-panel-root" />
      <Servos />
      <CarouselFade />
      <Divider />
      <Team style={{ flexGrow: 1 }} />
      <Footer />
    </div>
  );
}

export default App;
