import React from 'react';
import { Link } from 'react-router-dom';
import {Card, Button, Col } from 'react-bootstrap';
import services from '../components/serviceAsistencia';

const AsistenciaItem = ({ fecha,idPersona,vino}) => {  
  
  var vinos = ["","No","Si"];
  const deleteA = async () => {
    try {
        
      await services.deleteA(fecha,idPersona);
      alert('Asistencia eliminada!')
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
          
          <Card.Title>Fecha: {fecha}</Card.Title>
          <Card.Title>Codigo Cliente: {idPersona}</Card.Title>
          <Card.Title>Asistencia: {vinos[vino]}</Card.Title>

          <Link to={`/Asistencias/editAS/${fecha}&${idPersona}`}>
            <Button variant="dark">Editar</Button>
          </Link>
          <Button onClick={deleteA} variant="danger" style={{ marginLeft: 16 }}>Eliminar</Button>
        </Card.Body>
      </Card>
    </Col>
    </>
  );
};

export default AsistenciaItem;