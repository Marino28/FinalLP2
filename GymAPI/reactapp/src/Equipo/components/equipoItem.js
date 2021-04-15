import React from 'react';
import { Link } from 'react-router-dom';
import {Card, Button, Col } from 'react-bootstrap';
import services from '../components/serviceEquipo';

const EquipoItem = ({ idEquipo,tipo,descripcion,direccionImagen}) => {  
  
  var tipos = ["","Biceps","Triceps","Espalda","Pecho","Hombros","Cuello","Pantorrillas","Cuadriceps","Isquiotibiales","Tibialis","Antebrazo"];
  const deleteA = async () => {
    try {
        
      await services.deleteA(idEquipo);
      alert('Equipo eliminado!')
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
          
          <Card.Title>Tipo: {tipos[tipo]}</Card.Title>
          <Card.Title>Descripcion: {descripcion}</Card.Title>
          <Card.Title><a target="_blank" href={direccionImagen}>Click Aqui para ver Imagen</a></Card.Title>

          <Link to={`/Equipoes/editE/${idEquipo}`}>
            <Button variant="dark">Editar</Button>
          </Link>
          <Button onClick={deleteA} variant="danger" style={{ marginLeft: 16 }}>Eliminar</Button>
        </Card.Body>
      </Card>
    </Col>
    </>
  );
};

export default EquipoItem;