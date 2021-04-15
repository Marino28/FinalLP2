import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import services from '../components/serviceAdmin';
import { Link } from 'react-router-dom';
import ClienteItem from '../components/adminItem';

const HomeScreenA = () => {
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
          <p>Cargando Administradores...</p>
        </Col>
      </Container>
    )
  }

  return (

    <Container style={{ padding : 10 }}>
      <h1>Administradores</h1>
      <hr/>
        <Link to={"/Admins/addA"}><Button variant="dark" style={{ marginTop: 16, marginBottom: 16 }}>Agregar</Button></Link>
      <Row>
        {clientes.reverse().slice(0, 50).map(prod => (
          <ClienteItem
            key={prod.idAdmin}
            idAdmin={prod.idAdmin}            
            nombre = {prod.nombre}

          />
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreenA;