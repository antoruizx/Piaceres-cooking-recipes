import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import '../styles/Navbar2.css';
import Logo from '../img/logo sin fondo edit.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar3.css';

const Navbar3 = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Navbar.Brand href="#home"><img className='logo-piaceres' src={Logo} alt="" /></Navbar.Brand>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Nav.Link as={Link} to='/' className="nav-link active">Inicio</Nav.Link>
            </li>
            <li className="nav-item">
            <Nav.Link as={Link} to='/recetas' className="nav-link active">Recetas</Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={Link} to='/top10' className="nav-link active">Top 10</Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={Link} to='/comunidad' className="nav-link active" tabindex="-1" aria-disabled="true">Comunidad</Nav.Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar3;