import React, { useState } from 'react';
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../components/serviceAdmin';

const AddScreenA = () => {
    const history = useHistory();
    const [nombre, setNombre] = useState('');
  
    const handleSumbit = async () => {
      try {
        if(!nombre) {
          alert('Todos los campos son requeridos!');
          return;
        }
        const admin = {
          nombre
        };

        const resp = await services.addA(admin);
        console.log(resp)
        alert('Administrador Agregado!');
        history.replace('/Admins');
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
                placeholder="Ingresa el nombre..."
                onChange={e => setNombre(e.target.value)}
                value={nombre}
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
  
  export default AddScreenA;