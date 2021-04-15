import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';
import services from '../components/serviceAdmin';

const AdminItem = ({ idAdmin,nombre}) => {  

  const deleteA = async () => {
    try {
        
      await services.deleteA(idAdmin);
      alert('Admin eliminado!')
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
          <hr/>
          <Link to={`/Admins/editA/${idAdmin}`}>
            <Button variant="dark">Editar</Button>
          </Link>
          <Button onClick={deleteA} variant="danger" style={{ marginLeft: 16 }}>Eliminar</Button>
        </Card.Body>
      </Card>
    </Col>
    </>
  );
};

export default AdminItem;