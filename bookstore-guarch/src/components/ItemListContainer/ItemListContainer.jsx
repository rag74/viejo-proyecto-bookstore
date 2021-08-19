import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';
import ItemCounter from '../ItemCounter/ItemCounter'
import ItemList from "../ItemList/ItemList";
import data from '../../data/data'


function ItemListContainer({titulo, categoria}) {

  /*const onAdd = (userSelected, setUserSelected, initial)=> {
    console.log("genial! Agregamos al carro "+userSelected)
    setUserSelected(initial);
    const element = document.getElementById("accion");
    element.innerHTML = "Productos agregados: "+userSelected;
    element.className = "agregado";
    setTimeout(()=>{element.innerHTML = ".";element.className = ""},1500);
    };*/

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  var timeout

useEffect(()=>{
  const getProductos = ()=> {
    loading ? timeout=2000 : timeout=0
    return new Promise ((resolve, reject)=>{
      setTimeout (()=>{
        resolve(data),
        reject(new Error('No hay productos'));
      },timeout);
    })
  };


  getProductos().then((items)=>{
    if(categoria!=null){
      const filtrados=items.filter((prod)=>prod.categoria===categoria)
      setProductos(filtrados)
      setLoading(false)
    } else {
      setProductos(items)
      setLoading(false)
    }
  })

},[categoria])

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