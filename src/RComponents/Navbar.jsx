import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import logo from '../assets/SociaIimg1.jpg';


function Navegacao(){

  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  // Função para fechar o menu
  const closeMenu = () => setIsOpen(false);

  // Função para alternar o menu
  const toggleMenu = () => setIsOpen(!isOpen);

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

  <div id="home" className="navbar-container" ref={navbarRef}>
  <Navbar  className="navbar" variant="dark" expand="lg" fixed="top" expanded={isOpen}>
         
          <Container>
              <Navbar.Brand href="#">
                <img
                  src={logo}
                  alt="Logo Social Midea"
                  className="navbar-logo"
                />
                
                Social Midea Company
                
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={toggleMenu} />
              
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className='ms-auto'>
                  <Nav.Link href='#home' onClick={closeMenu}>Início</Nav.Link>  
                  <Nav.Link href='#servicos' onClick={closeMenu}>Serviços</Nav.Link> 
                  <Nav.Link href='#team' onClick={closeMenu}>Equipa</Nav.Link> 
                  <Nav.Link href='#contacto' onClick={closeMenu}>Contacto</Nav.Link>  
                  </Nav>    
              </Navbar.Collapse>
          </Container>
          
      </Navbar>
      
    </div>
    
);

}

export default Navegacao; 