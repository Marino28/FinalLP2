import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';
import services from '../components/serviceCliente';

const ClienteItem = ({ idCliente, nombre, genero, email, password}) => {  
  var generos = ["","Mujer","Hombre"];
  const deleteA = async () => {
    try {
        
      await services.deleteA(idCliente);
      alert('Cliente eliminado!')
      window.location.reload()
    }catch(error) {
      console.log(error)
      alert('Eliminación Fallida!')
    }
  }

  return (
    
    <>
    <Col md="auto" style={{ marginTop: 16 }}>
    
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          
          <Card.Title>Nombre: {nombre}</Card.Title>
          <Card.Title>Genero: {generos[genero]}</Card.Title>
          <Card.Title>Correo: {email}</Card.Title>
          <Card.Title >Contraseña: {password}</Card.Title>

          <Link to={`/Clientes/editC/${idCliente}`}>
            <Button variant="primary">Editar</Button>
          </Link>
          <Button onClick={deleteA} variant="danger" style={{ marginLeft: 16 }}>Eliminar</Button>
        </Card.Body>
      </Card>
    </Col>
    </>
  );
};

export default ClienteItem;