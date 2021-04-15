import React, { useEffect, useState } from 'react';
import {Form, FormControl,Container,Row, Col, Button } from 'react-bootstrap';
import services from '../components/serviceAsistencia';
import { Link } from 'react-router-dom';
import ClienteItem from '../components/asistenciaItem';

const HomeScreenAS = () => {
  const [clientes, setProductos] = useState(null)
  const [search, setSearch] = useState(null)
  

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
          <p>Cargando Asistencia...</p>
        </Col>
      </Container>
    )
  }

  return (

    <Container backgroundcolor="black" bg="dark" variant="dark" style={{ padding : 10 }}>
      <h1>Asistencia</h1>
      <hr/>
        <Link to={"/Asistencias/addAS"}><Button variant="dark" style={{ marginTop: 16, marginBottom: 16 }}>Agregar</Button></Link>
      <Row>
        {clientes.reverse().slice(0, 50).map(prod => (
          <ClienteItem bg="dark" variant="dark"
            key={prod.fecha}
            key={prod.idPersona}
            fecha={prod.fecha}
            idPersona={prod.idPersona}            
            vino={prod.vino}

          />
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreenAS;