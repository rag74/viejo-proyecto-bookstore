import React, { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemCounter from '../ItemCounter/ItemCounter'
import ItemList from "../ItemList/ItemList";

const lista = [
  {
    id: '1',
    title: 'Las primas - Aurora Venturini', 
    price: '1330',
    pictureUrl:'https://http2.mlstatic.com/D_Q_NP_612431-MLA47061867291_082021-AC.jpg',
  },
  
  {
    id: '2',
    title: 'Yo recordaré por ustedes - Juan Forn', 
    price: '1690',
    pictureUrl:'https://http2.mlstatic.com/D_Q_NP_944021-MLA47066450597_082021-AC.jpg',
  },

  {
    id: '3',
    title: 'Autobiografía de mi madre - Jamaica Kincaid', 
    price: '1200',
    pictureUrl:'https://http2.mlstatic.com/D_Q_NP_627073-MLA47064940595_082021-AC.jpg',
  },

  {
    id: '4',
    title: 'Ensayos I - Lydia Davis', 
    price: '990',
    pictureUrl:'https://http2.mlstatic.com/D_Q_NP_796500-MLA47058660556_082021-AC.jpg',
  },

]


console.log(lista);


function ItemListContainer() {

  /*const onAdd = (userSelected, setUserSelected, initial)=> {
    console.log("genial! Agregamos al carro "+userSelected)
    setUserSelected(initial);
    const element = document.getElementById("accion");
    element.innerHTML = "Productos agregados: "+userSelected;
    element.className = "agregado";
    setTimeout(()=>{element.innerHTML = ".";element.className = ""},1500);
    };*/

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)

  /*const promise = new Promise ((resolve, reject)=>{
      setTimeout (()=>{
        resolve(lista),reject(new Error('No hay productos'))
      },2000);
    });

  promise
   .then(lista => {setProductos(lista);setLoading(false)})
   .catch(error => console.error(error));*/


  const getProductos = ()=> {
    return new Promise ((resolve, reject)=>{
      setTimeout (()=>{
        resolve(lista),
        reject(new Error('No hay productos'));
      },2000);
    })
  };

  setearProductos()
  async function setearProductos() {
    const traerlistado = await getProductos();
    setProductos(traerlistado);
    setLoading(false)
  };

  console.log(productos);
  console.log(loading);

  return (
    
    <div className="contenedor">
       <h1 className="tituloseccion">CATALOGO</h1>   
    <div className="catalogo"> 
    <ItemList productos={productos}
              loading={loading}
    />
    </div>
    </div>
  );
}

export default ItemListContainer