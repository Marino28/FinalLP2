import React, { useState } from 'react';
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../components/serviceCliente';

const AddScreenC = () => {
    const history = useHistory();
    const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
    const handleSumbit = async () => {
      try {
        if(!nombre|| !genero  || !email || !password) {
          alert('Todos los campos son requeridos!');
          return;
        }
        const cliente = {
          nombre, genero, email, password
        };

        const resp = await services.addA(cliente);
        console.log(resp)
        alert('Cliente Agregado!');
        history.replace('/Clientes');
      }catch(error) {
        console.log(error);
        alert('Agregación Fallida!');
      }
    }
  
    return (
      <Container style={{ padding: 16 }}>
        <Row>
          <Col>
            <Form>
              <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el nombre del cliente ..."
                onChange={e => setNombre(e.target.value)}
                value={nombre}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Genero</Form.Label>
              <Form.Control as="select" onChange={e => setGenero(e.target.value)} 
              value={genero}>
                <option>Hombre</option>
                <option>Mujer</option>              
                </Form.Control>
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el correo ..."
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa contraseña del cliente..."
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
  
              <Form.Group>
                <Button variant="dark" onClick={handleSumbit}>
                  Agregar
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default AddScreenC;