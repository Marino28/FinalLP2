import React, { useEffect, useState } from 'react';
import { Container,Row, Col, Button } from 'react-bootstrap';
import services from '../components/serviceCliente';
import { Link } from 'react-router-dom';
import ClienteItem from '../components/clienteItem';

const HomeScreenC = () => {
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
          <p>Cargando clientes...</p>
        </Col>
      </Container>
    )
  }

  return (

    <Container style={{ padding : 10 }}>
      <h1>Clientes</h1>
      <hr/>
        <Link to={"/Clientes/addC"}><Button variant="dark" style={{ marginTop: 16, marginBottom: 16 }}>Agregar</Button></Link>
      <Row>
        {clientes.reverse().slice(0, 50).map(prod => (
          <ClienteItem
            key={prod.idCliente}
            idCliente={prod.idCliente}            
            nombre={prod.nombre}
            genero={prod.genero}
            email={prod.email}
            password={prod.password}

          />
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreenC;