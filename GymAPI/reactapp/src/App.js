import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeScreenC from './Cliente/screens/HomeScreenC';
import AddScreenC from './Cliente/screens/AddScreenC';
import EditScreenC from './Cliente/screens/EditScreenC';

import HomeScreenW from './Workout/screens/HomeScreenW';
import AddScreenW from './Workout/screens/AddScreenW';
import EditScreenW from './Workout/screens/EditScreenW';

import HomeScreenA from './Admin/screens/HomeScreenA';
import AddScreenA from './Admin/screens/AddScreenA';
import EditScreenA from './Admin/screens/EditScreenA';

import HomeScreenE from './Equipo/screens/HomeScreenE';
import AddScreenE from './Equipo/screens/AddScreenE';
import EditScreenE from './Equipo/screens/EditScreenE';

import HomeScreenAS from './Asistencia/screens/HomeScreenAS';
import AddScreenAS from './Asistencia/screens/AddScreenAS';
import EditScreenAS from './Asistencia/screens/EditScreenAS';

import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/Workouts/addW" component={AddScreenW} />
            <Route path="/Workouts/editW/:idWorkout" component={EditScreenW} />
            <Route path="/Workouts" component={HomeScreenW} />

            <Route path="/Clientes/addC" component={AddScreenC}/>
            <Route path="/Clientes/editC/:idCliente" component={EditScreenC} />
            <Route path="/Clientes" component={HomeScreenC} />

            <Route path="/Admins/addA" component={AddScreenA}/>
            <Route path="/Admins/editA/:idAdmin" component={EditScreenA} />
            <Route path="/Admins" component={HomeScreenA} />

            <Route path="/Equipoes/addE" component={AddScreenE} />
            <Route path="/Equipoes/editE/:idEquipo" component={EditScreenE} />
            <Route path="/Equipoes" component={HomeScreenE} />

            <Route path="/Asistencias/addAS" component={AddScreenAS} />
            <Route path="/Asistencias/editAS/:fecha" component={EditScreenAS} />
            <Route path="/Asistencias" component={HomeScreenAS} />

            <Route path="/" component={Home} />
            
          </Switch>
        </div>
      </Router>
      <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Sobre</h6>
            <p class="text-justify">Marino Gym <i>TU CRUD GYM POR EXCELENCIA </i> Es un proyecto desarrollado con el fin de que Marino Del Carpio aprenda las herramientasa de ReactJs, ASP.NET FRAMEWORK y un  poco de frontend para completar con los requerimientos de la materia de Lenguajes de Programacion II.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categorias</h6>
            <ul class="footer-links">
              <li><a href="http://localhost:3000/Asistencias">Asistencias</a></li>
              <li><a href="http://localhost:3000/Workouts">Rutinas</a></li>
              <li><a href="http://localhost:3000/Equipoes">Equipos</a></li>
              <li><a href="http://localhost:3000/Admins">Admins</a></li>
              <li><a href="http://localhost:3000/Clientes">Clientes</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Links</h6>
            <ul class="footer-links">
              
              <li><a target="_blank" href="https://wa.me/18293280928">Contacto</a></li>
              
              <li><a target="_blank" href="https://www.linkedin.com/in/marino-del-carpio-576729157/">LinkedIn</a></li>
              
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="http://localhost:3000/">Marino Gym</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
          </div>
        </div>
        </div>
      </footer>
      </div>
  );
}

export default App;
