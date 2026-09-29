import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Style.css'
import WhatsButton from './RComponents/WhatsButton';
import NavBar from './RComponents/Navbar';
import Hero from "./RComponents/Hero";
import Services from "./RComponents/Services";
import CarouselFade from './RComponents/Carrosell';
import Divider from './RComponents/Divider';
import Footer from './RComponents/Footer';
import TeamPage from './pages/TeamPage';
import Reveal from './RComponents/Reveal';



function HomePage(){
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
       <NavBar /> 
       <Hero />

       <Reveal>
         <Services />
       </Reveal>

       <CarouselFade />

       <Divider />
       
       <WhatsButton />
       <Footer />
    </div>
  );
}

function App(){
  return (

  
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/equipa" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
