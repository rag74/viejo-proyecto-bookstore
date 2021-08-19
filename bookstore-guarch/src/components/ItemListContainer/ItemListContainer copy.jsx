import React, { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemCounter from '../ItemCounter/ItemCounter'
import ItemList from "../ItemList/ItemList";
import data from '../../data/data'


function ItemListContainer({titulo}) {

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


  const getProductos = ()=> {
    return new Promise ((resolve, reject)=>{
      setTimeout (()=>{
        resolve(data),
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
       <h1 className="tituloseccion">{titulo}</h1>   
    <div className="catalogo"> 
    <ItemList productos={productos}
              loading={loading}
    />
    </div>
    </div>
  );
}

export default ItemListContainer