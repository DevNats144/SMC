import './Style.css'
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
      <Navegacao />
      <Hero />
      <Servos />
      <CarouselFade />
      <Divider />
      <Team style={{ flexGrow: 1 }} />
      <Footer />
    </div>
  );
}

export default App;
