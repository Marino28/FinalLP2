import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../components/serviceCliente';

const EditScreenC = ({match: { params }}) => {
  const history = useHistory();

  const idCliente = params.idCliente;
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loadA = async () => {
    try {
      const resp = await services.editA(idCliente);
      const prod = resp.data;      
      setNombre(prod.nombre);
      setGenero(prod.genero);
      setEmail(prod.email);
      setPassword(prod.password);
    }
    catch(error) {
      alert('Fallo en obtención de Cliente.')
    }
  }
  useEffect(() => {
    
    loadA()
  }, []);


  const handleSumbit = async () => {
    try {
      if(!nombre|| !genero || !email || !password) {
        alert('Todos los campos son obligatorios!');
        return;
      }
      const cliente = {
         idCliente, nombre, genero, email, password

      };
      await services.updateA(cliente);
      alert('Cliente Actualizado!');
      history.replace('/Clientes');
    }catch(error) {
      console.log(error);
      alert('Actualizacion fallida!');
    }
  }

  if(!nombre) {
    return (
      <Container>
        <Row>
          <Col>
            <p>Cargando Clientes...</p>
          </Col>
        </Row>
      </Container>
    )
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
              <Button
                variant="dark"
                onClick={handleSumbit}
              >
                Actualizar
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditScreenC;