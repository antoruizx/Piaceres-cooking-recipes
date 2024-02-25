import { Nav, Navbar, Container } from 'react-bootstrap';
import '../styles/Navbar2.css';
import Logo from '../img/logo sin fondo edit.png';
import { Link } from 'react-router-dom';

function Navbar2() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img className='logo-piaceres' src={Logo} alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/recetas'>Recetas</Nav.Link>
            <Nav.Link as={Link} to='/top10'>Top 10</Nav.Link>
            <Nav.Link as={Link} to='/comunidad'>Comunidad</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar2;