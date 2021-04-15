import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';
import services from '../components/serviceWorkout';

const EquipoItem = ({ idWorkout,titulo,descripcion,nivel,genero, categoria,diasSemana,autor,direccionPDF}) => {  
  
  var generos = ["","Mujer","Hombre"];
  var niveles = ["","Novato","Intermedio", "Dificil"];
  var categorias = ["","FullBody","Hiit","Resistencia","Hipertrofia","BroSplit"];
  const deleteA = async () => {
    try {
        
      await services.deleteA(idWorkout);
      alert('Rutina eliminada!')
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
          
          <Card.Title>{titulo}</Card.Title>
          <Card.Title>Descripcion: {descripcion}</Card.Title>
          <Card.Title>Nivel: {niveles[nivel]}</Card.Title>
          <Card.Title>Genero: {generos[genero]}</Card.Title>
          <Card.Title>Categoria: {categorias[categoria]}</Card.Title>
          <Card.Title>Frecuencia semanal: {diasSemana}</Card.Title>
          <Card.Title>Autor: {autor}</Card.Title>
          <Card.Title><a target="_blank" href={direccionPDF}>Click aquí para visualizar</a></Card.Title>

          <Link to={`/Workouts/editW/${idWorkout}`}>
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