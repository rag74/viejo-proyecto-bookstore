import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
  <>
  <Navbar/>
  <ItemDetailContainer/>
  </>
  );
}

export default App;
