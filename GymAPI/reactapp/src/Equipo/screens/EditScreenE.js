import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../components/serviceEquipo';

const EditScreenE = ({match: { params }}) => {
  const history = useHistory();

  const idEquipo = params.idEquipo;
  const [tipo, setTipo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [direccionImagen, setDireccionImagen] = useState('');

  const loadA = async () => {
    try {
      const resp = await services.editA(idEquipo);
      const prod = resp.data;      
      setTipo(prod.tipo);
      setDescripcion(prod.descripcion);
      setDireccionImagen(prod.direccionImagen);
    }
    catch(error) {
      alert('Fallo en obtención de Equipo.')
    }
  }
  useEffect(() => {
    
    loadA()
  }, []);


  const handleSumbit = async () => {
    try {
      if(!tipo || !descripcion || !direccionImagen) {
        alert('Todos los campos son obligatorios!');
        return;
      }
      const equipo = {
        idEquipo, tipo, descripcion, direccionImagen

      };
      await services.updateA(equipo);
      alert('Equipo Actualizado!');
      history.replace('/Equipoes');
    }catch(error) {
      console.log(error);
      alert('Actualizacion fallida!');
    }
  }

  if(!tipo) {
    return (
      <Container>
        <Row>
          <Col>
            <p>Cargando Equipos...</p>
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