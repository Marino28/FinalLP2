import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
const NavBar = () => {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/"><img src="https://i.imgur.com/vOyiXqW.png" width="70" height="80"/></Navbar.Brand>   
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link  color="red" href="/Equipoes">Equipos</Nav.Link>
          <Nav.Link href="/Asistencias">Asistencia</Nav.Link>
          <Nav.Link href="/Clientes">Clientes</Nav.Link>
          <Nav.Link href="/Admins">Administradores</Nav.Link>
          <Nav.Link href="/Workouts">Rutinas</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
         
    </Navbar>
  );
};

export default NavBar;