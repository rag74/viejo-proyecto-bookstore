import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import {CartProvider, useCart} from './components/CartContext/CartContext.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart.jsx'
import Pruebas from './components/Pruebas/Pruebas.jsx'
import Order from './components/Order/Order.jsx'

export default ()=> <CartProvider>
  <App></App>
  </CartProvider>


function App() {

  return (
  
  <BrowserRouter>
    <Pruebas/>
    <Navbar/>
    <Switch>
      <Route path='/' exact>
      <ItemListContainer titulo="CATALOGO" />
      </Route>

      <Route path='/category/novedades' exact>
      <ItemListContainer titulo="NOVEDADES" categoria="novedades"/>
      </Route>

      <Route path='/category/masvendidos' exact>
      <ItemListContainer titulo="LOS MÁS VENDIDOS" categoria="masvendidos"/>
      </Route>

      <Route path='/:categoria/:id' exact>
      <ItemDetailContainer titulo="" />
      </Route>

      <Route path='/cart' exact>
      <Cart />
      </Route>

      <Route path='/payment' exact>
      <Order />
      </Route>

    </Switch>
  </BrowserRouter>
  );
}
