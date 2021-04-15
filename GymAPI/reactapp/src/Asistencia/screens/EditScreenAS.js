import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../components/serviceAsistencia';

const EditScreenAS = ({match: { params }}) => {
  const history = useHistory();
  const fecha = params.fecha;
  const idPersona = params.idPersona;
  const [vino, setVino] = useState('');

  const loadA = async () => {
    try {
      const resp = await services.editA(fecha,idPersona);
      const prod = resp.data;      
      setVino(prod.vino);
    }
    catch(error) {
      alert('Fallo en obtención de Asistencia.')
    }
  }
  useEffect(() => {
    
    loadA()
  }, []);


  const handleSumbit = async () => {
    try {
      if(!vino) {
        alert('Todos los campos son obligatorios!');
        return;
      }
      const equipo = {
        fecha,
        idPersona,
        vino

      };
      await services.updateA(equipo);
      alert('Asistencia Actualizado!');
      history.replace('/Asistencias');
    }catch(error) {
      console.log(error);
      alert('Actualizacion fallida!');
    }
  }

  if(!vino) {
    return (
      <Container>
        <Row>
          <Col>
            <p>Cargando Asistencias...</p>
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
              <Form.Label>Asistencia:</Form.Label>
              <Form.Control as="select" onChange={e => setVino(e.target.value)} 
              value={vino}>
                <option>No</option>
                <option>Si</option>
                </Form.Control>
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

export default EditScreenAS;