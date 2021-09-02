import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import data from '../../data/data'


function ItemListContainer({titulo, categoria}) {


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
          const filtrados=items.filter((prod)=>prod.categoria.includes(categoria))
          setProductos(filtrados)
          setLoading(false)
            } else {
              setProductos(items)
              setLoading(false)
              }
      })},[categoria])

  //console.log(productos);
  //console.log(loading);

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