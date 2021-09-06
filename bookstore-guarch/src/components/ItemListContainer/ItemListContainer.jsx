import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import data from '../../data/data'

import { collection, query, where, getDocs  } from "firebase/firestore";
import db from '../../firebase'


function ItemListContainer({titulo, categoria}) {


  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  var timeout

  useEffect(() => {
    async function getProductos() {
        const arr = []

        if(categoria!=null) {
    
            const q = query(collection(db, "items"), where("categoria", "array-contains", (categoria)))
            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach(item => {
            arr.push(item.data());
            })

            console.log(arr);
            setProductos(arr);
            setLoading(false);

        } else {
            const querySnapshot = await getDocs(collection(db, "items"));
            querySnapshot.forEach((item) => {
                arr.push(item.data());
                });
                console.log(arr);
                setProductos(arr);
                setLoading(false);
        }}

    getProductos()  
    
}, [categoria]);



  console.log(`Producto en ItemlistContainer:`);
  console.log(productos);
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