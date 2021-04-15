import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import services from '../components/serviceWorkout';
import { Link } from 'react-router-dom';
import ClienteItem from '../components/workoutItem';

const HomeScreenW = () => {
  const [clientes, setProductos] = useState(null)
  

  const fetchProductos = async () => {
    try {
      const resp = await services.getA()
      setProductos(resp.data)
    }catch (error) {
      alert('Obtención Fallida.')      
    }
  }

  useEffect(() => {
    fetchProductos()
  }, [])

  if(!clientes) {
    return (
      <Container>
        <Col>
          <p>Cargando Rutinas...</p>
        </Col>
      </Container>
    )
  }

  return (

    <Container style={{ padding : 10 }}>
      <h1>Rutinas</h1>
      <hr/>
        <Link to={"/Workouts/addW"}><Button variant="dark" style={{ marginTop: 16, marginBottom: 16 }}>Agregar</Button></Link>
      <Row>
        {clientes.reverse().slice(0, 50).map(prod => (
          <ClienteItem
            key={prod.idWorkout}
            idWorkout={prod.idWorkout}            
            titulo={prod.titulo}
            descripcion={prod.descripcion}
            nivel={prod.nivel}
            genero={prod.genero}
            categoria={prod.categoria}
            diasSemana={prod.diasSemana}
            autor={prod.autor}
            direccionPDF={prod.direccionPDF}

          />
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreenW;