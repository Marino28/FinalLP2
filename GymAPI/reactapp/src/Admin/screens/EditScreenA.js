import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../components/serviceAdmin';

const EditScreenE = ({match: { params }}) => {
  const history = useHistory();
  const idAdmin = params.idAdmin;
  const [nombre, setNombre] = useState('');

  const loadA = async () => {
    try {
      const resp = await services.editA(idAdmin);
      const prod = resp.data;      
      setNombre(prod.nombre);
    }
    catch(error) {
      alert('Fallo en obtención de Administrador.')
    }
  }
  useEffect(() => {
    
    loadA()
  }, []);


  const handleSumbit = async () => {
    try {
      if(!nombre) {
        alert('Todos los campos son obligatorios!');
        return;
      }
      const admin = {
        idAdmin,
        nombre

      };
      await services.updateA(admin);
      alert('Admin Actualizado!');
      history.replace('/Admins');
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
            <p>Cargando Administradores...</p>
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
                placeholder="Ingresa el nombre..."
                onChange={e => setNombre(e.target.value)}
                value={nombre}
              />
            </Form.Group>

              <Form.Group>
                <Button variant="dark" onClick={handleSumbit}>
                  Actualizar
                </Button>
              </Form.Group>
            </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditScreenE;