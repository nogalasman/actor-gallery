
import { HashRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ActorModel from './model/ActorModel';
import ActorsPage from './pages/ActorsPage';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';

function App() {
  const [actorsData, setActorsData] = useState(null);

  useEffect(() => {
      axios.get("actors.json").then(res => {
          setActorsData(res.data.map(plainActor => new ActorModel(plainActor)));
      });
  },[]);

  return (
    <div className="App">
      {
        <AppBar position="static">
        <Toolbar>
          <Button variant="contained" color="primary" href="#/">HomePage</Button>
          <Button variant="contained" color="primary" href="#/actors">Actors</Button>
        </Toolbar>
      </AppBar>
      }
      {/* <p>blabla</p> */}
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/actors"><ActorsPage actors={actorsData}/></Route>
          <Route exact path="/actors/:id/movies"><MoviesPage actors={actorsData}/></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
