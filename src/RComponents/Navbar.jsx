import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/SociaIimg1.jpg';


function NavBar(){

  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Função para fechar o menu
  const closeMenu = () => setIsOpen(false);

  const navigateToSection = (sectionId) => {
    closeMenu();

    if (location.pathname === '/' && location.hash === `#${sectionId}`) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    navigate(`/#${sectionId}`);
  };

  // Função para alternar o menu
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const sectionId = decodeURIComponent(location.hash.slice(1));
    if (!sectionId) return undefined;

    const frameId = requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    });

    return () => cancelAnimationFrame(frameId);
  }, [location.hash, location.pathname]);

  // Detectar cliques fora do menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && isOpen) {
        closeMenu();
      }
    };

    // Adicionar listener apenas quando o menu estiver aberto
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  return( 

  <div className="navbar-container" ref={navbarRef}>
  <Navbar  className="navbar" variant="dark" expand="lg" fixed="top" expanded={isOpen}>
         
          <Container>
              <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
                <img
                  src={logo}
                  alt="Logo Social Midea"
                  className="navbar-logo"
                />
                
                Social Midea Company
                
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='navbar-nav' onClick={toggleMenu} />
              
              <Navbar.Collapse id="navbar-nav">
                  <Nav className='ms-auto'>
                  <Nav.Link href='/#hero' onClick={(event) => { event.preventDefault(); navigateToSection('hero'); }}>Início</Nav.Link>  
                  <Nav.Link href='/#servicos' onClick={(event) => { event.preventDefault(); navigateToSection('servicos'); }}>Serviços</Nav.Link> 
                  <Nav.Link as={Link} to='/equipa' onClick={closeMenu}>Equipa</Nav.Link> 
                  <Nav.Link href='/#contacto' onClick={(event) => { event.preventDefault(); navigateToSection('contacto'); }}>Contacto</Nav.Link>  
                  </Nav>    
              </Navbar.Collapse>
          </Container>
          
      </Navbar>
      
    </div>
    
);

}

export default NavBar; 