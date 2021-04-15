import React, { useState } from 'react';
import {Container,Row,Col,Form,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../components/serviceEquipo';

const AddScreenE = () => {
    const history = useHistory();
    const [tipo, setTipo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [direccionImagen, setDireccionImagen] = useState('');
  
    const handleSumbit = async () => {
      try {
        if( !descripcion  || !direccionImagen) {
          alert('Todos los campos son requeridos!');
          return;
        }
        const equipo = {
          tipo,descripcion,direccionImagen
        };

        const resp = await services.addA(equipo);
        console.log(resp)
        alert('Equipo Agregado!');
        history.replace('/Equipoes');
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
              <Form.Label>Tipo</Form.Label>
              <Form.Control as="select" onChange={e => setTipo(e.target.value)} 
              value={tipo}>
                <option>Biceps</option>
                <option>Triceps</option>
                <option>Espalda</option>
                <option>Pecho</option>
                <option>Hombros</option>
                <option>Cuello</option>
                <option>Pantorrillas</option>
                <option>Cuadriceps</option>
                <option>Isquiotibiales</option>
                <option>Tibialis</option>
                <option>Antebrazo</option>
                </Form.Control>
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el descripcion..."
                onChange={e => setDescripcion(e.target.value)}
                value={descripcion}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Direccion de Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el link de la imagen..."
                onChange={e => setDireccionImagen(e.target.value)}
                value={direccionImagen}
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
  
  export default AddScreenE;