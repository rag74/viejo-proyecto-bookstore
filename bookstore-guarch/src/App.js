import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route path='/' exact>
      <ItemListContainer titulo="CATALOGO" />
      </Route>

      <Route path='/novedades' exact>
      <ItemListContainer titulo="NOVEDADES" />
      </Route>

      <Route path='/masvendidos' exact>
      <ItemListContainer titulo="LOS MÁS VENDIDOS" />
      </Route>

      <Route path='/:categoria/:id' exact>
      <ItemDetailContainer titulo="" />
      </Route>
      
    </Switch>
  </BrowserRouter>
  );
}

export default App;

/*
<ItemDetailContainer />
<ItemListContainer /> */