import React, { useState } from 'react';
import {Container,Row,Col,Form,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../components/serviceAsistencia';

const AddScreenAS = () => {
    const history = useHistory();
    const [fecha, setFecha] = useState('');
    const [idPersona, setIdPersona] = useState('');   
    const [vino, setVino] = useState('');
  
    const handleSumbit = async () => {
      try {
        if(!fecha || !idPersona) {
          alert('Todos los campos son requeridos!');
          return;
        }
        const equipo = {
          fecha,idPersona,vino
        };

        const resp = await services.addA(equipo);
        console.log(resp)
        alert('Asistencia Agregada!');
        history.replace('/Asistencias');
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
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                onChange={e => setFecha(e.target.value)}
                value={fecha}
              />

            </Form.Group>

            <Form.Group>
              <Form.Label>Codigo Cliente</Form.Label>
              <Form.Control
                type="number"
                onChange={e => setIdPersona(e.target.value)}
                value={idPersona}
              />
            </Form.Group>

              <Form.Group>
              <Form.Label>Asistencia</Form.Label>
              <Form.Control as="select" onChange={e => setVino(e.target.value)} 
              value={vino}>
                <option>No</option>
                <option>Si</option>
                </Form.Control>
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
  
  export default AddScreenAS;