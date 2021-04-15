import React, { useEffect, useState } from 'react';
import {Container,Row, Col, Button } from 'react-bootstrap';
import services from '../components/serviceEquipo';
import { Link } from 'react-router-dom';
import ClienteItem from '../components/equipoItem';

const HomeScreenE = () => {
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
          <p>Cargando Inventario...</p>
        </Col>
      </Container>
    )
  }

  return (

    <Container backgroundcolor="black" bg="dark" variant="dark" style={{ padding : 10 }}>
      <h1>Equipos</h1>
      <hr/>
        <Link to={"/Equipoes/addE"}><Button variant="dark" style={{ marginTop: 16, marginBottom: 16 }}>Agregar</Button></Link>
      <Row>
        {clientes.reverse().slice(0, 50).map(prod => (
          <ClienteItem bg="dark" variant="dark"
            key={prod.idEquipo}
            idEquipo={prod.idEquipo}            
            tipo={prod.tipo}
            descripcion={prod.descripcion}
            direccionImagen={prod.direccionImagen}

          />
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreenE;