import React, { useState } from 'react';
import {Container,Row,Col,Form,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../components/serviceWorkout';

const AddScreenW = () => {
    const history = useHistory();
    const [titulo, settitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [nivel, setNivel] = useState('');
    const [genero, setGenero] = useState('');
    const [categoria, setCategoria] = useState('');
    const [diasSemana, setDiasSemana] = useState('');
    const [autor, setAutor] = useState('');
    const [direccionPDF, setDireccionPDF] = useState('');
  
    const handleSumbit = async () => {
      try {
        if(!titulo|| !descripcion  || !nivel|| !genero|| !diasSemana|| !autor|| !direccionPDF) {
          alert('Todos los campos son requeridos!');
          return;
        }
        const workout = {
          titulo,descripcion,nivel,genero, categoria,diasSemana,autor,direccionPDF
        };

        const resp = await services.addA(workout);
        console.log(resp)
        alert('Rutina Agregada!');
        history.replace('/Workouts');
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
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el titulo..."
                onChange={e => settitulo(e.target.value)}
                value={titulo}
              />
            </Form.Group>

            
              <Form.Group>
              <Form.Label>Nivel</Form.Label>
              <Form.Control as="select" onChange={e => setNivel(e.target.value)} 
              value={nivel}>
                <option>Novato</option>
                <option>Intermedio</option>
                <option>Dificil</option>
                </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Genero</Form.Label>
              <Form.Control as="select" onChange={e => setGenero(e.target.value)} 
              value={genero}>
                <option>Mujer</option>
                <option>Hombre</option>
                </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Categoria</Form.Label>
              <Form.Control as="select" onChange={e => setCategoria(e.target.value)} 
              value={categoria}>
                <option>FullBody</option>
                <option>Hiit</option>
                <option>Resistencia</option>
                <option>Hipertrofia</option>
                <option>BroSplit</option>
                </Form.Control>
            </Form.Group>
            
            

            <Form.Group>
              <Form.Label>Frecuencia Semanal</Form.Label>
              <Form.Control
                type="number"
                onChange={e => setDiasSemana(e.target.value)}
                value={diasSemana}
              />
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
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el autor..."
                onChange={e => setAutor(e.target.value)}
                value={autor}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Direccion de PDF</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el link de la rutina..."
                onChange={e => setDireccionPDF(e.target.value)}
                value={direccionPDF}
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
  
  export default AddScreenW;